import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGIF = (tag) => {
    const [gif, setGif] = useState('');
    //COMPONENT DID mount on the first render

    const fetchGif = (tag) => {
    axios.get(tag ? `${url}&tag=${tag}` : url) //dynamic url
        .then(res => { //when we have or don't have a tag
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

    return([gif, handleClick])

}

export default useGIF;