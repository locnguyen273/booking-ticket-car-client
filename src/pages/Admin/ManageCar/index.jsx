/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Input, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CreateNewCarAction, GetOneCarDetailAction } from "./../../../redux/reducers/admin/manageCarReducer";


const ManageCar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState([]);
  const [typeChair, setTypeChair] = useState("");
  const [dbNewCar, setDbNewCar] = useState(
    {
      name: "",
      totalRow: "",
      totalColumn: "",
      numberOfFloor: "",
      phoneNumber: "",
    }
  );
  const [userId, setUserId] = useState(null);

  const listCar = useSelector((state) => state.ManageCarReducer.listCar);
  const listUser = useSelector((state) => state.ManageUserReducer.listUser);
  useEffect(() => {
    if (userData.length === 0) {
      listUser.forEach((user) => {
        const newDataUser = { label: user.name, value: user.id };
        setUserData((prev) => [...prev, newDataUser]);
      });
    }
  }, []);

  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  const handleChangeValueModal = (event) => {
    const name = event.target.name;
    setDbNewCar((prev) => ({
      ...prev,
      [name]: event.target.value,
    }))
  };

  const handleOk = () => {
    const newDataCreate = {
      name: dbNewCar.name,
      type: typeChair,
      totalRow: Number(dbNewCar.totalRow),
      totalColumn: Number(dbNewCar.totalColumn),
      numberOfFloor: Number(dbNewCar.numberOfFloor),
      phoneNumber: dbNewCar.phoneNumber,
      user: userId,
    }
    dispatch(CreateNewCarAction(newDataCreate));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleViewDetailCar = (carId) => {
    dispatch(GetOneCarDetailAction(carId));
    navigate(`/admin/manage-car/${carId}`);
  }

  return (
    <div className="manage-car">
      <div className="manage-car__top">
        <Button className="manage-car__top--add" onClick={showModal}>
          Tạo xe mới <i className="fas fa-plus"></i>
        </Button>
        <Button className="manage-car__top--chair">
          Quản lý ghế <i className="fas fa-chair"></i>
        </Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Tên xe</th>
            <th>Loại xe</th>
            <th>Trạng thái</th>
            <th>Tổng số chỗ ngồi</th>
            <th>Thông tin tài xế</th>
            <th>Số điện thoại</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listCar.length > 0 &&
            listCar.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.isActive ? "Đang hoạt động" : "Hư hỏng"}</td>
                  <td>
                    {item.toltalRow * item.totalColumn * item.numberOfFloor}
                  </td>
                  <td>{item.user.name}</td>
                  <td>{item.user.phoneNumber}</td>
                  <td>
                    <Button onClick={() => handleViewDetailCar(item.id)}>Xem chi tiết</Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Modal
        open={open} title="Thêm mới xe" onOk={handleOk} onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button
            key="submit" type="primary" loading={loading} onClick={handleOk}
          >
            Thêm mới xe
          </Button>,
        ]}
      >
        <div className="manage-car__modal">
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Tên xe:</p>
              <Input placeholder="Nhập tên xe" name="name" value={dbNewCar.name} onChange={handleChangeValueModal} />
            </div>
            <div className="manage-car__modal__item">
              <p>Chọn loại xe:</p>
              <Select
                defaultValue="-- Chọn loại xe --"
                className="router-confirm__top--selected"
                onChange={(value) => setTypeChair(value)}
                options={[
                  {value: "bed", label: "Giường"},
                  {value: "chair", label: "Ghế"},
                  {value: "limousine", label: "Limousine"},
                ]}
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Nhâp số hàng ghế:</p>
              <Input placeholder="Nhập số hàng ghế" name="totalRow" value={dbNewCar.totalRow} onChange={handleChangeValueModal} />
            </div>
            <div className="manage-car__modal__item">
              <p>Nhập số cột ghế:</p>
              <Input placeholder="Nhập số cột ghế" name="totalColumn" value={dbNewCar.totalColumn} onChange={handleChangeValueModal} />
            </div>
          </div>
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Nhâp số tầng xe:</p>
              <Input placeholder="Nhập số tầng xe" name="numberOfFloor" value={dbNewCar.numberOfFloor} onChange={handleChangeValueModal} />
            </div>
            <div className="manage-car__modal__item">
              <p>Nhập số điện thoại:</p>
              <Input placeholder="Nhập số điện thoại" name="phoneNumber" value={dbNewCar.phoneNumber} onChange={handleChangeValueModal} />
            </div>
          </div>
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Chọn tên xài xế:</p>
              <Select
                defaultValue="-- Chọn tài xế --"
                className="router-confirm__top--selected"
                onChange={(value) => setUserId(value)}
                options={userData}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageCar;
