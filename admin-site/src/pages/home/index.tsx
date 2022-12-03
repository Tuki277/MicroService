import React, { Fragment } from 'react'
import { Row, Col, Card } from 'antd';
import './style.css'
import ChartInOut from '../../components/Chart/ChartInOut';
import ChartSaleMonth from '../../components/Chart/ChartSaleMonth';
import ChartOrders from '../../components/Chart/ChartOrders';


const Home = () => {
  return (
    <Fragment>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={6}>
            <Card title="Category" bordered={true} extra={<a href="#">More</a>}>
            <span className='float-right'>Category</span> 
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Product" bordered={true} extra={<a href="#">More</a>}>
              <span className='float-right'>Product</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Orders" bordered={true} extra={<a href="#">More</a>}>
            <span className='float-right'>Order</span> 
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Money" bordered={true} extra={<a href="#">More</a>}>
            <span className='float-right'>Money</span>
            </Card>
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