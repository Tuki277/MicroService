import React, { Fragment, useState } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Button, Drawer, Select } from 'antd';
import CardNoti from './cardNoti';

const Noti = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Button type='text' size='large' onClick={showDrawer} icon={<BellOutlined />}>
            </Button>
            <Drawer
                title="Notification"
                width={450}
                onClose={onClose}
                open={open}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <CardNoti />
                <CardNoti />
                <CardNoti />
                <CardNoti />
                <CardNoti />
                <CardNoti />
            </Drawer>
        </Fragment>
    );
};

export default Noti;