import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Input, Row, Space, message } from 'antd';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { resetPayload, toggleAdd } from '../../redux/features/system';
import { addCode, getAllCode, updateCode } from '../../redux/features/code';

const AddCode = (props: any) => {

    const dispatch = useDispatch<AppDispatch>();

    const { add, payload } = useSelector((state: RootState) => state.system);
    const { error } = useSelector((state: RootState) => state.category);

    const [state, setState] = useState({
        code: "",
        discount: "",
    });

    const showDrawer = () => {
        dispatch(toggleAdd());
    };

    const onClose = () => {
        dispatch(getAllCode());
        setState({
            code: "",
            discount: ""
        });
        dispatch(toggleAdd());
    };

    const createCategory = () => {
        if (payload == null) {
            dispatch(addCode({
                code: state.code,
                discount: state.discount,
            }));
            if (!error) {
                setState({
                    code: "",
                    discount: ""
                });
                message.success("Created success");
                onClose();
            } else {
                message.error("Created fail");
            }
        } else {
            const input = {
                id: payload.payload.id,
                data: {
                    code: state.code,
                    discount: state.discount
                }
            }
            dispatch(updateCode(input));
            if (!error) {
                setState({
                    code: "",
                    discount: ""
                });
                message.success("Update success");
                dispatch(resetPayload());
                onClose();
            } else {
                message.error("Update fail");
            }
        }
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        if (payload != null) {
            setState({
                code: payload.payload.code,
                discount: payload.payload.discount
            })
        }
    }, [payload])

    return (
        <Fragment>
            <Button className='float-right mb-2' type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                {payload == null ? "New code" : "Update code"}
            </Button>
            <Drawer
                title="Create a new code"
                width={720}
                onClose={onClose}
                open={add}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={createCategory} type="primary">
                            {payload == null ? "Create" : "Update"}
                        </Button>
                    </Space>
                }
            >
                <Row gutter={16}>
                    <Col span={24}>
                        <Input value={state.code} name='code' placeholder="Please enter code name" onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)} />
                        <Input style={{  marginTop: 15 }} value={state.discount} name='discount' placeholder="Please enter discount" onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)} />
                    </Col>
                </Row>
            </Drawer>
        </Fragment>
    );
};

export default AddCode;