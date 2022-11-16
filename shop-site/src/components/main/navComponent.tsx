import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/img/breadcrumb.jpg';

const NavComponent = () => {
    return (
        <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${img})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>Contact Us</h2>
                            <div className="breadcrumb__option">
                                <Link to={'#'}>Home</Link>
                                <span>Contact Us</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default NavComponent