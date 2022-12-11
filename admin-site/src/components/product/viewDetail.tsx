import React, { Fragment } from 'react';
import { Col, Drawer, Row, Image, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDetail } from '../../redux/features/system';
import { RootState } from '../../redux/store';
import './index.css';

const ViewDetail = (props: any) => {

    const dispatch = useDispatch();

    const { detail } = useSelector((state: RootState) => state.system);

    const onClose = () => {
        dispatch(toggleDetail(1))
    };

    return (
        <Fragment>
            <Drawer
                title="Detail product - product 1"
                width={800}
                onClose={onClose}
                open={detail}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <Row>
                    <Col span={6}>
                        Quantity: <b>100</b>
                    </Col>
                    <Col span={6}>
                        Discount: <b>40</b>
                    </Col>
                    <Col span={6}>
                        Price: <b>103$</b>
                    </Col>
                    <Col span={6}>
                        Created: <b>20-12-2022</b>
                    </Col>
                    <Col span={24} style={{ marginTop: 10 }}>
                        Description: <b>New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart</b>
                    </Col>
                    <Col>
                        <Image
                            width={100}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <Image
                            width={100}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <Image
                            width={100}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <Image
                            width={100}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </Col>
                </Row>
            </Drawer>
        </Fragment>
    );
};

export default ViewDetail;