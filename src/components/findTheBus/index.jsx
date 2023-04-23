import React, { useState } from "react";
import { Button, Radio, Select, Typography, DatePicker } from "antd";
import "./style.scss";

const { Option } = Select;

const FindTheBus = () => {
  const [type, setType] = useState('time');

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
            <Select value={type}>
              <Option value="time">Time</Option>
              <Option value="date">Date</Option>
              <Option value="week">Week</Option>
              <Option value="month">Month</Option>
              <Option value="quarter">Quarter</Option>
              <Option value="year">Year</Option>
            </Select>
          </div>
          <div className="find-bus__booking--item">
            <Typography.Title
              level={5}
            >
              Điểm đến
            </Typography.Title>
            <Select value={type}>
              <Option value="time">Time</Option>
              <Option value="date">Date</Option>
              <Option value="week">Week</Option>
              <Option value="month">Month</Option>
              <Option value="quarter">Quarter</Option>
              <Option value="year">Year</Option>
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
            <DatePicker size="middle" />
          </div>
          <div className="find-bus__group--item">
            <Typography.Title
              level={5}
            >
              Ngày về
            </Typography.Title>
            <DatePicker size="middle" />
          </div>
        </div>
      </div>
      <Button className="find-bus__btn-search">
        <i className="fas fa-search"></i>
        TÌM CHUYẾN XE
      </Button>
    </div>
  );
};

export default FindTheBus;
