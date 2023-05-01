import { Button, Input, Typography, Select } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const ViewDetailTicket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ticketDetail = useSelector((state) => state.ManageTicketReducer.ticketDetail);

  console.log(ticketDetail);
  const [ticketDetailClone, setTicketDetailClone] = useState({
    fullname: ticketDetail.fullname,
    phoneNumber: ticketDetail.phoneNumber,
    city: ticketDetail.city,
    district: ticketDetail.district,
    email: ticketDetail.email
  });
  // const [typeCar, setTypeCar] = useState(carDetail.type);
  const [stateActive, setStateActive] = useState(ticketDetail.status);

  const handleChangeValue = (event) => {
    // const name = event.target.name;
    // setCarDetailClone((prev) => ({
    //   ...prev,
    //   [name]: event.target.value,    
    // }))
  };

  const handleUpdateCar = () => {
    // const newData = {
    //   name: carDetailClone.name,
    //   type: typeCar,
    //   toltalRow: Number(carDetailClone.toltalRow),
    //   totalColumn: Number(carDetailClone.totalColumn),
    //   numberOfFloor: Number(carDetailClone.numberOfFloor),
    //   isActive: stateActive,
    //   phoneNumber: carDetailClone.phoneNumber,
    // }
    // dispatch(UpdateOneCarAction(carDetail.id, newData));
    // dispatch(GetOneCarDetailAction(carDetail.id));
  }

  return (
    <div className="ticket-detail">
      <Typography.Title level={5} className="ticket-detail__title">Xem Chi Tiết Vé</Typography.Title>
      <div className="ticket-detail__data">
        <div className="ticket-detail__data__row">
          <div className="ticket-detail__data__item">
            <p>Họ và tên:</p>
            <Input name="fullname" value={ticketDetailClone.fullname} onChange={handleChangeValue} />
          </div>
          <div className="ticket-detail__data__item">
            <p>Số điện thoại:</p>
            <Input name="phoneNumber" value={ticketDetailClone.phoneNumber} onChange={handleChangeValue} />
          </div>
        </div>
        <div className="ticket-detail__data__row">
          <div className="ticket-detail__data__item">
            <p>Tỉnh/Thành phố:</p>
            <Input name="city" value={ticketDetailClone.city} onChange={handleChangeValue} />
          </div>
          <div className="ticket-detail__data__item">
            <p>Quận/Huyện:</p>
            <Input name="district" value={ticketDetailClone.district} onChange={handleChangeValue} />
          </div>
        </div>
        <div className="ticket-detail__data__row">
          <div className="ticket-detail__data__item">
            <p>Ngày tạo:</p>
            <Input disabled value={Date(ticketDetail.created_at).slice(0, 15)} />
          </div>
          <div className="ticket-detail__data__item">
            <p>Ngày cập nhật:</p>
            <Input disabled value={Date(ticketDetail.updated_at).slice(0, 15)} />
          </div>
        </div>
        <div className="ticket-detail__data__row">
          <div className="ticket-detail__data__item">
            <p>Trạng thái:</p>
            <Select
              defaultValue={stateActive === "waiting" ? "Waiting" : stateActive === "processing" ? "Processing" : stateActive === "completed" ? "Completed" : "Cancelled"}
              className="router-confirm__top--selected"
              onChange={(value) => setStateActive(value)}
              options={[
                { value: "waiting", label: "Waiting" },
                { value: "processing", label: "Processing" },
                { value: "completed", label: "Completed" },
                { value: "cancelled", label: "Cancelled" },
              ]}
              style={{ width: "100%" }}
            />
          </div>
          <div className="ticket-detail__data__item">
            <p>Email:</p>
            <Input name="email" value={ticketDetailClone.email} onChange={handleChangeValue} />
          </div>
        </div>
      </div>
      <div className="ticket-detail__function">
        <Button
          className="ticket-detail__function--back"
          onClick={() => navigate("/admin/manage-ticket")}
        >Quay lại</Button>
        <div className="ticket-detail__group">
          <Button className="ticket-detail__group--disabled">Vô hiệu hóa</Button>
          <Button className="ticket-detail__group--update" onClick={handleUpdateCar}>Cập nhật</Button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailTicket