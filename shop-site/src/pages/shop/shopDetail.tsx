import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import img from '../../assets/img/product/details/product-details-1.jpg';
import NavComponent from '../../components/main/navComponent';
import FeatureComponent from '../../components/shop/featureComponent';
import thumb from '../../assets/img/product/details/thumb-3.jpg';

const ShopDetail = () => {
  return (
    <Fragment>

      <NavComponent />

      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img className="product__details__pic__item--large" src={ img } alt="" />
                </div>
                <div className="product__details__pic__slider">
                  <div className='thumb__picture'>
                    <img src={ thumb } alt="" />
                    <img src={ thumb } alt="" />
                    <img src={ thumb } alt="" />
                    <img src={ thumb } alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>Vetgetable’s Package</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                  <span>(18 reviews)</span>
                </div>
                <div className="product__details__price">$50.00</div>
                <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                  vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                  quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <input type="text" defaultValue={1} />
                    </div>
                  </div>
                </div>
                <Link to={'#'} className="primary-btn">ADD TO CARD</Link>
                <Link to={'#'} className="heart-icon"><i className="fa-regular fa-heart"></i></Link>
                <ul>
                  <li><b>Availability</b> <span>In Stock</span></li>
                  <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                  <li><b>Weight</b> <span>0.5 kg</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Description</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                        suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                        accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                        pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                        elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                        vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                      <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                        porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                        sed sit amet dui. Proin eget tortor risus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details Section End */}
      {/* Related Product Section Begin */}
      <FeatureComponent />
    </Fragment>

  )
}

export default ShopDetail