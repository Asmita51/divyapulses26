import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";

import Item1 from '../../images/partner/1.png'
import Item2 from '../../images/partner/2.png'
import Item3 from '../../images/partner/3.png'
import Item4 from '../../images/partner/4.png'

const brands = [
    {
        title: '88',
        icon: Item1,
    },
    {
        title: 'KERALA BRAND',
        icon: Item2,        
    },
    {
        title: 'BLUE BIRD',
        icon: Item4,
    },    
    {
        title: 'GOLDEN CAMEL',
        icon: Item3,

    },

];  
const BrandsPage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { SectionTitleShow=true } = props

    return (
        <div className="orico-service-section section-padding">
            <div className="container">
                {SectionTitleShow &&  (
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle title={'BRANDS'} />
                    </div>
                </div>
                )}
                <div className="row">

                    {brands.map((service, item) => (
                        <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={item}>
                            <div className="service-item" style={{borderRadius:'0px'}}>
                                <div className="service-item-img" style={{borderRadius:'0px'}}>
                                    <img src={service.icon} alt="A" style={{transform: 'scale(1)',borderRadius:'0px'}}/>
                                </div>
                                <div className="orico-service-text">
                                    {/* <div className="icon">
                                        <img src={service.icon} alt="" />
                                    </div> */}
                                    <h4 className="mb-0">{service.title}</h4>
                                    {/* <Link to={`/service-single/${service.slug}`} onClick={ClickHandler}><i className="ti-arrow-right"></i></Link> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BrandsPage;




