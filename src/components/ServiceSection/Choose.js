import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
// import Services from "../../api/Services";
import ChooseData from "../../api/ChooseData";


const Choose = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { SectionTitleShow=true } = props

    return (
        <div className="orico-service-section section-padding">
            <div className="container">
                {SectionTitleShow &&  (
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <SectionTitle subtitle={'Best Features'} title={'WHY CHOOSE US?'} desc={'At Divya Industries, Social Responsibility and Sustainability are key components of our culture. We believe that balancing social, economic and environmental objectives that are beneficial to our customers, employees, suppliers and communities are critical to our success. Our executive management team is committed to ensuring that these values are shared with and embraced by the entire organization.'}/>
                    </div>
                </div>
                )}
                <div className="row justify-content-center">

                    {ChooseData.map((service, item) => (
                        <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={item}>
                            <div className="service-item">
                                <div className="service-item-img">
                                    <img src={service.simage} alt="" />
                                </div>
                                <div className="orico-service-text">
                                    <div className="icon">
                                        <img src={service.icon} alt="" />
                                    </div>
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
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

export default Choose;




