import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logoDivya.png'
import bg from '../../images/about/bg.png'
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import PackagingGallery from '../../components/packaging/PackagingGallery ';
const BrandandpackagingPage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Brand & Packaging'} pagesub={'Brand & Packaging'} bgImg={bg}/>
            <PartnersSection />
            <PackagingGallery />
            <Footer  />
            <Scrollbar />
        </Fragment>
    )
};
export default BrandandpackagingPage;
