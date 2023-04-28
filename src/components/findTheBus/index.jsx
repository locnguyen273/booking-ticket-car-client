import React, { useState } from "react";
import { Button, Radio, Select, Typography, DatePicker } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const { Option } = Select;

const FindTheBus = () => {
  const navigate = useNavigate();
  const [chooseBusGo, setChooseBusGo] = useState("");
  const [chooseBusArrive, setChooseBusArrive] = useState("");
  const [dayBusGo, setDayBusGo] = useState("");
  const [dayBusArrive, setDayBusArrive] = useState("");
  const listAddressBus = useSelector(state => state.AddressReducer.listAddress);

  const handleFindBus = () => {
    navigate("/dat-ve-xe");
    const data = {
      chooseBusGo,
      chooseBusArrive,
      dayBusGo,
      dayBusArrive
    }
    console.log("data", data);
  }


  return (
    <div className="find-bus">
      <div className="find-bus__top">
        <Radio defaultChecked>Một chiều</Radio>
        <Radio defaultChecked={false}>Khứ hồi</Radio>
      </div>
      <div className="find-bus__list">
        <div className="find-bus__booking">
          <div className="find-bus__booking--item">
            <Typography.Title
              level={5}
            >
              Điểm đi
            </Typography.Title>

            <Select onChange={(value) => setChooseBusGo(value)}>
              {listAddressBus.length > 0 && listAddressBus.map(item => {
                return <Option key={item.id} value={item.name}>{item.name}</Option>
              })}
            </Select>
          </div>
          <div className="find-bus__booking--item">
            <Typography.Title
              level={5}
            >
              Điểm đến
            </Typography.Title>
            <Select onChange={(value) => setChooseBusArrive(value)}>
              {listAddressBus.length > 0 && listAddressBus.map(item => {
                return <Option key={item.id} value={item.name}>{item.name}</Option>
              })}
            </Select>
          </div>
        </div>

        <div className="find-bus__group">
          <div className="find-bus__group--item">
            <Typography.Title
              level={5}
            >
              Ngày đi
            </Typography.Title>
            <DatePicker size="middle" onChange={(event) => setDayBusGo(event.$d)} />
          </div>
          <div className="find-bus__group--item">
            <Typography.Title
              level={5}
            >
              Ngày về
            </Typography.Title>
            <DatePicker size="middle" onChange={(event) => setDayBusArrive(event.$d)} />
          </div>
        </div>
      </div>
      <Button className="find-bus__btn-search" onClick={handleFindBus}>
        <i className="fas fa-search"></i>
        TÌM CHUYẾN XE
      </Button>
    </div>
  );
};

export default FindTheBus;
