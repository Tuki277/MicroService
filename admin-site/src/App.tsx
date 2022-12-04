import React, { Fragment, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './routes';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  RiseOutlined,
  BankOutlined,
} from '@ant-design/icons';
import { Avatar, Layout, Menu, Popover } from 'antd';
import './index.css';
import Noti from './components/Noti';
import Settings from './components/Settings';

const { Header, Sider, Content } = Layout;

const content = (
  <div>
    <p>Account</p>
    <p>Logout</p>
  </div>
);

function App() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Fragment>
      <BrowserRouter>
        <Layout className='h-screen'>
          <Sider trigger={null} collapsible collapsed={collapsed} width="300">
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
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
              <div className='header__right'>
                <div>
                  <Settings />
                </div>
                <div className='noti'>
                  <Noti />
                </div>
                <Popover content={content} trigger="click">
                  <div className='header__options'>
                    <span>
                      <Avatar style={{ backgroundColor: '#1890ff' }} icon={<UserOutlined />} />
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
        </Layout>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;