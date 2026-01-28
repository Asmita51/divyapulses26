import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import api from "../../api/productlist";
import { addToCart } from "../../store/actions/action";
import PopupQuickviewProduct from '../PopupQuickview/PopupQuickviewProduct';
const ProductCategory = ({ addToCart ,category}) => {
    const [shopeTab, setShopeTab] = useState(0);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseClick = () => {
        setSelectedProduct(null);
    };


    useEffect(() => {
        const fetchProducts = async () => {
            const productsArray = await api();
            setProducts(productsArray);
        };
        fetchProducts();
    }, []);

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };
    return (
        <div className="shop-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className="tab-content">
                            {shopeTab === 0 &&
                                <div className="row">
                                    {products.filter(product => product.category === category)?.length > 0 ?
                                        (products
                                            .filter(product => product.category === category)
                                            .map((product, pitem) => (
                                            <div className="col-lg-3 col-md-6 col-12" key={pitem}>
                                                <div className="orico-product-single" style={{paddingLeft:'0px', paddingRight:'0px'}}>
                                                    {/* <div className="orico-product-item"> */}
                                                    <div >
                                                        <div className="orico-product-img">
                                                            <img src={product.proImg} alt="" style={{width:"100%"}} />
                                                        </div>
                                                    </div>
                                                    <div className="orico-product-text">
                                                        {/* <h2><Link onClick={ClickHandler} to={`/shop-single/${product.slug}`}>{product.title}</Link></h2> */}
                                                        <h2>{product.title}</h2>
                                                        {/* <div className="product-price">
                                                            <ul>
                                                                <li>${product.delPrice}</li>
                                                                <li>${product.price}</li>
                                                            </ul>
                                                        </div> */}
                                                    </div>
                                                    <div className="orico-product-text-hide">
                                                        <h2 className='text-white'>{product.title}</h2>                                                        

                                                        <ul className="orico-product-link">
                                                            {/* <li><a href="#"><i className="fi ti-heart"></i></a></li>
                                                            <li><button onClick={() => addToCartProduct(product)}>
                                                                <i className="fi flaticon-shopping-cart"
                                                                    aria-hidden="true"></i></button>
                                                            </li> */}
                                                            <li>
                                                                <button onClick={() => handleProductClick(product)}><i className="fi ti-eye"></i></button>
                                                            </li>
                                                        </ul>
                                                        {/* <h2><Link onClick={ClickHandler} to={`/shop-single/${product.slug}`}>{product.title}</Link></h2>
                                                        <div className="product-price">
                                                            <ul>
                                                                <li>${product.delPrice}</li>
                                                                <li>${product.price}</li>
                                                            </ul>
                                                        </div>
                                                        <a data-bs-toggle="tooltip"
                                                            data-bs-html="true"
                                                            title="Add to Cart"
                                                            onClick={() => addToCartProduct(product)} className="cart-btn">Add to Cart</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        ))): (
                                            <p style={{textAlign:'center'}}>No Data Available</p>
                                        )
                                    }
                                    
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
            <PopupQuickviewProduct product={selectedProduct} handleCloseClick={handleCloseClick} />
        </div>

    );
};

export default connect(null, { addToCart })(ProductCategory);