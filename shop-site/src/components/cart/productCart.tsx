import React, { Fragment } from 'react'
import img from '../../assets/img/cart/cart-1.jpg';

const ProductCart = () => {
    return (
        <Fragment>
            <tr>
                <td className="shoping__cart__item">
                    <img src={ img } alt="" />
                    <h5>Vegetable’s Package</h5>
                </td>
                <td className="shoping__cart__price">
                    $55.00
                </td>
                <td className="shoping__cart__quantity">
                    <div className="quantity">
                        <div className="pro-qty">
                            <input type="text" defaultValue={1} />
                        </div>
                    </div>
                </td>
                <td className="shoping__cart__total">
                    $110.00
                </td>
                <td className="shoping__cart__item__close">
                    <span className="icon_close" />
                </td>
            </tr>
        </Fragment>
    )
}

export default ProductCart