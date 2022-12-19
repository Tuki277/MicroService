import React from 'react';
import { Table } from 'antd';
import { IList } from '../../common/interface';
import './index.css';
import Loading from '../Loading/Loading';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const List = (props: IList) => {
    const { loading } = useSelector((state: RootState) => state.system);

    return (
        <div>
            {loading ? <Loading /> :

                <Table 
                    scroll={{ x: '100vw' }} 
                    size="large" columns={props.columns} 
                    pagination={{ 
                        pageSize: props.pageSize,
                        onChange:(page) => {
                            console.log({ page });
                        }
                    }} 
                    dataSource={props.data}>
                </Table>
            }
        </div>
    );
};

export default List;