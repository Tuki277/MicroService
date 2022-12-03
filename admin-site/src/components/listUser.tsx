import React, { useState } from 'react';
import { Button, Table, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Column } = Table;

interface DataType {
    key: React.Key;
    Fullname: string;
    Email: string;
    Phone_number: string;
    Created_at: string;

}

const columns: ColumnsType<DataType> = [
    {
        title: 'Fullname',
        dataIndex: 'Fullname',
        key: ''
    },
    {
        title: 'Email',
        dataIndex: 'Email',
    },
    {
        title: 'Phone Number',
        dataIndex: 'Phone_number',
    },
    {
        title: 'Created',
        dataIndex: 'Created_at',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a onClick={() => console.log(record)}>Invite </a>
            <a>Delete</a>
          </Space>
        ),
      },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        Fullname: `Edward King ${i}`,
        Email: `Email ${i}`,
        Phone_number: `${i}${i}${i}${i}${i}${i}${i}${i}`,
        Created_at: `${i}${i} / ${i}${i} / ${i}${i}${i}${i}`,
    });
}

const ListUser = () => {

    return (
        <div>
            <Table columns={columns} pagination={{ pageSize: 20 }} dataSource={data}>
            <Column
                title="Action"
                key="action"
                render={() => (
                    <Space size="middle">
                    <a>Invite</a>
                    <a>Delete</a>
                    </Space>
                )}
                />    
            </Table>
        </div>
    );
};

export default ListUser;