import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className="an-footer">
        <div className="footer-top py-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-sm-6">
                        <div className="footer-about footer-widget mb-4 mb-xl-0">
                            <a href="index.html"><img src="images/logo/logo.png" alt="Logo"/></a>
                            <p>This is the title of a  new tier has been done nis the This is the title of a new tier has been done nis the This is the title of a  new tier has been done nis.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="footer-widget mb-4 mb-xl-0">
                            <h5 className="mb-3">POPULAR CATEGORIES</h5>
                            <ul className="footer-list">
                                <li><Link to="#" className="pt-0">LAPTOP & ACCESSORIES</Link></li>
                                <li><Link to="#">MOBILE PHONES</Link></li>
                                <li><Link to="#">DESKTOP COMPUTER</Link></li>
                                <li><Link to="#">HEADPHONES</Link></li>
                                <li><Link to="#">SPEAKERS & SOUNDS</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <div className="footer-widget mb-4 mb-sm-0">
                            <h5 className="mb-3">POPULAR POSTS</h5>
                            <ul className="footer-list">
                                <li><Link to="#" className="pt-0">LAPTOP & ACCESSORIES</Link></li>
                                <li><Link to="#">MOBILE PHONES</Link></li>
                                <li><Link to="#">DESKTOP COMPUTER</Link></li>
                                <li><Link to="#">HEADPHONES</Link></li>
                                <li><Link to="#">SPEAKERS & SOUNDS</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6">
                        <h4 className="mb-3">SUBSCRIBE US</h4>
                        <p>Subscribe now for newsletter</p>
                        <form className="footer-subscribe">
                            <fieldset>
                                <label htmlFor="footer-input" className="visually-hidden">Subscribe</label>
                                <input type="mail" placeholder="Enter your email here" id="footer-input"/>
                            </fieldset>
                            <button type="submit" className="subscribe-btn"><i className="uil uil-message"></i></button>
                        </form>
                        <div className="social-links">
                            <a href="https://www.facebook.com/akaaritbd/" className="social-link"><i className="uil uil-facebook-f"></i></a>
                            <a href="https://www.instagram.com/web/lite/" className="social-link"><i className="uil uil-instagram"></i></a>
                            <a href="https://www.youtube.com/channel/UC5_zUqknHg0Trch7iSnYfyQ" className="social-link"><i className="uil uil-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom primary-gradient py-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-white">&copy; ANEWS - Just another ANEWS Demo site theme by <a href="https://www.akaarit.com/" className="text-white">Akaar IT Ltd</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;