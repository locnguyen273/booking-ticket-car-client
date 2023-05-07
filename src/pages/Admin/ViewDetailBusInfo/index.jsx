import React, { useEffect, useState } from "react";
import { Input, Typography, Select, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import {
  UpdateBusInfoAction,
  GetListBusInfoAction,
} from "../../../redux/reducers/admin/manageBusInfoReducer";

const { Option } = Select;

const ViewDetailBusInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listAddressBus = useSelector(
    (state) => state.AddressReducer.listAddress
  );
  const busInfoDetail = useSelector(state => state.ManageBusInfoReducer.busInfoDetail);
  const [busInfoDetailClone, setBusInfoDetailClone] = useState({
    price: 0,
    startTime: "",
    endTime: "",
    distance: "",
    isActive: true,

  });
  const [listBusGo, setListBusGo] = useState([]);
  const [listBusArrive, setListBusArrive] = useState([]);
  const [chooseBusGo, setChooseBusGo] = useState("");
  const [chooseBusArrive, setChooseBusArrive] = useState("");

  useEffect(() => {
    setBusInfoDetailClone({
      price: busInfoDetail.price,
      startTime: busInfoDetail.startTime,
      endTime: busInfoDetail.endTime,
      distance: busInfoDetail.distance,
      isActive: busInfoDetail.isActive,
    });
    setChooseBusGo(busInfoDetail.departureAddress.name);
    setChooseBusArrive(busInfoDetail.destinationAddress.name);
  }, [busInfoDetail]);

  useEffect(() => {
    listAddressBus.forEach((item) => {
      setListBusGo((prev) => [...prev, item]);
      setListBusArrive((prev) => [...prev, item]);
    });
  }, [listAddressBus]);

  const handleChangeValue = (event) => {
    const name = event.target.name;
    setBusInfoDetailClone((prev) => ({
      ...prev,
      [name]: event.target.value,
    }))
  };

  const handleDisableSchedule = () => {
    dispatch(UpdateBusInfoAction(busInfoDetail.id, { isActive: false }));
    dispatch(GetListBusInfoAction());
    navigate("/admin/manage-bus-information");
  }

  const handleUpdateSchedule = () => {
    const newData = {
      price: Number(busInfoDetailClone.price),
      distance: busInfoDetailClone.distance,
      isActive: busInfoDetailClone.isActive,
      // departureAddress: {
      //   name: chooseBusGo,
      // },
      // destinationAddress: {
      //   name: chooseBusArrive,
      // }
    };
    dispatch(UpdateBusInfoAction(busInfoDetail.id, newData));
    dispatch(GetListBusInfoAction());
    navigate("/admin/manage-bus-information");
  }

  return (
    <div className="detail-schedule">
      <Typography.Title level={4}>Xem chi tiết chuyến xe</Typography.Title>
      <div className="detail-schedule__top">
        <div className="detail-schedule__top__row">
          <div className="detail-schedule__top__item">
            <p>Giá:</p>
            <Input
              name="price"
              value={busInfoDetailClone.price.toLocaleString("it-IT", { style: "currency", currency: "VND", })}
              onChange={handleChangeValue}
            />
          </div>
          <div className="detail-schedule__top__item">
            <p>Giờ khởi hành:</p>
            <Input
              name="startTime"
              value={moment.utc(busInfoDetailClone.startTime).format("hh:mm")}
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <div className="detail-schedule__top__row">
          <div className="detail-schedule__top__item">
            <p>Điểm đi:</p>
            <Select
              onChange={(value) => {
                setChooseBusGo(value);
                setListBusArrive(listAddressBus.filter(item => item.name !== value));
              }}
              defaultValue={busInfoDetail.departureAddress.name}
              style={{ width: "100%" }}
            >
              {listBusGo.length > 0 &&
                listBusGo.map((item) => {
                  return (
                    <Option key={item.id} value={item.name}>
                      {item.name}
                    </Option>
                  );
                })}
            </Select>
          </div>
          <div className="detail-schedule__top__item">
            <p>Giờ kết thúc:</p>
            <Input
              name="endTime"
              value={moment.utc(busInfoDetailClone.endTime).format("hh:mm")}
              onChange={handleChangeValue}
            />
          </div>
        </div>
        <div className="detail-schedule__top__row">
          <div className="detail-schedule__top__item">
            <p>Điểm đến:</p>
            <Select
              onChange={(value) => {
                setChooseBusArrive(value);
                setListBusGo(listAddressBus.filter(item => item.name !== value));
              }}
              defaultValue={busInfoDetail.destinationAddress.name}
              style={{ width: "100%" }}
            >
              {listBusArrive.length > 0 &&
                listBusArrive.map((item) => {
                  return (
                    <Option key={item.id} value={item.name}>
                      {item.name}
                    </Option>
                  );
                })}
            </Select>
          </div>
          <div className="detail-schedule__top__item">
            <p>Ngày tạo:</p>
            <Input disabled value={moment.utc(busInfoDetail.created_at).format("DD/MM/YYYY - hh:mm")} />
          </div>
        </div>
        <div className="detail-schedule__top__row">
          <div className="detail-schedule__top__item">
            <p>Khoảng cách:</p>
            <Input
              name="distance"
              value={busInfoDetailClone.distance}
              onChange={handleChangeValue}
            />
          </div>
          <div className="detail-schedule__top__item">
            <p>Ngày cập nhật:</p>
            <Input disabled value={moment.utc(busInfoDetail.updated_at).format("DD/MM/YYYY - hh:mm")} />
          </div>
        </div>
        <div className="detail-schedule__top__row">
          <div className="detail-schedule__top__add-car">
            <p>Thêm xe:</p>
            <Input />
            <Button><i className="fas fa-trash-alt"></i></Button>
          </div>
        </div>
      </div>
      <div className="detail-schedule__bottom">
        <Button className="detail-schedule__bottom--plus">
          <i className="fas fa-plus"></i>
        </Button>
        <div className="detail-schedule__group">
          <Button onClick={() => {
            navigate("/admin/manage-bus-information")
          }}>Quay lại</Button>
          <div className="detail-schedule__group__item">
            <Button
              className="detail-schedule__group__item--disable"
              onClick={handleDisableSchedule}
            >Vô hiệu hóa</Button>
            <Button
              className="detail-schedule__group__item--update"
              onClick={handleUpdateSchedule}
            >Cập nhật</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailBusInfo;
