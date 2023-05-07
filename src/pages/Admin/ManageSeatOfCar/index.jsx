import { Button, Typography, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpdateStatusSeatAction } from "../../../redux/reducers/admin/manageCarReducer";
import "./style.scss";

const ManageSeatOfCar = () => {
  const dispatch = useDispatch();
  const seatOfCar = useSelector((state) => state.ManageCarReducer.carDetail);
  const [seatOfCarClone, setSeatOfCarClone] = useState({});
  const [selectedTicket, setSelectedTicket] = useState({
    id: 0,
    name: "",
    status: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSeatOfCarClone({
      id: seatOfCar.id,
      name: seatOfCar.name,
      type: seatOfCar.type,
      toltalRow: seatOfCar.toltalRow,
      totalColumn: seatOfCar.totalColumn,
      numberOfFloor: seatOfCar.numberOfFloor,
      isActive: seatOfCar.isActive,
      phoneNumber: seatOfCar.phoneNumber,
      seats: seatOfCar.seats,
    });
  }, [seatOfCar]);

  const showModal = (value) => {
    setSelectedTicket({
      id: value.id,
      name: value.name,
      status: value.status,
    });
    setIsModalOpen(true);
  };
  console.log(selectedTicket);
  const handleOk = () => {
    if (selectedTicket.status === "available") {
      dispatch(
        UpdateStatusSeatAction(selectedTicket.id, { status: "unavailable" })
      );
    } else {
      dispatch(
        UpdateStatusSeatAction(selectedTicket.id, { status: "available" })
      );
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="seat-car">
      <Typography.Title level={4}>Quản lý ghế</Typography.Title>
      {seatOfCarClone.numberOfFloor === 1 ? (
        <div className="seat-car__single">
          <Typography.Title level={5}>Danh sách ghế</Typography.Title>
          <div className="seat-car__single__top">
            <div>
              <p>Tên xe:</p>
              <span>{seatOfCarClone.name}</span>
            </div>
            <div>
              <p>Tổng số ghế:</p>
              <span>
                {seatOfCarClone.toltalRow *
                  seatOfCarClone.totalColumn *
                  seatOfCarClone.numberOfFloor}
              </span>
            </div>
          </div>
          <div className="seat-car__single__list">
            {seatOfCarClone.seats.length > 0 &&
              seatOfCarClone.seats.map((item) => {
                return (
                  <Button
                    key={item.id}
                    className={
                      item.status === "available"
                        ? "seat-car__single--available"
                        : "seat-car__single--unavailable"
                    }
                    onClick={() => showModal(item)}
                  >
                    {item.name}
                  </Button>
                );
              })}
          </div>
          <div className="seat-car__single__bottom"></div>
        </div>
      ) : (
        <div className="seat-car__double">
          <div>
            <Typography.Title level={5}>Tầng dưới</Typography.Title>
            <Typography.Title level={5}>Tần trên</Typography.Title>
          </div>
          {/* {seatOfCarClone.seats.length > 0 && seatOfCarClone.seats.map(item => {
              return <Button key={item.id}>
                {item.name}
              </Button>
            })} */}
        </div>
      )}
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedTicket.status === "available" ? (
          <p>
            Bạn có muốn ẩn ghế <b> {selectedTicket.name}</b> của xe{" "}
            <b>{seatOfCarClone.name} </b>
            không ?
          </p>
        ) : (
          <p>
            Bạn có muốn hiện ghế <b> {selectedTicket.name}</b> của xe{" "}
            <b>{seatOfCarClone.name} </b>
            không ?
          </p>
        )}
      </Modal>
    </div>
  );
};

export default ManageSeatOfCar;
