import React from 'react';
import { Link } from 'react-router-dom';


// image
import Ab from '../../images/about/ab.jpg'
import Abd1 from '../../images/about/1.png'
import Abd2 from '../../images/about/4.png'
import Abd3 from '../../images/about/5.png'
import Abd4 from '../../images/about/3.png'
import sine from '../../images/about/2.png'

const about = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-12 col-12">
                        <div className="orico-about-wrap">
                            <div className="orico-about-img">
                                <div className="mask">
                                    <img src={Ab} alt="ab"/>
                                </div>
                                <div className="orico-ab-logo">
                                    <img src={Abd1} alt="abd1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-12">
                        <div className="orico-about-text-wrap">
                            <div className="orico-about-text">
                                <span>“<span>Who We Are</span>”</span>
                                <h2>Welcome to Divya Industries</h2>
                                <p>A global leader in the pulses and spice industry from the UAE. We are one of the reputed trading Company in Sharjah UAE, dealing with our customers with its dedicated and motivated management/staff team who deliver products to its customers with high quality standard of their experience.</p>
                                <p><b>Established in 2003 by Mr.Suresh Kumar Thawani & Mr. Bunty Thawani, BUNTY FOOD STUFF TR. CO. L.L.C.</b> has achieved its reputation in short span of time. This success is due to the hard work and excellent in performance and adherence to highest quality standards.</p>
                                <p>The increasing high demand of times and the populace, <b>in 2003, BUNTY FOOD STUFF TR. CO. L.L.C. was established in Sharjah. It was followed by DIVYA INDUSTRIES Grain Proccessing and Packing LLC - Umm Al Quwain in 2012</b> which geared up to increase in production capacity of per day, processing pulses using latest machinery as per today's need. Having well equipped with top notch machineries, <b>DIVYA INDUSTRIES Grain Proccessing and Packing LLC</b> has been trusted for a fast, competitive and quality production over the years.</p>
                                {/* <ul>
                                    <li><i><img src={Abd2} alt=""/></i> It has survived not only
                                        five centuries the leap into.</li>
                                    <li><i><img src={Abd3} alt=""/></i> It has survived not only
                                        five centuries the leap into.</li>
                                </ul> */}
                                <Link onClick={ClickHandler} className="theme-btn-s2" to="#">Get In Touch</Link>
                            </div>
                            <div className="ab-onion-shape"><img src={Abd4} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-shape"><img src={sine} alt=""/></div>
        </section>
    );
};

export default about;