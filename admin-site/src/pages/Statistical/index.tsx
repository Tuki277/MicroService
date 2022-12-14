import React, { Fragment } from 'react'
import List from '../../components/List/List';
import type { ColumnsType } from 'antd/es/table';
import { IDataTypeListStatistical } from '../../common/interface';
import { Button, Col, Modal, Row, Space } from 'antd';
import Datepicker from '../../components/Statistical/Datepicker';
import Search from '../../components/search';
import './index.css'
import { showDeleteConfirm } from '../../components/Modal/DeleteModalConfirm';

const { confirm } = Modal;

const Statistical = () => {

  const columns: ColumnsType<IDataTypeListStatistical> = [
    {
      title: 'File name',
      dataIndex: 'name',
      key: ''
    },
    {
      title: 'Date report',
      dataIndex: 'date',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => showDeleteConfirm(3)}>Download</Button>
        </Space>
      ),
    },
  ];

  const pageSize = 20;

  const data: IDataTypeListStatistical[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `File ${i}.xslx`,
      date: "20-01-2022"
    });
  }

  return (
    <Fragment>
      <Row gutter={16} className="mb-3">
        <Col span={12}>
          <Search />
        </Col>
        <Col span={12}>
          <Datepicker />
        </Col>
      </Row>
      <List columns={columns} data={data} pageSize={pageSize} />
    </Fragment>
  )
}

export default Statistical;