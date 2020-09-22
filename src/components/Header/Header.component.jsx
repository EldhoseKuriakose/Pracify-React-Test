import React from 'react';
import CustomButton from '../CustomButton/CustomButton.component';
import './Header.styles.scss';

const Header = () => (
    <div className="header-container">
        <h2 className="pracify-title">pracify.</h2>
        <div className="button-container">
            <CustomButton content="Download App" />
            <CustomButton content="I'm a Company" colour="black" />
        </div>
    </div>
);

export default Header;
