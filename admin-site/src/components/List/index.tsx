import React from 'react';
import { Table } from 'antd';
import { IList } from '../../common/interface';
import './index.css';

const List = (props: IList) => {

    return (
        <div>
            <Table scroll={{ x: '100vw' }} size="large" columns={props.columns} pagination={{ pageSize: props.pageSize }} dataSource={props.data}>
            </Table>
        </div>
    );
};

export default List;