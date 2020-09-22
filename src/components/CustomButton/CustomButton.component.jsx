import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ content, colour }) => (
    <div className="custom-button-container">
        <button className={`${colour == "black" ? "colour-black": ''}`}>
            {content}
        </button>
    </div>
);

export default CustomButton;