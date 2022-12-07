import React, { Fragment, useState } from 'react'
import { Row, Col, Card } from 'antd';
import './style.css'
import ChartInOut from '../../components/Chart/ChartInOut';
import ChartSaleMonth from '../../components/Chart/ChartSaleMonth';
import ChartOrders from '../../components/Chart/ChartOrders';
import CardOptions from '../../components/Card';


const Home = () => {
  return (
    <Fragment>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={6}>
            <CardOptions title='Category' amount={0} link='/category' />
          </Col>
          <Col span={6}>
            <CardOptions title='Product' amount={0} link='/product' />
          </Col>
          <Col span={6}>
            <CardOptions title='Order' amount={0} link='/order' />
          </Col>
          <Col span={6}>
            <CardOptions title='Money' amount={0} link='/statistical' />
          </Col>
        </Row>
      </div>

      <div className="site-card-wrapper pt-0">
        <Row>

          <Col span={24}>
            <ChartSaleMonth />
          </Col>s
        </Row>
      </div>

      <div className="site-card-wrapper pt-0">
        <Row>
          <Col span={12}>
            <ChartInOut />
          </Col>
          <Col span={12}>
            <ChartOrders />
          </Col>
        </Row>
      </div>


    </Fragment>
  );
}

export default Home