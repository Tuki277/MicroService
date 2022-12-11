import React, { Fragment } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import { Button, Drawer, Select } from 'antd';
import CardSetting from './CardSetting';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleSetting } from '../../redux/features/system';

const Settings = () => {

    const dispatch = useDispatch();

    const { setting } = useSelector((state: RootState) => state.system);

    const actionToggleSetting = () => {
        dispatch(toggleSetting());
    };

    return (
        <Fragment>
            <Button type='text' size='large' onClick={actionToggleSetting} icon={<SettingOutlined />}>
            </Button>
            <Drawer
                title="Notification"
                width={700}
                onClose={actionToggleSetting}
                open={setting}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <CardSetting />
            </Drawer>
        </Fragment>
    );
};

export default Settings;