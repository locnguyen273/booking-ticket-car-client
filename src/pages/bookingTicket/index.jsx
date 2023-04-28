import { Steps } from "antd";
import { useState } from "react";
import "./style.scss";
import RouteConfirmation from './../../components/steps/RouteConfirmation';

const BookingTicket = () => {
  const [current, setCurrent] = useState(1);
  const [showChair, setShowChair] = useState(false);
  const [chooseTicket, setChooseTicket] = useState({
    quantity: 0,
    listChair: []
  });

  const onChange = (value) => {
    setCurrent(value);
  };
  const handleChangeFilterBooking = (value) => {
    console.log(`selected ${value}`);
  };
  const onChangeChoose = () => {
    if (showChair) {
      setShowChair(false);
    } else {
      setShowChair(true);
    }
  };
  const handleSelectChairOnCar = () => {

  }


  const handleRenderSteps = () => {
    if (current === 1) {
      return <RouteConfirmation
        handleChangeFilterBooking={handleChangeFilterBooking}
        onChangeChoose={onChangeChoose}
        showChair={showChair}
        chooseTicket={chooseTicket}
        setChooseTicket={setChooseTicket}
      />
    } else if (current === 2) {
      return <div>current 2</div>
    } else {
      return <div>current 3 </div>
    }
  }

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
      {handleRenderSteps()}

    </div>
  );
};

export default BookingTicket;
