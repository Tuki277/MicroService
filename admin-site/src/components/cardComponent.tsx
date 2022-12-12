import { Card } from 'antd'
import React from 'react'

const CardComponent = () => {
  return (
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}

export default CardComponent