import React, { Fragment, useState } from 'react'
import { IDataListCategory } from '../../common/interface';
import type { ColumnsType } from 'antd/es/table';
import { Button, Space, Modal } from 'antd';
import List from '../../components/List';
import AddCategory from '../../components/Add/addCategory';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const Category = () => {

  const [open, setOpen] = useState(false);


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

  const editData = (id: any) => {
    console.log(id);
    setOpen(true);
  }

  const columns: ColumnsType<IDataListCategory> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: ''
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => editData(record)}>Edit</Button>
          <Button onClick={() => showDeleteConfirm(record)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const data: IDataListCategory[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Category ${i}`
    });
  }

  const pageSize = 20;

  return (
    <Fragment>
      <AddCategory data={open} />
      <List columns={columns} data={data} pageSize={pageSize} />
    </Fragment>
  )
}

export default Category