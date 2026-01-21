import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import blogs from '../../api/blogs'
import whatwedo from "../../api/whatwedo";
const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Whatwedo = (props) => {

    return (
        <section className="orico-blog-area section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <SectionTitle subtitle={'Work'} title={'What We Do'} />
                    </div>
                </div>
                <div className="orico-blog-wrap">
                    <div className="row align-items-center">
                        {whatwedo.slice(0.3).map((bloge, bkye) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" key={bkye}>
                                <div className="orico-blog-item">
                                    <div className="orico-blog-img">
                                        <img src={bloge.screens} alt="" />
                                    </div>
                                    <div className="orico-blog-content">
                                        {/* <ul>
                                            <li>{bloge.create_at}</li>
                                        </ul> */}
                                        <h3>{bloge.title}</h3>
                                        <p>{bloge.description}</p>
                                        {/* <Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`} className="theme-btn-s2">Read more</Link> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Whatwedo;




