import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ content, colour, size, isContactUs }) => (
    <div className="custom-button-container">
        <button
            className={`
                ${colour === "black" ? "colour-black": ''}
                ${size === "large" ? "size-large" : ''}
                ${isContactUs ? 'contact-us-button' : ''}
            `}
        >
            {content}
        </button>
    </div>
);

export default CustomButton;