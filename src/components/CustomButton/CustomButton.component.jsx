import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ content, colour, size }) => (
    <div className="custom-button-container">
        <button
            className={`
                ${colour === "black" ? "colour-black": ''}
                ${size === "large" ? "size-large" : ''}
            `}
        >
            {content}
        </button>
    </div>
);

export default CustomButton;