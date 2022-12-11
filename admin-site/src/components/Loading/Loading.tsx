import React, { Fragment } from 'react';
import { Skeleton } from 'antd';
import './index.css';

const Loading = () => {
    return (
        <Fragment>
            <Skeleton paragraph={{ rows: 20 }}  active/>
        </Fragment>
    )
}

export default Loading