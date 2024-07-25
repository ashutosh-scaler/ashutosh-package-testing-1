import React from 'react';

const MyButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            Click Me!
        </button>
    );
};

export default MyButton;