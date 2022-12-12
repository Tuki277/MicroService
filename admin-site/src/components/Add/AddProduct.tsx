import React, { Fragment } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from 'antd';
import './style.css';
import UploadFileImage from '../UploadFile/UploadFile';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleAdd } from '../../redux/features/system';

const { Option } = Select;

const AddProduct = () => {
  const dispatch = useDispatch();

  const { add } = useSelector((state: RootState) => state.system);

  const showDrawer = () => {
    dispatch(toggleAdd());
  };

  const onClose = () => {
    dispatch(toggleAdd());
  };

  return (
    <Fragment>
      <Button className='float-right' type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New product
      </Button>
      <Drawer
        title="Create a new product"
        width={720}
        onClose={onClose}
        open={add}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: 'Please enter title' }]}
              >
                <Input placeholder="Please enter title" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: 'Please enter price' }]}
              >
                <Input placeholder="Please enter price" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="discount"
                label="Discount"
              >
                <Input placeholder="Enter discount" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                  <Select
                      placeholder="Select a option and change input text above"
                      allowClear
                  >
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                  </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="quantity"
                label="Quantity"
              >
                <Input placeholder="Enter quantity" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'please enter url description',
                  },
                ]}
              >
                <Input.TextArea rows={4} placeholder="please enter url description" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <UploadFileImage />
            </Col>
          </Row>
        </Form>
      </Drawer>
    </Fragment>
  );
};

export default AddProduct;