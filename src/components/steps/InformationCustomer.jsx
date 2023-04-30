import { Input, Typography, Button } from "antd";
import React, { useState } from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const InformationCustomer = (props) => {
  const { handleContinueStepInfo } = props;
  const userInfo = useSelector(state => state.UserReducer.userProfile);

  const [user, setUser] = useState({
    username: userInfo.username,
    phoneNumber : userInfo.phoneNumber,
    email: userInfo.email,
    city: userInfo.city,
    district: userInfo.district
  });

  const handleChangeValue = (event) => {
    const name = event.target.value;
    setUser((prev) => ({
      ...prev,
      [name]: event.target.value
    }))
  };

  return (
    <div className="info-customer">
      <Typography.Title level={4} className="info-customer__title">
        Thông tin khách hàng
      </Typography.Title>
      <div className="info-customer__list">
        <div className="info-customer__item">
          <p>Họ tên khách hàng *</p>
          <Input name="username" value={user.username} onChange={handleChangeValue} />
        </div>
        <div className="info-customer__item">
          <p>Số điện thoại *</p>
          <Input name="phoneNumber" value={user.phoneNumber} onChange={handleChangeValue} />
        </div>
        <div className="info-customer__item">
          <p>Email *</p>
          <Input name="email" value={user.email} onChange={handleChangeValue} />
        </div>
        <div className="info-customer__item">
          <p>Tỉnh/ TP *</p>
          <Input name="city" value={user.city} onChange={handleChangeValue} />
        </div>
        <div className="info-customer__item">
          <p>Quận/ Huyện *</p>
          <Input name="district" value={user.district} onChange={handleChangeValue} />
        </div>
        <Button className="info-customer__continue" onClick={handleContinueStepInfo}>Tiếp tục</Button>
      </div>
    </div>
  );
};

export default InformationCustomer;
