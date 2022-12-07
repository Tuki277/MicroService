import React, { Fragment } from 'react'
import AddUser from '../../components/Add/addUser';
import List from '../../components/List';
import type { ColumnsType } from 'antd/es/table';
import { IDataTypeListUser } from '../../common/interface';
import { Button, Col, Row, Select, Space, Switch, Modal } from 'antd';
import Search from '../../components/search';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { Option } = Select;
const { confirm } = Modal;

const User = () => {
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

    const columns: ColumnsType<IDataTypeListUser> = [
        {
            title: 'Fullname',
            dataIndex: 'fullname',
            key: ''
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone_number',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Created',
            dataIndex: 'created_at',
        },
        {
            title: 'Stauts',
            dataIndex: 'status',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button onClick={() => console.log(record)}>Edit</Button>
                    <Button onClick={() => showDeleteConfirm(record)}>Delete</Button>
                </Space>
            ),
        },
    ];

    const data: IDataTypeListUser[] = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            fullname: `Edward King ${i}`,
            email: `Email ${i}`,
            phone_number: `${i}${i}${i}${i}${i}${i}${i}${i}`,
            role: `Role ${i}`,
            status: 0,
            created_at: `${i}${i} / ${i}${i} / ${i}${i}${i}${i}`,
        });
    }

    const pageSize = 20;

    return (
        <Fragment>
            <Row gutter={16}>
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
                    <Switch defaultChecked /> <span className='ml-1'>Active</span>
                </Col>
                <Col span={2}>
                    <AddUser />
                </Col>
            </Row>
            <List columns={columns} data={data} pageSize={pageSize} />
        </Fragment>
    )
}

export default User;