import React, { Fragment } from 'react'
import AddUser from '../../components/Add/addUser';
import List from '../../components/List';
import type { ColumnsType } from 'antd/es/table';
import { IDataTypeListUser } from '../../common/interface';
import { Button, Space } from 'antd';


const User = () => {

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

    const data: IDataTypeListUser[] = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            fullname: `Edward King ${i}`,
            email: `Email ${i}`,
            phone_number: `${i}${i}${i}${i}${i}${i}${i}${i}`,
            role: `Role ${i}`,
            created_at: `${i}${i} / ${i}${i} / ${i}${i}${i}${i}`,
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

export default User;