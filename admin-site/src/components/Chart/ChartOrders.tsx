import { Card } from 'antd'
import React from 'react'
import { Pie } from '@ant-design/plots';

const ChartOrders = () => {

    const data = [
        {
            type: 'Đã xử lý',
            value: 60,
        },
        {
            type: 'Chưa xử lý',
            value: 40,
        },
    ];

    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: "",
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };

    return (
        <Card title="Orders process">
            <Pie {...config} />
        </Card>
    )
}

export default ChartOrders