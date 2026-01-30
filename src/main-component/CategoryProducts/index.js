import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ShopPageSection from '../../components/ShopPageSection/ShopPageSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logoDivya.png'
import ProductCategory from '../../components/ProductCategory/ProductCategory';

const CategoryProducts = (props) => {



    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={props.title} pagesub={props.title} bgImg={props.bg}/>
            <ProductCategory category={props.category}/>
            <Footer FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};

export default CategoryProducts;