import React from 'react'
import img from '../../assets/img/banner/banner-1.jpg';

const BannerComponent = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src={ img } alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="banner__pic">
                            <img src={ img } alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BannerComponent