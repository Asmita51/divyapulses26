import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../SectionTitle/SectionTitle';
import Vator from '../../images/testimonial/vector.png'
import Img1 from '../../images/testimonial/t.png'



const testimonials = [
  {
    id: '01',
    img: Img1,
    Des: "Divya Industries has been a reliable partner for us for years. Their consistency in quality, timely deliveries, and transparent communication makes them one of the most trusted pulse suppliers in the region.",
    title: 'Ahmed Al Mansoori',
    sub: 'Wholesale Food Distributor, UAE',
  },
  {
    id: '02',
    img: Img1,
    Des: "We source multiple varieties of pulses from Divya Industries. Their processing standards and packaging quality meet international requirements, which is critical for our export operations.",
    title: 'Ravi Patel',
    sub: 'Import & Export Trader, India',
  },
  {
    id: '03',
    img: Img1,
    Des: "What sets Divya Industries apart is their commitment to quality and long-term relationships. They understand bulk demand cycles and always deliver as promised.",
    title: 'Mohammed Saeed',
    sub: 'Procurement Manager, FMCG Supplier',
  },
  {
    id: '04',
    img: Img1,
    Des: "From sourcing to final delivery, Divya Industries maintains strict quality control. Their grains and pulses are consistently clean, well-processed, and market-ready.",
    title: 'Ankit Shah',
    sub: 'Food Ingredients Supplier',
  },
];





const Testimonial = (props) => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (

        <div className="orico-testimonial-area section-padding">
            <div className="t-shape"><img src={Vator} alt="" /></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <SectionTitle subtitle={'CLIENT TESTIMONIAL'} title={'happy customers'} />
                    </div>
                </div>
                <div className="orico-testimonial-wrap">
                    <div className="testimonial-slider">
                        <Slider {...settings}>
                        {testimonials.map((testimonial, item) => (
                                <div className="orico-testimonial-item" key={item}>
                                    <div className="orico-testimonial-img">
                                        <img src={testimonial.img} alt="" />
                                    </div>
                                    <div className="orico-testimonial-content">
                                        <p>{testimonial.Des}</p>
                                        <h2>{testimonial.title}</h2>
                                        <span>{testimonial.sub}</span>
                                    </div>
                                </div>
                        ))}
                        </Slider>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;







