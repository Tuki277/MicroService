import React, { Fragment } from 'react'
import { IDataListProduct } from '../../common/interface';
import type { ColumnsType } from 'antd/es/table';
import { Button, Col, Row, Select, Space, Switch, Modal } from 'antd';
import List from '../../components/List';
import AddProduct from '../../components/Add/addProduct';
import "./index.css";
import Search from '../../components/search';
import ViewDetail from '../../components/product/viewDetail';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { Option } = Select;
const { confirm } = Modal;

const Product = () => {

  const showDeleteConfirm = (id: any) => {
    console.log(id);
    confirm({
      title: 'Are you sure delete this category?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log(id);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const showDetailConfirm = () => {
    
  }

  const columns: ColumnsType<IDataListProduct> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: ''
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Discount',
      dataIndex: 'discount',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Thumbnail',
      key: 'thumbnail',
      render: (_, record) => (
        <Space size="middle">
          <ViewDetail />
        </Space>
      ),
    },
    {
      title: 'Created',
      dataIndex: 'created_at',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => showDetailConfirm()}>Detail</Button>
          <Button>Edit</Button>
          <Button onClick={() => showDeleteConfirm(record)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const data: IDataListProduct[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      title: `Edward King ${i}`,
      category: `Email ${i}`,
      discount: i,
      deleted: 0,
      thumbnail: ["https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"],
      description: `Edward King ${i} Edward King ${i} Edward King ${i} Edward King ${i} Edward King ${i} Edward King ${i}`,
      price: 0,
      quantity: 0,
      created_at: '20-12-2022'
    });
  }

  const pageSize = 20;

  return (
    <Fragment>
      <Row gutter={16} className="mb-3">
        <Col span={12}>
          <Search />
        </Col>
        <Col span={6}>
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Col>
        <Col span={4}>
          <Switch defaultChecked /> <span className='ml-1'>Available</span>
        </Col>
        <Col span={2}>
          <AddProduct />
        </Col>
      </Row>
      <List columns={columns} data={data} pageSize={pageSize} />
    </Fragment>
  )
}

export default Product