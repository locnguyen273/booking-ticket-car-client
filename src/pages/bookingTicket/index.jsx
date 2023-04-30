import { Steps } from "antd";
import { useState } from "react";
import "./style.scss";
import RouteConfirmation from './../../components/steps/RouteConfirmation';
import InformationCustomer from './../../components/steps/InformationCustomer';
import Payment from './../../components/steps/Payment';
import { useDispatch } from "react-redux";
import { CallApiGetScheduleByTicketId } from './../../redux/reducers/scheduleReducer';
import { useSelector } from "react-redux";

const BookingTicket = () => {
  const dispatch = useDispatch();
  const scheduleById = useSelector(
    (state) => state.ScheduleReducer.scheduleById
  );
  const [current, setCurrent] = useState(1);
  const [showChair, setShowChair] = useState(false);
  const [booked, setBooked] = useState([]);

  const onChange = (value) => {
    setCurrent(value);
  };
  const handleChangeFilterBooking = (value) => {
    console.log(`selected ${value}`);
  };
  const onChangeChoose = (ticketId) => {
    dispatch(CallApiGetScheduleByTicketId(ticketId));
    if (!showChair && scheduleById.id === ticketId) {
      setShowChair(true);
    } else {
      setShowChair(false);
    }
  };
  const handleContinueStep = () => {
    setCurrent(2);
  }

  const handleContinueStepInfo = () => {
    setCurrent(3);
  }

  const handleRenderSteps = () => {
    if (current === 1) {
      return <RouteConfirmation
        handleChangeFilterBooking={handleChangeFilterBooking}
        onChangeChoose={onChangeChoose}
        showChair={showChair}
        booked={booked}
        setBooked={setBooked}
        handleContinueStep={handleContinueStep}
      />
    } else if (current === 2) {
      return <InformationCustomer
        handleContinueStepInfo={handleContinueStepInfo}
      />
    } else {
      return <Payment
      />
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
