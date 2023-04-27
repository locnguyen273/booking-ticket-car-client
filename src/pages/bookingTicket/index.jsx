import { Steps } from "antd";
import { useState } from "react";
import "./style.scss";

const BookingTicket = () => {
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const description = "This is a description.";

  return (
    <div className="booking">
      <Steps
        current={current}
        onChange={onChange}
        items={[
          {
            title: "CHỌN TUYẾN",
          },
          {
            title: "XÁC NHẬN LỘ TRÌNH",
          },
          {
            title: "THÔNG TIN HÀNH KHÁCH",
          },
          {
            title: "THANH TOÁN",
          },
        ]}
      />
      BookingTicket
    </div>
  );
};

export default BookingTicket;
