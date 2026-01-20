import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-4.jpg'
import Shape from '../../images/slider/shape-1.png'
import Shape2 from '../../images/slider/shape-2.png'
import Shape3 from '../../images/slider/shape-3.png'
import Shape4 from '../../images/slider/shape-4.png'
import Shape5 from '../../images/slider/shape-5.png'
import b1 from '../../images/slider/b1.png'
import b2 from '../../images/slider/b2.png'
import b3 from '../../images/slider/b3.png'
import b4 from '../../images/slider/b4.png'
import b5 from '../../images/slider/b5.png'

const HeroSlider = () => {
    return (
        <section className="wpo-hero-slider " >
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${b1})` }}>
                    <div className="container-fluid">
                    <div className="slide-content p-0">
                        <div className="slide-sub-title">
                        <p>“<span>GLOBAL LEADER</span>”</p>
                        </div>
                        <div className="slide-title">
                        <h2>Welcome To <span>Divya Industries</span></h2>
                        </div>
                        <div className="slide-text">
                        <p>Delivering premium-quality products with a commitment to purity, freshness, and trust.</p>
                        </div>
                        <div className="slide-btns">
                        <Link to="#" className="theme-btn">Explore more</Link>
                        </div>
                    </div>
                    </div>
                    <div className="shape s1"><img src={Shape} alt="" /></div>
                    <div className="shape s2"><img src={Shape2} alt="" /></div>
                    <div className="shape s3"><img src={Shape3} alt="" /></div>
                    <div className="shape s4"><img src={Shape4} alt="" /></div>
                    <div className="shape s5"><img src={Shape5} alt="" /></div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${b2})` }}>
                    <div className="container-fluid">
                    <div className="slide-content p-0">
                        <div className="slide-sub-title">
                        <p>“<span>QUALITY YOU CAN TRUST</span>”</p>
                        </div>
                        <div className="slide-title">
                        <h2>We are <span>Certified Dealers</span></h2>
                        </div>
                        <div className="slide-text">
                        <p>Certified sourcing and strict quality standards ensure reliable products for domestic and global markets.</p>
                        </div>
                        <div className="slide-btns">
                        <Link to="#" className="theme-btn">Explore more</Link>
                        </div>
                    </div>
                    </div>
                    <div className="shape s1"><img src={Shape} alt="" /></div>
                    <div className="shape s2"><img src={Shape2} alt="" /></div>
                    <div className="shape s3"><img src={Shape3} alt="" /></div>
                    <div className="shape s4"><img src={Shape4} alt="" /></div>
                    <div className="shape s5"><img src={Shape5} alt="" /></div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${b3})` }}>
                    <div className="container-fluid">
                    <div className="slide-content p-0">
                        <div className="slide-sub-title">
                        <p>“<span>NATURALLY SOURCED</span>”</p>
                        </div>
                        <div className="slide-title">
                        <h2>Authentic Organic <span>Spices</span></h2>
                        </div>
                        <div className="slide-text">
                        <p>Pure, aromatic spices carefully processed to preserve natural flavor, color, and freshness.</p>
                        </div>
                        <div className="slide-btns">
                        <Link to="#" className="theme-btn">Explore more</Link>
                        </div>
                    </div>
                    </div>
                    <div className="shape s1"><img src={Shape} alt="" /></div>
                    <div className="shape s2"><img src={Shape2} alt="" /></div>
                    <div className="shape s3"><img src={Shape3} alt="" /></div>
                    <div className="shape s4"><img src={Shape4} alt="" /></div>
                    <div className="shape s5"><img src={Shape5} alt="" /></div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${b4})` }}>
                    <div className="container-fluid">
                    <div className="slide-content p-0">
                        <div className="slide-sub-title">
                        <p>“<span>PREMIUM GRAIN SELECTION</span>”</p>
                        </div>
                        <div className="slide-title">
                        <h2>Best Quality <span>Basmati Rice</span></h2>
                        </div>
                        <div className="slide-text">
                        <p>Long-grain basmati rice known for its rich aroma, superior taste, and consistent quality.</p>
                        </div>
                        <div className="slide-btns">
                        <Link to="#" className="theme-btn">Explore more</Link>
                        </div>
                    </div>
                    </div>
                    <div className="shape s1"><img src={Shape} alt="" /></div>
                    <div className="shape s2"><img src={Shape2} alt="" /></div>
                    <div className="shape s3"><img src={Shape3} alt="" /></div>
                    <div className="shape s4"><img src={Shape4} alt="" /></div>
                    <div className="shape s5"><img src={Shape5} alt="" /></div>
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${b5})` }}>
                    <div className="container-fluid">
                    <div className="slide-content p-0">
                        <div className="slide-sub-title">
                        <p>“<span>PURE & HYGIENIC</span>”</p>
                        </div>
                        <div className="slide-title">
                        <h2>Premium Selected <span>Nuts</span></h2>
                        </div>
                        <div className="slide-text">
                        <p>Carefully selected and hygienically processed nuts to ensure superior taste and nutrition.</p>
                        </div>
                        <div className="slide-btns">
                        <Link to="#" className="theme-btn">Explore more</Link>
                        </div>
                    </div>
                    </div>
                    <div className="shape s1"><img src={Shape} alt="" /></div>
                    <div className="shape s2"><img src={Shape2} alt="" /></div>
                    <div className="shape s3"><img src={Shape3} alt="" /></div>
                    <div className="shape s4"><img src={Shape4} alt="" /></div>
                    <div className="shape s5"><img src={Shape5} alt="" /></div>
                </div>
                </SwiperSlide>

                ...
            </Swiper>
        </section>
    );
};

export default HeroSlider;