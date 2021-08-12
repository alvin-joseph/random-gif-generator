import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    const [tag, setTag] = useState('dogs');
    const [gif, setGif] = useState('');
    //COMPONENT DID mount on the first render

    const fetchGif = (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    axios.get(url) //promise
        .then(res => {
            const imageSrc = res.data.data.images.downsized_large.url;
            setGif(imageSrc);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchGif(tag);
    }, [tag]);

    const handleClick = () => {
        fetchGif(tag);
    }

    const onChange = e => {
        setTag(e.target.value);
    }

    return (
        <div className="container">
            <h1>Random {tag} Gif</h1>
            <img src={gif} alt="Random GIF" width="500" />
            <input value={tag} onChange={onChange}/>
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    );
}

export default Random