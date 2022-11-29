import React, { Fragment, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Popover } from 'antd';
import './index.css';

const { Header, Sider, Content } = Layout;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
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
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: 'nav 1',
                },
                {
                  key: '2',
                  icon: <VideoCameraOutlined />,
                  label: 'nav 2',
                },
                {
                  key: '3',
                  icon: <UploadOutlined />,
                  label: 'nav 3',
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background header__style" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}

              <Popover content={content} trigger="click">
                <div className='header__options'>
                  <span>Tôi là Admin</span>
                </div>
              </Popover>
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
