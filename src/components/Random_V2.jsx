import React from 'react';

import useGIF from '../hooks/useGIF';

const Random = () => {
    const [gif, handleClick] = useGIF();

    return (
        <div className="container">
            <h1>Random Gif</h1>
            <img src={gif} alt="Random GIF" width="500" />
            <button onClick={handleClick}>CLICK FOR NEW</button>
        </div>
    );
}

export default Random;