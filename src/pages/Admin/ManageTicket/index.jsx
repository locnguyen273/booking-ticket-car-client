import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { GetOneTicketDetailAction } from "../../../redux/reducers/admin/manageTicketReducer";
import "./style.scss";

const ManageTicket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listTicket = useSelector(
    (state) => state.ManageTicketReducer.listTicket
  );
  console.log(listTicket);

  const handleViewDetailTicket = (ticketId) => {
    dispatch(GetOneTicketDetailAction(ticketId));
    navigate(`/admin/manage-ticket/${ticketId}`);
  };

  return (
    <div className="manage-ticket">
      <table>
        <thead>
          <tr>
            <th>Họ và tên</th>
            <th>Số điện thoại</th>
            <th>Trạng thái</th>
            <th>Khoảng cách di chuyển</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listTicket.length > 0 &&
            listTicket.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.fullname}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.status}</td>
                  <td>{item.schedule.distance}</td>
                  <td>
                    <Button onClick={() => handleViewDetailTicket(item.id)}>
                      Xem chi tiết
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTicket;
