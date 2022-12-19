import React, { Fragment, useEffect } from 'react'
import { IDataListCode } from '../../common/interface';
import type { ColumnsType } from 'antd/es/table';
import { Button, Space, Modal, message } from 'antd';
import List from '../../components/List/List';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { hideLoading, showLoading, toggleUpdate } from '../../redux/features/system';
import { deleteCode, getAllCode } from '../../redux/features/code';
import AddCode from '../../components/Add/AddCode';
const { confirm } = Modal;

const Code = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { data, error } = useSelector((state: RootState) => state.code);

    useEffect(() => {
        dispatch(showLoading());
        dispatch(getAllCode());
        setTimeout(() => {
            dispatch(hideLoading());
        }, 1000)
    }, [])

    const showDeleteConfirm = (id: string) => {
        console.log(id);
        confirm({
            title: 'Are you sure delete this category?',
            icon: <ExclamationCircleOutlined />,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteSuccess(id);
            },
            onCancel() { },
        });
    };

    const deleteSuccess = (id: string) => {
        dispatch(deleteCode(id));
        if (!error) {
            message.success("Delete success");
            dispatch(getAllCode());
        } else {
            message.error("Delete fail");
        }
    }

    const editData = (data: any) => {
        dispatch(toggleUpdate(data));
    }

    const columns: ColumnsType<IDataListCode> = [
        {
            title: 'Name',
            dataIndex: 'code',
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record: any) => (
                <Space size="middle">
                    <Button onClick={() => editData(record)}>Edit</Button>
                    <Button onClick={() => showDeleteConfirm(record.id)}>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <Fragment>
            <AddCode />
            <List columns={columns} data={data} pageSize={20} />
        </Fragment>
    )
}

export default Code