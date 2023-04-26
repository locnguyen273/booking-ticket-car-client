import React from "react"
import { Form, Button, Input, Checkbox } from "antd";
import "./style.scss";

const Register = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <div className="illustration-wrapper">
          <img src="https://phongcachviettravel.vn/wp-content/uploads/2022/04/TP-HCM-PHU-QUOC-3N2D-he-2023-web.jpg" alt="register" />
        </div>
        <Form
          name="register-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Welcome back</p>
          <p>Register to the Dashboard</p>
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

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register