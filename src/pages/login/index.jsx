import React from "react"
import { Form, Button, Input, Checkbox } from "antd";
import "./style.scss";
import { Link } from 'react-router-dom';

const Login = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src="https://phongcachviettravel.vn/wp-content/uploads/2022/04/TP-HCM-PHU-QUOC-3N2D-he-2023-web.jpg" alt="Login" />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Đăng nhập</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Đăng nhập
            </Button>
            <p style={{ textAlign: "center", margin: "20px 0 0"}}>Bạn mới biết đến Mika? <Link to="/register">Đăng ký</Link></p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login