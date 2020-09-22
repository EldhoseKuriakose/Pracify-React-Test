import React from 'react';
import Header from '../../components/Header/Header.component';
import FirstLogo from '../../assets/aboutus-first-image.svg';
import SecondLogo from '../../assets/aboutus-second-image.svg';
import ThirdLogo from '../../assets/aboutus-third-image.svg';
import FourthLogo from '../../assets/aboutus-fourth-image.png';
import CustomButton from '../../components/CustomButton/CustomButton.component';
import Footer from '../../components/Footer/Footer.component';
import './AboutUsPage.styles.scss';

const AboutUsPage = () => (
    <div className="aboutus-page-container">
        <Header />
        <div className="top-content">
            <div className="para">
                <h1 className="title">Pracify - Building India's youngest & strongest on-demand workforce!</h1>
                <p>
                    Pracify helps companies to scale using our network of on-demand workers
                    comprising of India's youth who are paid on a 'pay-per-performance' system.<br /><br />
                    With Pracify, companies can achieve their business goals in a cost-effective 
                    manner by onboarding on-demand workers for various tasks.
                </p>
            </div>
            <img src={FirstLogo} alt="logo-1" />
        </div>

        <div className="middle-content">
            <img src={SecondLogo} alt="logo-2" />
            <div className="para">
                <h1 className="title">Pracify for Business</h1>
                <p>
                Pracify helps mitigate traditional hiring risks with its 'outcome-based payout' feature 
                where companies pay only for the work they approve and not manpower employed.<br /><br />
                Our company dashboard acts as a recruitment engine, enables tracking of work &
                allows payment disbursal. You can also opt for our managed services for guaranteed 
                delivery of outcome.
                </p>
                <CustomButton content="Get Pracified" size="large" />
            </div>
        </div>

        <div className="bottom-content">
            <div className="para">
                <h1 className="title">Pracify for Gig Workers</h1>
                <p>
                    Pracify helps college students & young adults who haven't entered the professional
                    world yet to earn experience and money by working for their favourite companies
                    on their own schedule.<br /><br />
                    You have the choice of selecting gigs according to your own skills and interests
                    and all your earnings are safe and secured which are directly transferred to your 
                    Pracify wallet which can be easily redeemed to your Paytm or Bank account.
                </p>
                <CustomButton content="Get Pracified" size="large" />
            </div>
            <img src={ThirdLogo} alt="logo-3" />
        </div>

        <div className="contact">
            <h2 className="content">Got something? Feel free to get in touch with us!</h2>
            <CustomButton content="Contact Us" isContactUs />
        </div>

        <div className="backed-by">
            <p>We're backed by</p>
            <img src={FourthLogo} alt="logo-4" />
        </div>
        <Footer />
    </div>
);

export default AboutUsPage;