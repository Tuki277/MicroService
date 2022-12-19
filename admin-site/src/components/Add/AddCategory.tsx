import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Input, Row, Space, message } from 'antd';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { resetPayload, toggleAdd } from '../../redux/features/system';
import { addCategory, getAllCategory, updateCategory } from '../../redux/features/category';

const AddCategory = (props: any) => {

    const dispatch = useDispatch<AppDispatch>();

    const { add, payload } = useSelector((state: RootState) => state.system);
    const { error } = useSelector((state: RootState) => state.category);

    const [name, setName] = useState<string>("");

    const showDrawer = () => {
        dispatch(toggleAdd());
    };

    const onClose = () => {
        dispatch(getAllCategory());
        dispatch(toggleAdd());
    };

    const createCategory = () => {
        if (payload == null) {
            dispatch(addCategory({ name }));
            if (!error) {
                setName("");
                message.success("Created success");
                onClose();
            } else {
                message.error("Created fail");
            }
        } else {
            const input = {
                id: payload.payload.id,
                data: {
                    name,
                }
            }
            dispatch(updateCategory(input));
            if (!error) {
                setName("");
                message.success("Update success");
                dispatch(resetPayload());
                onClose();
            } else {
                message.error("Update fail");
            }
        }
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    useEffect(() => {
        if (payload != null) {
            setName(payload.payload.name)
        }
    }, [payload])

    return (
        <Fragment>
            <Button className='float-right mb-2' type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                { payload == null ? "New category" : "Update category" } 
            </Button>
            <Drawer
                title="Create a new category"
                width={720}
                onClose={onClose}
                open={add}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={createCategory} type="primary">
                        { payload == null ? "Create" : "Update" } 
                        </Button>
                    </Space>
                }
            >
                {/* <Form 
                    layout="vertical"
                > */}
                    <Row gutter={16}>
                        <Col span={24}>
                            {/* <Form.Item
                                name="name"
                                label="Category name"
                                rules={[{ required: true, message: 'Please enter category name' }]}
                            > */}
                                <Input value={name} name='name' placeholder="Please enter category name" onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)} />
                            {/* </Form.Item> */}
                        </Col>
                    </Row>
                {/* </Form> */}
            </Drawer>
        </Fragment>
    );
};

export default AddCategory;