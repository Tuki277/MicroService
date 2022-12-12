import React, { Fragment } from 'react'
import { Card, Statistic } from 'antd';
import { IPropCard } from '../../common/interface';
import { Link } from 'react-router-dom';
import {
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';

const CardOptions = (props: IPropCard) => {
  return (
    <Fragment>
        {/* <Card title={ props.title } bordered={true} extra={<Link to={ props.link }>More</Link>}>
            <span className='float-right'>{ props.amount }</span>
        </Card> */}
        <Card title={ props.title } bordered={true} extra={<Link to={ props.link }>More</Link>}>
          {/* <Statistic
            value={props.amount}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          /> */}
          <Statistic
            value={props.amount}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
    </Fragment>
  )
}

export default CardOptions;