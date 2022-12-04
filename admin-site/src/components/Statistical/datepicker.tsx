import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import moment from 'moment';
import React, { Fragment } from 'react';

const { RangePicker } = DatePicker;

const Datepicker = () => {

    const onChange: RangePickerProps['onChange'] = (dates, dateStrings) => {
        if (dates) {
            console.log('From: ', dates[0], ', to: ', dates[1]);
            console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
        } else {
            console.log('Clear');
        }
    };

    return (
        <Fragment>
            <Space direction="vertical" style={{ width: '100%' }}>
                <RangePicker
                    onChange={onChange}
                    style={{ width: '100%' }}
                />
            </Space>
        </Fragment>
    )
}

export default Datepicker