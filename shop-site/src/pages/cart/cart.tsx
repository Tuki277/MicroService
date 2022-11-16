import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import ProductCart from '../../components/cart/productCart'
import NavComponent from '../../components/main/navComponent'

const Cart = () => {
  return (
    <Fragment>

      <NavComponent />

      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <ProductCart />
                    <ProductCart />
                    <ProductCart />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <Link to={'#'} className="primary-btn cart-btn">CONTINUE SHOPPING</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>Discount Codes</h5>
                  <form action="#">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">APPLY COUPON</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                  <li>Subtotal <span>$454.98</span></li>
                  <li>Total <span>$454.98</span></li>
                </ul>
                <Link to={'#'} className="primary-btn">PROCEED TO CHECKOUT</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </Fragment>


  )
}

export default Cart