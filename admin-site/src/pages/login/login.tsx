import React from 'react';
import "./style.css";
import img from '../../assets/img/login_img01.jpg';
import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.css';

const Login = () => {

  const [form] = Form.useForm();

  return (
    <div className='wrapper flex justify-center align-middle'>
      <div className='login__form'>
        <div>

          <h1>Chào mừng bạn đến với hệ thống</h1>
          <p>Vui lòng đăng nhập tài khoản của bạn</p>

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button w-full">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>


        <div>
          <img src={img} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Login