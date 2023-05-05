import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetListBusInfoAction } from "./../../../redux/reducers/admin/manageBusInfoReducer";
import { Button, Modal, Input, Select, DatePicker } from "antd";
import moment from "moment";
import "./style.scss";
import dayjs from "dayjs";

const { Option } = Select;

const ManageBusInformation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetListBusInfoAction());
  }, []);

  const listBusInfo = useSelector(
    (state) => state.ManageBusInfoReducer.listBusInfo
  );
  const listAddressBus = useSelector(
    (state) => state.AddressReducer.listAddress
  );
  const [listBusClone, setListBusClone] = useState([]);
  const [listBusGo, setListBusGo] = useState([]);
  const [listBusArrive, setListBusArrive] = useState([]);
  const [chooseBusGo, setChooseBusGo] = useState("");
  const [chooseBusArrive, setChooseBusArrive] = useState("");
  const [newListBus, setNewListBus] = useState({
    price: "",
    distance: "",
  });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);
  const [dayBusGo, setDayBusGo] = useState("");
  const [dayBusArrive, setDayBusArrive] = useState("");
  const customFormat = (value) => `${value.format("DD/MM/YYYY")}`;

  useEffect(() => {
    listAddressBus.forEach((item) => {
      setListBusGo((prev) => [...prev, item]);
      setListBusArrive((prev) => [...prev, item]);
    });
  }, []);
  useEffect(() => {
    setListBusClone(listBusInfo);
  }, [listBusInfo]);

  const handleChangeValueModal = (event) => {
    const name = event.target.name;
    setNewListBus((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const handleOk = () => {
    const newDataCreate = {
      price:  Number(newListBus.price),
      departureAddress: Number(chooseBusGo),
      destinationAddress: Number(chooseBusArrive),
      startTime: dayBusGo,
      endTime: dayBusArrive,
      distance: newListBus.distance
    };
    console.log(newDataCreate);
    // dispatch(CreateNewCarAction(newDataCreate));
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   setOpen(false);
    // }, 3000);
  };

  return (
    <div className="bus-info">
      <div className="bus-info__top">
        <Button className="bus-info__top--add" onClick={showModal}>
          Tạo chuyến xe mới <i className="fas fa-plus"></i>
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Giá</th>
            <th>Giờ khởi hành</th>
            <th>Giờ kết thúc</th>
            <th>Khoảng cách</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listBusClone.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  {item.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </td>
                <td>{moment.utc(item.startTime).format("hh:mm:ss")}</td>
                <td>{moment.utc(item.endTime).format("hh:mm:ss")}</td>
                <td>{item.distance}</td>
                <td>{item.isActive ? "Đang hoạt động" : "Tạm dừng"}</td>
                <td><Button>Xem chi tiết</Button></td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal
        open={open}
        title="Thêm mới chuyến xe"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            {" "}
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Thêm mới chuyến xe
          </Button>,
        ]}
      >
        <div className="manage-car__modal">
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Giá:</p>
              <Input
                type="number"
                name="price"
                value={newListBus.price}
                onChange={handleChangeValueModal}
              />
            </div>
            <div className="manage-car__modal__item">
              <p>Khoảng cách:</p>
              <Input
                name="distance"
                value={newListBus.distance}
                onChange={handleChangeValueModal}
              />
            </div>
          </div>
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Giờ khởi hành:</p>
              <DatePicker
                style={{ width: "100%" }}
                defaultValue={dayjs("2023/04/29", "YYYY/MM/DD")}
                format={customFormat}
                onChange={(d, dateString) => setDayBusGo(d)}
              />
            </div>
            <div className="manage-car__modal__item">
              <p>Điểm đi:</p>
              <Select
                onChange={(value) => {
                  setChooseBusGo(value);
                  setListBusArrive(listBusArrive.filter(item => item.name !== value));
                }}
                style={{ width: "100%" }}
              >
                {listBusGo.length > 0 &&
                  listBusGo.map((item) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
              </Select>
            </div>
          </div>
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Giờ kết thúc:</p>
              <DatePicker
                style={{ width: "100%" }}
                defaultValue={dayjs("2023/04/29", "YYYY/MM/DD")}
                format={customFormat}
                onChange={(d, dateString) => setDayBusArrive(d)}
              />
            </div>
            <div className="manage-car__modal__item">
              <p>Điểm đến:</p>
              <Select 
                onChange={(value) => setChooseBusArrive(value)}
                style={{ width: "100%" }}
              >
                {listBusArrive.length > 0 &&
                  listBusArrive.map((item) => {
                    return (
                      <Option key={item.id} value={item.id}>
                        {item.name}
                      </Option>
                    );
                  })}
              </Select>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageBusInformation;
