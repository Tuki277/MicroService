import React, { Fragment, useState } from 'react';
import { Drawer } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleDetail } from '../../redux/features/system';

const ProductDetail = (props: any) => {

    const dispatch = useDispatch();

    const { detail, payload } = useSelector((state: RootState) => state.system);

    const onClose = () => {
        dispatch(toggleDetail({}));
    }

    console.log(payload);

    return (
        <Fragment>
            <Drawer
                title="Detail product"
                width={1000}
                onClose={onClose}
                open={detail}
                bodyStyle={{ paddingBottom: 80 }}
            >
                
            </Drawer>
        </Fragment>
    );
};

export default ProductDetail;