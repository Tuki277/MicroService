import React, { Fragment, useState } from 'react'
import { IDataListCode } from '../../common/interface';
import type { ColumnsType } from 'antd/es/table';
import { Button, Space, Modal } from 'antd';
import List from '../../components/List/List';
import AddCategory from '../../components/Add/AddCategory';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const Code = () => {

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

    const columns: ColumnsType<IDataListCode> = [
        {
            title: 'Name',
            dataIndex: 'code',
            key: ''
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
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

    const data: IDataListCode[] = [];
    for (let i = 0; i < 46; i++) {
        data.push({
            key: i,
            code: "asdgasdg",
            discount: 10,
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

export default Code