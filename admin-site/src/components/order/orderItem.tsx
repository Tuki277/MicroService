import { Badge, Descriptions } from 'antd'
import React, { Fragment } from 'react'
import { Button, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

const OrderItem = () => {

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

    return (
        <Fragment>
            <Descriptions bordered>
                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Automatic Renewal">
                    <Button onClick={() => showDeleteConfirm(1)}>Delete</Button>
                </Descriptions.Item>
                <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
                <Descriptions.Item label="Usage Time" span={2}>
                    2019-04-24 18:00:00
                </Descriptions.Item>
                <Descriptions.Item label="Status" span={3}>
                    <Badge status="processing" text="Running" />
                </Descriptions.Item>
                <Descriptions.Item label="Negotiated Amount">$80.00</Descriptions.Item>
                <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
                <Descriptions.Item label="Official Receipts">$60.00</Descriptions.Item>
                <Descriptions.Item label="Config Info">
                    Data disk type: MongoDB
                    <br />
                    Database version: 3.4
                    <br />
                    Package: dds.mongo.mid
                    <br />
                    Storage space: 10 GB
                    <br />
                    Replication factor: 3
                    <br />
                    Region: East China 1<br />
                </Descriptions.Item>
            </Descriptions>
        </Fragment>
    )
}

export default OrderItem