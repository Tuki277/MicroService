import React, { Fragment, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
import './style.css';

const { Option } = Select;

const AddCategory = (props: any) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        console.log(props.data)
        if (props.data) {
            setOpen(true)
        }
    }, [props.data])
    

    return (
        <Fragment>
            <Button className='float-right mb-2' type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                New category
            </Button>
            <Drawer
                title="Create a new category"
                width={720}
                onClose={onClose}
                open={open}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="primary">
                            Create
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical">
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="name"
                                label="Category name"
                                rules={[{ required: true, message: 'Please enter category name' }]}
                            >
                                <Input placeholder="Please enter category name" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </Fragment>
    );
};

export default AddCategory;