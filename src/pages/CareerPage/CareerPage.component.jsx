import React from 'react';
import Header from '../../components/Header/Header.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import ReactLogo from '../../assets/career-middle-content.svg';
import './CareerPage.styles.scss';

const CareerPage = () => (
    <div className="career-page-container">
        <Header />
        <div className="top-content">
            <h1 className="work-with-us-title">Work With Us</h1>
            <p className="join-us-para">Join us in building the future of work for the next billion users.</p>
            <CustomButton content="See Positions" size="large" />
        </div>
        <div className="middle-content">
            <p>
                We're building the simplest outsourcing solution for companies so that they can focus on scaling operations, instead of sourcing,
                managing & tracking on-demand workers.<br /><br />
                We're streamlining the end to end management processes to make the whole outsourcing process simpler and easier.<br /><br />
                If you think what we're doing is interesting, then we would love to have a discussion with you.
            </p>
            <div>
                <img src={ReactLogo} alt="career" />
            </div>
        </div>
    </div>
);

export default CareerPage;