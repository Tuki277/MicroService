import React, { Fragment } from 'react'
import { IDataListOrder } from '../../common/interface';
import type { ColumnsType } from 'antd/es/table';
import { Button, Col, Row, Space, Switch, Modal } from 'antd';
import List from '../../components/List';
import Search from '../../components/search';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { confirm } = Modal;

const Order = () => {

  const navigate = useNavigate()

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

  const showDetail = () => {
    navigate("/order/detail/1")
  }

  const columns: ColumnsType<IDataListOrder> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: ''
    },
    {
      title: 'OrderDate',
      dataIndex: 'orderDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => showDetail()}>Detail</Button>
          <Button onClick={() => showDeleteConfirm(record)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const data: IDataListOrder[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      title: `Edward King ${i}`,
      orderDate: '20-12-2022',
      status: 0
    });
  }

  const pageSize = 20;

  return (
    <Fragment>
      <Row gutter={16} className="mb-3">
        <Col span={12}>
          <Search />
        </Col>
        <Col span={4}>
          <Switch defaultChecked /> <span className='ml-1'>Available</span>
        </Col>
      </Row>
      <List columns={columns} data={data} pageSize={pageSize} />
    </Fragment>
  )
}

export default Order