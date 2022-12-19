import React, { Fragment } from 'react';
import { BellOutlined, NotificationOutlined } from '@ant-design/icons';
import { Button, Drawer, Badge } from 'antd';
import CardNoti from './CardNoti';
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
            <Badge count={1}>
                {/* <Button type='text' size='large' onClick={actionToggleNoti} icon={<BellOutlined />}>
                </Button> */}
                <BellOutlined style={{ fontSize: 20 }} onClick={actionToggleNoti} />
            </Badge>
            <Drawer
                title="Thông báo"
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