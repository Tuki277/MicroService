import React, { Fragment, useEffect } from 'react'
import { IDataListCategory } from '../../common/interface';
import type { ColumnsType } from 'antd/es/table';
import { Button, Space, Modal, message } from 'antd';
import List from '../../components/List/List';
import AddCategory from '../../components/Add/AddCategory';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, getAllCategory } from '../../redux/features/category';
import { AppDispatch, RootState } from '../../redux/store';
import { hideLoading, showLoading, toggleAdd, toggleUpdate } from '../../redux/features/system';
const { confirm } = Modal;

const Category = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data, error } = useSelector((state: RootState) => state.category);

  useEffect(() => {
    dispatch(showLoading());
    dispatch(getAllCategory());
    setTimeout(() => {
      dispatch(hideLoading());
    }, 1000)
  }, [])

  const deleteSuccess = (id: string) => {
    dispatch(deleteCategory(id));
    if (!error) {
      message.success("Delete success");
      dispatch(getAllCategory());
    } else {
      message.error("Delete fail");
    }
  }


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
      onCancel() {},
    });
  };

  const editData = (data: any) => {
    dispatch(toggleUpdate(data));
  }

  const columns: ColumnsType<IDataListCategory> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Action',
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
      <AddCategory />
      <List columns={columns} data={data} pageSize={20} />
    </Fragment>
  )
}

export default Category