import React, { Fragment } from 'react'
import { IDataListFeedback } from '../../common/interface';
import type { ColumnsType } from 'antd/es/table';
import { Col, Row } from 'antd';
import List from '../../components/List/List';
import Search from '../../components/search';
import ProductDetail from '../../components/Product/DetailProduct';

const Feedback = () => {
  const columns: ColumnsType<IDataListFeedback> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: ''
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone number',
      dataIndex: 'phoneNumber',
    },
    {
      title: 'Note',
      dataIndex: 'note',
    },
    {
      title: 'Created',
      dataIndex: 'created_at',
    },
  ];

  const data: IDataListFeedback[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      email: `Email ${i}`,
      phoneNumber: `${i}`,
      note: "sadjghaskldhgjlasdgkasdg",
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
      </Row>
      <List columns={columns} data={data} pageSize={pageSize} />
      <ProductDetail />
    </Fragment>
  )
}

export default Feedback;