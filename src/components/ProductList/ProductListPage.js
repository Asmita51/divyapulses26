import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";

import p1 from "../../images/category/1p.jpg";
import p2 from "../../images/category/2p.jpg";
import p3 from "../../images/category/3p.jpg";
import p4 from "../../images/category/4p.jpg";
import p5 from "../../images/category/5p.jpg";
import p6 from "../../images/category/6p.jpg";
import p7 from "../../images/category/7p.jpg";

const productlistData = [
    {
        id: '1',
        title: 'Pulses',
        slug: 'pulse',
        screens: p1,
    },
    {
        id: '2',
        title: 'Peas and Beans',
        slug: 'peasandbeans',
        screens: p2,
    },

    {
        id: '3',
        title: 'Spices',
        slug: 'spices',
        screens: p3,
    },

    {
        id: '4',
        title: 'Rice',
        slug: 'rice',
        screens: p4,
    },

    {
        id: '5',
        title: 'Nuts',
        slug: 'nuts',
        screens: p5,
    },

    {
        id: '6',
        title: 'Coconut Powder',
        slug: 'coconutpowder',
        screens: p6,
    },
    {
        id: '7',
        title: 'Other Items',
        slug: 'otheritems',
        screens: p7,
    },



];
const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProductListPage = (props) => {

    return (
        <section className="orico-blog-area section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <SectionTitle subtitle={'What We Offer'} title={'Complete Product Range'} />
                    </div>
                </div>
                <div className="orico-blog-wrap">
                    <div className="row align-items-center">
                        {productlistData.slice(0.3).map((bloge, bkye) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-4" key={bkye}>
                                <div className="orico-blog-item">
                                    <div className="orico-blog-img orico-blog-imgProduct">
                                        <img src={bloge.screens} alt="" />
                                    </div>
                                    <div className="orico-blog-content" style={{textAlign:'center'}}>
                                        {/* <ul>
                                            <li>{bloge.create_at}</li>
                                        </ul> */}
                                        {/* <h3><Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>{bloge.title}</Link></h3> */}
                                        <Link onClick={ClickHandler} to={`/${bloge.slug}`} className="theme-btn-s2">{bloge.title}</Link>
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


export default ProductListPage;




