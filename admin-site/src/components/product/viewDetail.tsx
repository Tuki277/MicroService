import React, { Fragment, useState } from 'react';
import { Button, Drawer } from 'antd';

const ViewDetail = (props: any) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Button className='float-right mb-2' type="primary" onClick={showDrawer} >
                View Image
            </Button>
            <Drawer
                title="Detail product"
                width={1000}
                onClose={onClose}
                open={open}
                bodyStyle={{ paddingBottom: 80 }}
            >
                
            </Drawer>
        </Fragment>
    );
};

export default ViewDetail;