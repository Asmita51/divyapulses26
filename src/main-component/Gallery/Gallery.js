import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logoDivya.png'
import bg from '../../images/gallery/bg.png'
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import PackagingGallery3 from '../../components/packaging/PackagingGallery3';
import BrandsPage from '../../components/ServiceSection/BrandsPage';
const Gallery = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Our Gallery'} pagesub={'Gallery'} bgImg={bg}/>
            <PackagingGallery3 />
            <Footer  />
            <Scrollbar />
        </Fragment>
    )
};
export default Gallery;
