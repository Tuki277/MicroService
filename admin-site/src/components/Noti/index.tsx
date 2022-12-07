import React, { Fragment } from 'react';
import { BellOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import CardNoti from './cardNoti';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleNoti } from '../../redux/features/system';

const Noti = () => {

    const dispatch = useDispatch();

    const { noti } = useSelector((state: RootState) => state.system);

    const actionToggleNoti = () => {
        dispatch(toggleNoti());
    }

    return (
        <Fragment>
            <Button type='text' size='large' onClick={actionToggleNoti} icon={<BellOutlined />}>
            </Button>
            <Drawer
                title="Notification"
                width={450}
                onClose={actionToggleNoti}
                open={noti}
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