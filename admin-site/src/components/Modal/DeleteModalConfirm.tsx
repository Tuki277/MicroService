import { Modal } from "antd";
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

export const showDeleteConfirm = (id: number) => {
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