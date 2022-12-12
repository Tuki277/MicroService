import React, { useEffect } from 'react';
import { Table } from 'antd';
import { IList } from '../../common/interface';
import './index.css';
import Loading from '../Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { hideLoading } from '../../redux/features/system';

const List = (props: IList) => {

    const { loading } = useSelector((state: RootState) => state.system);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(hideLoading());
        }, 5000)
    }, [])


    return (
        <div>
            {loading ? <Loading /> :

                <Table scroll={{ x: '100vw' }} size="large" columns={props.columns} pagination={{ pageSize: props.pageSize }} dataSource={props.data}>
                </Table>
            }
        </div>
    );
};

export default List;