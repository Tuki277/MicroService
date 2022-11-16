import React from 'react'
import { Link } from 'react-router-dom';
import img from '../../assets/img/featured/feature-1.jpg';

const ItemComponent = () => {
    return (
        <div className="featured__item">
            <div className="featured__item__pic set-bg" style={{ backgroundImage: `url(${img})`}}>
                <ul className="featured__item__pic__hover">
                    <li><Link to={'#'}><i className="fa fa-heart" /></Link></li>
                    <li><Link to={'#'}><i className="fa fa-shopping-cart" /></Link></li>
                </ul>
            </div>
            <div className="featured__item__text">
                <h6><Link to={'/product/detail'}>Crab Pool Security</Link></h6>
                <h5>$30.00</h5>
            </div>
        </div>
    )
}

export default ItemComponent