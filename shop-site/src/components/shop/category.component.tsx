import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/img/hero/banner.jpg';
import SearchComponent from './searchComponent';

const CategoryComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li><Link to={'#'}>Fresh Meat</Link></li>
                            <li><Link to={'#'}>Vegetables</Link></li>
                            <li><Link to={'#'}>Fruit &amp; Nut Gifts</Link></li>
                            <li><Link to={'#'}>Fresh Berries</Link></li>
                            <li><Link to={'#'}>Ocean Foods</Link></li>
                            <li><Link to={'#'}>Butter &amp; Eggs</Link></li>
                            <li><Link to={'#'}>Fastfood</Link></li>
                            <li><Link to={'#'}>Fresh Onion</Link></li>
                            <li><Link to={'#'}>Papayaya &amp; Crisps</Link></li>
                            <li><Link to={'#'}>Oatmeal</Link></li>
                            <li><Link to={'#'}>Fresh Bananas</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <SearchComponent />
                    <div className="hero__item set-bg" style={{ backgroundImage: `url(${img})` }}>
                        <div className="hero__text">
                            <span>FRUIT FRESH</span>
                            <h2>Vegetable <br />100% Organic</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <Link to={'/shop'} className="primary-btn">SHOP NOW</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CategoryComponent