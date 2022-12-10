import React, { Fragment, useState } from 'react'
import Routes from '../routes';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    ShopOutlined,
    RiseOutlined,
    BankOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Avatar, Button, Layout, Menu, Popover } from 'antd';
import Noti from '../components/Noti';
import Settings from '../components/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { logoutSystem, toggleCollapsedNav } from '../redux/features/system';
import './index.css'

const { Header, Sider, Content } = Layout;

const Layouts = () => {

    const dispatch = useDispatch();

    const { collapsedNav, login } = useSelector((state: RootState) => state.system)

    const logout = () => {
        dispatch(logoutSystem())
        
    }

    const content = (
        <div className='w-6'>
            <Button className='w-full' type='text' >Account</Button>
            <Button className='w-full' type='text' onClick={() => logout()}>Logout</Button>
        </div>
    );

    const actionCollapsedNav = () => {
        dispatch(toggleCollapsedNav());
    }

    return (
        <Fragment>

            {login ? <Layout className='h-screen'>
                <Sider trigger={null} collapsible collapsed={collapsedNav} width="300">
                    <div className="logo" />
                    <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
                        <Menu.Item key="1">
                            <Link to="/">
                                <BankOutlined />
                                <span>Dashboard</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/statistical">
                                <RiseOutlined />
                                <span>Statistical</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/product">
                                <ShoppingCartOutlined />
                                <span>Product</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/category">
                                <ShopOutlined />
                                <span>Category</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to="/order">
                                <ShoppingCartOutlined />
                                <span>Order</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to="/user">
                                <UserOutlined />
                                <span>User</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background header__style" style={{ padding: 0 }}>
                        {React.createElement(collapsedNav ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => actionCollapsedNav(),
                        })}
                        <div className='header__right'>
                            <div>
                                <Settings />
                            </div>
                            <div className='noti'>
                                <Noti />
                            </div>
                            <Popover content={content} trigger="click" className='mr-2'>
                                <div className='ml-2'>
                                    <span>
                                        <Avatar size={30} style={{ backgroundColor: '#1890ff' }} icon={<UserOutlined />} />
                                    </span>
                                </div>
                            </Popover>
                        </div>
                    </Header>
                    <Content
                        className="site-layout-background scroll"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Routes />
                    </Content>
                </Layout>
            </Layout> : <Routes />}
        </Fragment>

    )
}

export default Layouts