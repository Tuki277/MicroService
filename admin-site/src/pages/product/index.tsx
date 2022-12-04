import React, { Fragment } from 'react'
import { IDataListProduct } from '../../common/interface';
import AddUser from '../../components/Add/addUser'
import type { ColumnsType } from 'antd/es/table';
import { Button, Space } from 'antd';
import List from '../../components/List';

const Product = () => {

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
      title: 'Deleted',
      dataIndex: 'deleted',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Thumbnail',
      key: 'thumbnail',
      render: (_, record) => (
        <Space size="middle">
          <AddUser data={record} />
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
          <Button onClick={() => console.log(record)}>Edit</Button>
          <Button onClick={() => console.log("delete")}>Delete</Button>
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
      <AddUser />
      <List columns={columns} data={data} pageSize={pageSize} />
    </Fragment>
  )
}

export default Product