import React from 'react';
import './footer.scss';
import { LogoCyber } from '../../../assets';

const Icon = ({icon}) => {
    return(
        <div className="icon-wrapper">
            <i className={icon+" icon-medsos"}></i>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoCyber} alt="logo" />
                </div>
                <div className="social-wrapper">
                    <Icon icon="fab fa-facebook" />
                    <Icon icon="fab fa-twitter" />
                    <Icon icon="fab fa-instagram" />
                    <Icon icon="fab fa-telegram" />
                    <Icon icon="fab fa-discord" />
                    <Icon icon="fab fa-github" />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
