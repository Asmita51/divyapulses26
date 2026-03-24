import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar'
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import OricoFeatures from '../../components/OricoFeatures/OricoFeatures';
import About from '../../components/about/about';
import FunFact from '../../components/FunFact/FunFact';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import OfferSection from '../../components/OfferSection/OfferSection';
import ProductSection from '../../components/ProductSection/ProductSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logoDivya.png'
import Choose from '../../components/ServiceSection/Choose';
import Whatwedo from '../../components/BlogSection/Whatwedo';
import PackagingGallery from '../../components/packaging/PackagingGallery ';
import PackagingGallery1 from '../../components/packaging/PackagingGallery1';
const HomePage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <div className="orico-hero-wrap">
                <HeroSlider />
                {/* <OricoFeatures /> */}
            </div>
            <About hclass={'orico-about-section section-padding'} />
            <FunFact hclass={'orico-fun-fact-section'} />
            {/* <ServiceSection hclass={"service_section section-padding"} /> */}
            <Choose hclass={"service_section section-padding"} />

            {/* <ProductSection /> */}
            <PartnersSection />
            <Whatwedo />
            {/* <PackagingGallery /> */}
            <PackagingGallery1 />

            <OfferSection />
            {/* <TeamSection /> */}
            {/* <Testimonial /> */}
            {/* <BlogSection /> */}
            <Footer hclass={'footer-section'} />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;