import React, { Fragment, useState } from 'react'
import { Row, Col, Card } from 'antd';
import './style.css'
import ChartInOut from '../../components/Chart/ChartInOut';
import ChartSaleMonth from '../../components/Chart/ChartSaleMonth';
import ChartOrders from '../../components/Chart/ChartOrders';
import CardOptions from '../../components/Card';
import Feedback from '../../components/Card/feedback';


const Home = () => {
  return (
    <Fragment>
      <div className="site-card-wrapper">
        <Row gutter={10}>
          <Col span={5}>
            <CardOptions title='Category' amount={0} link='/category' />
          </Col>
          <Col span={5}>
            <CardOptions title='Product' amount={0} link='/product' />
          </Col>
          <Col span={5}>
            <CardOptions title='Order' amount={0} link='/order' />
          </Col>
          <Col span={5}>
            <CardOptions title='Money' amount={0} link='/statistical' />
          </Col>
          <Col span={4}>
            <Feedback title='Feedback' />
          </Col>
        </Row>
      </div>

      <div className="site-card-wrapper pt-0">
        <Row>

          <Col span={24}>
            <ChartSaleMonth />
          </Col>
        </Row>
      </div>

      <div className="site-card-wrapper pt-0">
        <Row>
          <Col span={12}>
            <ChartInOut title="In / Out" />
          </Col>
          <Col span={12}>
            <ChartInOut title="Orders process" />
          </Col>
        </Row>
      </div>


    </Fragment>
  );
}

export default Home