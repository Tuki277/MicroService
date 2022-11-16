import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Footer = () => {
    return (
        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <a href="./index.html"><img src={ logo } alt="" /></a>
                            </div>
                            <ul>
                                <li>Address: 60-49 Road 11378 New York</li>
                                <li>Phone: +65 11.188.888</li>
                                <li>Email: hello@colorlib.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                        <div className="footer__widget">
                            <h6>Useful Links</h6>
                            <ul>
                                <li><Link to={'#'}>About Us</Link></li>
                                <li><Link to={'#'}>About Our Shop</Link></li>
                                <li><Link to={'#'}>Secure Shopping</Link></li>
                                <li><Link to={'#'}>Delivery infomation</Link></li>
                                <li><Link to={'#'}>Privacy Policy</Link></li>
                                <li><Link to={'#'}>Our Sitemap</Link></li>
                            </ul>
                            <ul>
                                <li><Link to={'#'}>Who We Are</Link></li>
                                <li><Link to={'#'}>Our Services</Link></li>
                                <li><Link to={'#'}>Projects</Link></li>
                                <li><Link to={'#'}>Contact</Link></li>
                                <li><Link to={'#'}>Innovation</Link></li>
                                <li><Link to={'#'}>Testimonials</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer