import { Button, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Payment = (props) => {
  const userInfo = useSelector((state) => state.UserReducer.userProfile);

  return (
    <>
      <div className="payment">
        <Typography.Title level={4} className="payment__title">thông tin mua vé</Typography.Title>
        <div className="payment__customer">
          <p className="payment__customer__info">Thông tin khách hàng</p>
          <div className="payment__customer__item">
            <Typography.Title level={5}>Họ tên:</Typography.Title>
            <p>{userInfo.username}</p>
          </div>
          <div className="payment__customer__item">
            <Typography.Title level={5}>Số điện thoại:</Typography.Title>
            <p>{userInfo.phoneNumber}</p>
          </div>
          <div className="payment__customer__item">
            <Typography.Title level={5}>Email:</Typography.Title>
            <p>{userInfo.email}</p>
          </div>
        </div>
        <div className="payment__routing">
          <p className="payment__customer__info">Thông tin khách hàng</p>
          <div className="payment__routing__item">
            <Typography.Title level={5}>Tuyến xe:</Typography.Title>
            <p>{userInfo.username}</p>
          </div>
          <div className="payment__routing__item">
            <Typography.Title level={5}>Thời gian:</Typography.Title>
            <p>{userInfo.phoneNumber}</p>
          </div>
          <div className="payment__routing__item">
            <Typography.Title level={5}>Điểm lên xe:</Typography.Title>
            <p>{userInfo.email}</p>
          </div>
          <div className="payment__routing__item">
            <Typography.Title level={5}>Số lượng ghế:</Typography.Title>
            <p>{userInfo.email}</p>
          </div>
          <div className="payment__routing__item">
            <Typography.Title level={5}>Số ghế:</Typography.Title>
            <p>{userInfo.email}</p>
          </div>
          <div className="payment__routing__pay">
            <Typography.Title level={5}>Tổng tiền:</Typography.Title>
            <p>20000 VNĐ</p>
          </div>
        </div>
      </div>
      <div className="payment__btn-submit">
        <Button>Tiến hành thanh toán</Button>
      </div>
    </>

  );
};

export default Payment;
