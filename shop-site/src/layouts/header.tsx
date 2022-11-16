import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <Link to={'/'}><img src={ logo } alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/shop'}>Shop</Link></li>
                                <li><Link to={'/blog'}>Blog</Link></li>
                                <li><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart">
                            <ul>
                                <li><Link to={'/cart'}><i className="fa-solid fa-heart"></i><span>1</span></Link></li>
                                <li><Link to={'/cart'}><i className="fa-solid fa-cart-shopping"></i><span>3</span></Link></li>
                                <li><Link to={'/login'}><i className="fa-solid fa-user"></i></Link></li>
                            </ul>
                            <div className="header__cart__price">item: <span>$150.00</span></div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars" />
                </div>
            </div>
        </header>

    )
}

export default Header