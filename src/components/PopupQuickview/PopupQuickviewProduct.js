import React, { useState } from 'react';
import { addToCart } from "../../store/actions/action";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';


const PopupQuickviewProduct = ({ product, addToCart, handleCloseClick }) => {
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };
    
    const decrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    if (!product) return null;
    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

   
    return (
        <div id="popup-quickview">
            <div className="modal-dialog quickview-dialog">
                <div className="modal-content">
                    <button type="button" className="btn-close" onClick={handleCloseClick}><i className="ti-close"></i></button>
                    <div className="modal-body">
                        <div className="product-details">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="product-single-img">
                                        <div className="modal-product">
                                                <img src={product.proImg} alt={product.title} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="product-single-content">
                                        <h5>{product.title}</h5>
                                        {/* <h6>{product.price} USD</h6> */}
                                        <p>{product.desc}
                                        </p>
                                        <ul className="rating">
                                            <li><i className="fa fa-star" aria-hidden="true" style={{color:'#eec641'}}></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true" style={{color:'#eec641'}}></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true" style={{color:'#eec641'}}></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true" style={{color:'#eec641'}}></i></li>
                                            <li><i className="fa fa-star" aria-hidden="true" style={{color:'#eec641'}}></i></li>
                                        </ul>
                                        {/* <p>{product.description}h</p> */}
                                        {/* <div className="pro-single-btn">
                                            <div className="quantity cart-plus-minus">
                                                <input type="text" value={quantity} readOnly />
                                                <div className="dec qtybutton" onClick={decrement}>-</div>
                                                <div className="inc qtybutton" onClick={increment}>+</div>
                                            </div>
                                            <button className="theme-btn" onClick={() => addToCartProduct(product)}>Add to cart</button>
                                        </div> */}
                                        <div className="pro-single-btn">
                                            {/* <div className="quantity cart-plus-minus">
                                                <input type="text" value={quantity} readOnly />
                                                <div className="dec qtybutton" onClick={decrement}>-</div>
                                                <div className="inc qtybutton" onClick={increment}>+</div>
                                            </div> */}
                                            <Link to={'/contact'}><button className="theme-btn">Send Us An Enquiry</button></Link>
                                        </div>                                        
                                        {/* <div className="social-share">
                                            <span>Share with : </span>
                                            <ul className="socialLinks">
                                                <li><Link to='#'><i className="fa fa-facebook"></i></Link></li>
                                                <li><Link to='#'><i className="fa fa-linkedin"></i></Link></li>
                                                <li><Link to='#'><i className="fa fa-twitter"></i></Link></li>
                                                <li><Link to='#'><i className="fa fa-instagram"></i></Link></li>
                                                <li><Link to='#'><i className="fa fa-youtube-play"></i></Link></li>
                                            </ul>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { addToCart })(PopupQuickviewProduct);
