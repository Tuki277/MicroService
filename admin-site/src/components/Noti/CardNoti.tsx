import { Card } from 'antd'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleNoti } from '../../redux/features/system';

const CardNoti = () => {

    const dispatch = useDispatch();

    const closeNoti = () => {
        dispatch(toggleNoti());
    }

    return (
        <Fragment>
            <Link to={'/order/detail/1'} onClick={() => closeNoti()}>
                <Card style={{ width: 400, marginBottom: 30 }} title="Don dat hang moi" >
                    <p>Tên hàng: <b>Sản phẩm 1</b></p>
                    <p>Khách hàng: <b>Trần Văn A</b></p>
                    <p>10-12-2022 14:40SA</p>
                </Card>
            </Link>
        </Fragment>
    )
}

export default CardNoti;