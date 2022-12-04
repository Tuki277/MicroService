import { Card } from 'antd'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Test = (props: any) => {
  return (
    <Fragment>
        <Card title={ props.title } bordered={true} extra={<Link to={ props.link }>More</Link>}>
            <span className='float-right'>{ props.amount }</span>
        </Card>
    </Fragment>
  )
}

export default Test