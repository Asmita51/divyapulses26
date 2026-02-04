import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TopShape from '../../images/ft-bg.png'
import logo from '../../images/logoDivyafooter.png'
import FtShape1 from '../../images/ft-shape-1.png'
import FtShape2 from '../../images/ft-shape-2.png'
import Btnicon from '../../images/pointer.svg'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError('');
            console.log('Email is valid:', email);
        } else {
            setError('Please enter a valid email address.');
        }
    };

    const { FooterShape = true } = props

    return (
        <div className={'' + props.hclass}>
            {/* {FooterShape && (
                <div className="footer-shape">
                    <img src={TopShape} alt="" />
                </div>
            )} */}
            <footer className="wpo-site-footer" >
                <div className="wpo-upper-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget about-widget">
                                    <div className="logo widget-title">
                                        <img src={logo} alt="blog" />
                                    </div>
                                    <p style={{lineHeight:'1.5'}}>A global leader in the pulses and spice industry from the UAE. We are one of the reputed trading Company in Dubai UAE, dealing with our customers with its dedicated and motivated management/staff team who deliver products to its customers with high quality standard of their experience.</p>
                                    <div className="social-widget">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-facebook" aria-hidden="true"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-twitter" aria-hidden="true"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-skype" aria-hidden="true"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-linkedin" aria-hidden="true"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Explore link</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                        <li><Link onClick={ClickHandler} to="/products">Products </Link></li>
                                        <li><Link onClick={ClickHandler} to="/brandandpackaging">Brands &amp; Packaging</Link></li>
                                        <li><Link onClick={ClickHandler} to="/team">Meet Our Team</Link></li>
                                        <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                          

                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget wpo-contact-widget">
                                    <div className="widget-title">
                                        <h3>Contact</h3>
                                    </div>
                                    <div className="contact-ft">
                                        <ul>
                                            <li><i className="fi flaticon-placeholder"></i>New Sanaiya Umm Al Thoub, Umm Al Quawain.
                                            </li>
                                            <li><i className="fi flaticon-phone-call"></i>+971504993076</li>
                                            <li><i className="fi flaticon-email"></i>info@divyapulses.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget wpo-contact-widget">
                                    <div className="widget-title">
                                        <h3>Location</h3>
                                    </div>
                                    <div className="contact-ft">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.533941015882!2d55.6773343143331!3d25.55389698373152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMzJzE0LjAiTiA1NcKwNDAnNDYuMyJF!5e0!3m2!1sen!2sae!4v1554360278578!5m2!1sen!2sae"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Office Location"
                                    />
                                    </div>

                                </div>
                            </div>                              

                        </div>
                    </div>
                </div>
                <div className="wpo-lower-footer">
                    <div className="container">
                        <div className="row align-items-center ">
                            <div className="col-12 justify-content-center d-flex">
                                <p className="copyright">Copyright &copy; 2026
                                    <span className="copyright-icon">|</span> All Rights Reserved By Divya Industries.
                                    <span className="copyright-icon">|</span> Developed by Webmaster&nbsp;<a href="https://veravalonline.com/" target="_blank" rel="noreferrer" style={{color:'#e21d23'}}>VO</a>
                                </p>
                            </div>
                            {/* <div className="col-lg-6 col-md-12  col-12">
                                <p className="link"><Link onClick={ClickHandler} to="/blog">Term and Service</Link> <span>||</span> <a
                                    href="blog">Privacy Policy</a></p>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="ft-shape-1"><img src={FtShape1} alt="" /></div> */}
                {/* <div className="ft-shape-2"><img src={FtShape2} alt="" /></div> */}
            </footer>
        </div>
    )
}

export default Footer;







