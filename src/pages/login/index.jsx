import React, { useState } from "react"
import { Form, Button, Input, Modal } from "antd";
import "./style.scss";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { CallApiLoginUser } from "../../redux/reducers/userReducer";
import { CallApiForgotPasswordUser } from './../../redux/reducers/userReducer';

const Login = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState({
    email: "",
    password: ""
  });

  const handleChangeModal = (event) => {
    const name = event.target.name;
    setForgotPassword((prev) => ({
      ...prev,
      [name]: event.target.value
    }));
  }

  const onFinish = values => {
    dispatch(CallApiLoginUser(values));
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    dispatch(CallApiForgotPasswordUser(forgotPassword));
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
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
            <div className="login-page__bottom">
              <Link onClick={showModal}>Quên mật khẩu?</Link>
              <p>Bạn mới biết đến Mika? <Link to="/register">Đăng ký</Link></p>
            </div>
          </Form.Item>
        </Form>
      </div>
      <Modal
        title="Quên mật khẩu"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className="modal-forgot">
          <div>
            <p>Email: </p>
            <Input 
              placeholder="Email" 
              value={forgotPassword.email} 
              name="email" 
              onChange={handleChangeModal}
            />
          </div>
          <div>
            <p>Mật khẩu: </p>
            <Input.Password 
              placeholder="Password" 
              value={forgotPassword.password} 
              name="password"
              onChange={handleChangeModal}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login