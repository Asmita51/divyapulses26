import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logoDivya.png'
import Whatwedo from '../../components/BlogSection/Whatwedo';
import bg from '../../images/product/bg.png';
import ProductListPage from '../../components/ProductList/ProductListPage';
const ProductPage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Our Products'} pagesub={'Our Products'} bgImg={bg}/>
            <ProductListPage />
            <Footer  />
            <Scrollbar />
        </Fragment>
    )
};
export default ProductPage;
