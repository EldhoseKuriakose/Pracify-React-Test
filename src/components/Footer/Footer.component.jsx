import React from 'react';
import GooglePlay from '../../assets/google-play-badge@3x.png';
import AppStore from '../../assets/app-store.svg';
import HeartIcon from '../../assets/heart.svg';
import CopyrightIcon from '../../assets/copyright.svg';
import FacebookIcon from '../../assets/facebook.svg';
import InstagramIcon from '../../assets/instagram.svg';
import LinkedinIcon from '../../assets/linkedin.svg';
import TwitterIcon from '../../assets/twitter.svg';
import './Footer.styles.scss';

const Footer = () => (
    <div className="footer-container">
        <hr />
        <div className="footer-content">
            <div className="footer-left-side-content">
                <h3 className="pracify">pracify.</h3>
                <p>
                    Pracify helps companies scale on-demand by connecting them to a network of selected and trained gig workers 
                    for performing easily doable task-based jobs on a pay-per-performance system.
                </p>
                <div className="store-icons">
                    <img className="google-play-image" src={GooglePlay} alt="Play Store" />
                    <img className="app-store-image" src={AppStore} alt="App Store" />
                </div>
            </div>
            <div className="vertical-line"></div>
            <div className="footer-right-side-content">
                <div className="set-1">
                    <p className="special">Company</p>
                    <p>About Us</p>
                    <p>How It Works</p>
                    <p>Careers</p>
                </div>
                <div className="set-2">
                    <p className="special">Get In Touch</p>
                    <p>Contact Us</p>
                    <p>College Festivals</p>
                </div>
                <div className="set-3">
                    <p className="special">Legal</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p>Made with <img src={HeartIcon} alt="heart" /> in India</p>
            <p>Copyright <img src={CopyrightIcon} alt="copyright" /> 2020 Tyche Ventures Private Limited.</p>
            <div className="social-media-icons">
                <img src={FacebookIcon} alt="facebook" />
                <img src={InstagramIcon} alt="instagram" />
                <img src={LinkedinIcon} alt="linkedin" />
                <img src={TwitterIcon} alt="twitter" />
            </div>
        </div>
    </div>
);

export default Footer;