import React, { useState } from 'react';

import useGIF from '../hooks/useGIF';

const Tag = () => {
    const [tag, setTag] = useState('puppies');
    const [gif, handleClick] = useGIF(tag);

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

export default Tag;