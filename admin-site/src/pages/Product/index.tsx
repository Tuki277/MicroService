import React, { Fragment } from 'react'
import { IDataListProduct } from '../../common/interface';
import type { ColumnsType } from 'antd/es/table';
import { Button, Col, message, Row, Select, Space, Switch } from 'antd';
import List from '../../components/List';
import AddProduct from '../../components/Add/addProduct';
import "./index.css";
import Search from '../../components/search';
import { showDeleteConfirm } from '../../components/Modal/DeleteModalConfirm';
import { useDispatch } from 'react-redux';
import ProductDetail from './../../components/product/viewDetail';
import { toggleAdd, toggleDetail } from '../../redux/features/system';
const { Option } = Select;

const Product = () => {

  const dispatch = useDispatch();

  const showDetailConfirm = (id: number, status: boolean) => {
    const data = { id: 1, name: 2 };
    message.success('This is a success message');
    dispatch(toggleDetail(data));
  }

  const showEdit = () => {
    dispatch(toggleAdd());
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
      title: 'Created',
      dataIndex: 'created_at',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => showDetailConfirm(3, true)}>Detail</Button>
          <Button onClick={() => showEdit()}>Edit</Button>
          <Button onClick={() => showDeleteConfirm(3)}>Delete</Button>
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
      <ProductDetail />
    </Fragment>
  )
}

export default Product