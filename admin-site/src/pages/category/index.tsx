import React, { Fragment } from 'react'
import { IDataListCategory } from '../../common/interface';
import AddUser from '../../components/Add/addUser'
import type { ColumnsType } from 'antd/es/table';
import { Button, Space } from 'antd';
import List from '../../components/List';

const Category = () => {

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
          <Button onClick={() => console.log(record)}>Edit</Button>
          <Button onClick={() => console.log("delete")}>Delete</Button>
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
      <AddUser />
      <List columns={columns} data={data} pageSize={pageSize} />
    </Fragment>
  )
}

export default Category