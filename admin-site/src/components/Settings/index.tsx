import React, { Fragment, useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Button, Drawer, Select } from 'antd';
import CardSetting from './cardSetting';

const Settings = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Button type='text' size='large' onClick={showDrawer} icon={<SettingOutlined />}>
            </Button>
            <Drawer
                title="Notification"
                width={500}
                onClose={onClose}
                open={open}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <CardSetting />
                <CardSetting />
            </Drawer>
        </Fragment>
    );
};

export default Settings;