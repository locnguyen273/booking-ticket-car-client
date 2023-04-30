import { Typography } from "antd";
import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const HistoryOrder = () => {
  const orderHistory = useSelector((state) => state.UserReducer.orderHistory);
  
  return (
    <div className="history">
      <Typography.Title level={5} className="history__title">
        Lịch sử đặt vé
      </Typography.Title>
      {orderHistory.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Mã</th>
              <th>SL</th>
              <th>Tuyến đường</th>
              <th>Ngày đi</th>
              <th>Thanh toán</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.schedule.id}</td>
                  <td>{item.totalMoney / item.schedule.price}</td>
                  <td>{item.schedule.distance}</td>
                  <td>{Date(item.startTime).slice(16, 21)}</td>
                  <td>
                    {item.totalMoney.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td>{item.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Không tìm thấy dữ liệu. Đặt vé ngay</p>
      )}
    </div>
  );
};

export default HistoryOrder;
