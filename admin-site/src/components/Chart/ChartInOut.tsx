import { Card } from 'antd'
import React from 'react'
import { Pie } from '@ant-design/plots';

const ChartInOut = (props: any) => {

    const data = [
        {
            type: 'Product in',
            value: 60,
        },
        {
            type: 'Product out',
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
        <Card title={props.title}>
            <Pie {...config} />
        </Card>
    )
}

export default ChartInOut