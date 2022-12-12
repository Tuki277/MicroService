import { Badge, Card, Col, Row, Statistic } from 'antd'
import React, { Fragment } from 'react'
import {
    LikeOutlined,
    DislikeOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const extendLink = (
    <Badge dot={true}>
        <Link to='/feedback'>More</Link>
    </Badge>
)


const Feedback = (props: any) => {
    return (
        <Fragment>
            <Card title={props.title} bordered={true} extra={extendLink}>
                <Statistic value={1128} prefix={<LikeOutlined />} />
            </Card>
        </Fragment>


    )
}

export default Feedback