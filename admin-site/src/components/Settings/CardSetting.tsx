import { Slider } from 'antd'
import React, { Fragment } from 'react'

const CardSetting = () => {

    const onchange = (value: number) => {

        console.log(value)
    }

    return (
        <Fragment>
            <h3>Khoảng giảm giá</h3>
            <Slider defaultValue={30} onChange={value => onchange(value)} />
        </Fragment>
    )
}

export default CardSetting;