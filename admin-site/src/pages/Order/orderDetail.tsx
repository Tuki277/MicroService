import { Badge, Button, Col, Descriptions, PageHeader, Row, Steps } from 'antd'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleDetail } from '../../redux/features/system'
import ProductDetail from '../Product/ProductDetail'
import "./index.css"

const OrderDetail = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onBack = () => {
        navigate("/order")
    }

    const showDetailProduct = () => {
        dispatch(toggleDetail(1));
    }

    return (
        <Fragment>
            <PageHeader
                className="site-page-header"
                onBack={() => onBack()}
                title="Detail"
                subTitle="order 1"
            />

            <Row>
                <Col span={20}>
                    <Descriptions bordered>
                        <Descriptions.Item label="Name">Alex</Descriptions.Item>
                        <Descriptions.Item label="Address" span={2}>Canada</Descriptions.Item>
                        <Descriptions.Item label="Product">
                            <Button type='text' style={{ padding: 0 }} onClick={() => showDetailProduct()}>
                                Cloud Database
                            </Button>
                        </Descriptions.Item>
                        <Descriptions.Item label="Order note">Prepaid</Descriptions.Item>
                        <Descriptions.Item label="Status">
                            <Badge status="processing" text="Running" />
                        </Descriptions.Item>
                        <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                        <Descriptions.Item label="Usage Time" span={2}>
                            2019-04-24 18:00:00
                        </Descriptions.Item>
                        <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                        <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                        <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                        <Descriptions.Item label="Total money" span={3}>
                            180$
                        </Descriptions.Item>
                    </Descriptions>
                </Col>
                <Col span={4}>
                    <Steps
                        direction="vertical"
                        current={1}
                        style={{ marginLeft: 20 }}
                        items={[
                            {
                                title: 'Finished',
                                description: 'This is a description.',
                            },
                            {
                                title: 'In Progress',
                                description: 'This is a description.',
                            },
                            {
                                title: 'Waiting',
                                description: 'This is a description.',
                            },
                        ]}
                    />
                </Col>
            </Row>

            <ProductDetail />

        </Fragment>
    )
}

export default OrderDetail