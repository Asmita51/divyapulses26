import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import AboutPage from '../AboutPage/AboutPage';
import ServicePages from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TestimonialPage/TestimonialPage';
import ShopPage from '../ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft' 
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import ContactPage from '../ContactPage/ContactPage';
import LoginPage from '../LoginPage/index';
import ForgotPassword from '../ForgotPassword/index';
import Register from '../SignUpPage/index';
import ErrorPage from '../ErrorPage/ErrorPage';
import ProductPage from '../Products/ProductPage';
import CategoryProducts from '../CategoryProducts';
import BrandandpackagingPage from '../Brandandpackaging/BrandandpackagingPage';
import bg1 from '../../images/product/bg1.png';
import bg2 from '../../images/product/bg2.png';
import bg3 from '../../images/product/bg3.png';
import bg4 from '../../images/product/bg4.png';
import bg5 from '../../images/product/bg5.png';
import bg6 from '../../images/product/bg6.png';
import bg7 from '../../images/product/bg7.png';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter basename="/divyaindustries">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicePages/>} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="testimonial" element={<TeamSinglePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='shop-single/:slug' element={<ProductSinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path='blog' element={<BlogPage/>} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="forgot" element={<ForgotPassword />} />
          <Route path="register" element={<Register />} />
          <Route path='404' element={<ErrorPage />} />  


          <Route path='products' element={<ProductPage />} />  
          <Route path='pulse' element={<CategoryProducts category="pulse" title="Pulse" bg={bg1}/>} />  
          <Route path='peasandbeans' element={<CategoryProducts category="peasandbeans" title="Peas and Beans" bg={bg2}/>} />  
          <Route path='spices' element={<CategoryProducts category="spices" title="Spices" bg={bg3}/>} />  
          <Route path='rice' element={<CategoryProducts category="rice" title="Rice" bg={bg4}/>} />  
          <Route path='nuts' element={<CategoryProducts category="nuts" title="Nuts" bg={bg5}/>} />  
          <Route path='coconutpowder' element={<CategoryProducts category="coconutpowder" title="Coconut Powder" bg={bg6}/>} />  
          <Route path='otheritems' element={<CategoryProducts category="otheritems" title="Other Items" bg={bg7}/>} />  
          <Route path='brandandpackaging' element={<BrandandpackagingPage />} />  

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
