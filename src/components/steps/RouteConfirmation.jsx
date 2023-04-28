import React from "react";
import { dataBooking } from "../../utils/menuData";
import { Select, Typography } from "antd";
import "./style.scss";

const RouteConfirmation = (props) => {
  const { handleChangeFilterBooking, onChangeChoose, showChair } = props;
  const dtLsChair = [
    { id: 1, name: "A01", chosedTicket: false, choosing: false },
    { id: 2, name: "A02", chosedTicket: false, choosing: false },
    { id: 3, name: "A03", chosedTicket: false, choosing: false },
    { id: 4, name: "A04", chosedTicket: false, choosing: false },
    { id: 5, name: "A05", chosedTicket: true, choosing: false },
    { id: 6, name: "A06", chosedTicket: true, choosing: false },
    { id: 7, name: "A07", chosedTicket: false, choosing: false },
    { id: 8, name: "A08", chosedTicket: true, choosing: false },
    { id: 9, name: "A09", chosedTicket: false, choosing: false },
    { id: 10, name: "A10", chosedTicket: false, choosing: false },
    { id: 11, name: "A11", chosedTicket: false, choosing: false },
  ];


  const handleSelectedTicket = (data) => {
  }

  return (
    <div className="route-confirm">
      <div className="route-confirm__top">
        <Select
          defaultValue="Giá"
          className="router-confirm__top--selected"
          onChange={handleChangeFilterBooking}
          options={dataBooking.typePrice}
        />
        <Select
          defaultValue="Loại Xe"
          className="router-confirm__top--selected"
          onChange={handleChangeFilterBooking}
          options={dataBooking.typeCar}
        />
        <Select
          defaultValue="Giờ"
          className="router-confirm__top--selected"
          onChange={handleChangeFilterBooking}
          options={dataBooking.typeHours}
        />
      </div>
      <p>Chọn giờ lên xe đi từ TP. Hồ Chí Minh từ Châu Đốc phù hợp</p>
      <div className="route-confirm__list">
        <div className="route-confirm__item">
          <p className="route-confirm__item--header">
            15:00
            <img
              alt="fromto"
              width="28"
              height="7"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAOCAYAAAB6pd+uAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOKADAAQAAAABAAAADgAAAAAjNiV1AAABjklEQVRIDWNgGGQgraTRO7OiXZBazmKilkHUMuffPwaFX39+ZaSXN+lTw8xB50FGRgYmxn8MbH9//w9ILmoMLezr46TEo4POg/8ZgV6EAiBD68uTL5nAJKsEEyOVZiZVA63VG1nYWzIwMHIg2cP+7+9ffWMrRw4/d4eHBw4c+IckR5A56GIQGGtY3fT/P4PFk0+MqSlVreIEfYWkAKthSPJ0ZyInUSyWizH+/JuaVNJk+f//f3hSxqIOLjToPMgALGTgrsPCAHqMmenff7fUsubY3IYGPixKUITwGoaikk4cYAlKnJv+/lf88YUxM7W8SRuf04gzDJ8JVJYjkERRbPv/j4Hj/+//IamFjYG5kyaxo0hCOYwpRY312CSGntj/j0ysHOtmdVY8Qnb7oItBZMeRxmbk//f7ZyKwceAcumoVvPobRh6EBAewaLXhP3kjOa24QQQkwmxk6egAkRqcJDBP/mcAImDpCkQgBgMom/4DYmBFAaorgMUSAwMEMzL+BSr5BxTkBNabeqZ2Tp8BQTlvqFxYe+QAAAAASUVORK5CYII="
              data-v-008a65cb=""
            />
            21:00
          </p>
          <p className="route-confirm__item--center">
            210.000đ - Limousine - Còn 28 chỗ
          </p>
          <div className="route-confirm__item__bottom">
            <div className="route-confirm__item__bottom--left">
              <p>
                Bến Xe Châu Đốc
                <img
                  alt="fromto"
                  width="28"
                  height="7"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAOCAYAAAB6pd+uAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAOKADAAQAAAABAAAADgAAAAAjNiV1AAABjklEQVRIDWNgGGQgraTRO7OiXZBazmKilkHUMuffPwaFX39+ZaSXN+lTw8xB50FGRgYmxn8MbH9//w9ILmoMLezr46TEo4POg/8ZgV6EAiBD68uTL5nAJKsEEyOVZiZVA63VG1nYWzIwMHIg2cP+7+9ffWMrRw4/d4eHBw4c+IckR5A56GIQGGtY3fT/P4PFk0+MqSlVreIEfYWkAKthSPJ0ZyInUSyWizH+/JuaVNJk+f//f3hSxqIOLjToPMgALGTgrsPCAHqMmenff7fUsubY3IYGPixKUITwGoaikk4cYAlKnJv+/lf88YUxM7W8SRuf04gzDJ8JVJYjkERRbPv/j4Hj/+//IamFjYG5kyaxo0hCOYwpRY312CSGntj/j0ysHOtmdVY8Qnb7oItBZMeRxmbk//f7ZyKwceAcumoVvPobRh6EBAewaLXhP3kjOa24QQQkwmxk6egAkRqcJDBP/mcAImDpCkQgBgMom/4DYmBFAaorgMUSAwMEMzL+BSr5BxTkBNabeqZ2Tp8BQTlvqFxYe+QAAAAASUVORK5CYII="
                  data-v-008a65cb=""
                />
                Bến Xe Miền Tây
              </p>
              <span>Xe tuyến: 240km - 6 tiếng</span>
            </div>
            {!showChair ? (
              <div
                onClick={onChangeChoose}
                className="route-confirm__item__bottom--right"
              >
                <img
                  alt="checkbox"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAtFBMVEUAAAAAgICAgL+Upa2Pl5+bo6uVoKuWoKqfqLGWn6mapK2Zo62dpq+apa6dp7Cep6+ep7CbprCdp7Ccpa+cpq+bpq6ep7Gcpq+dp7Ccp7Cbpq+dprD////+///+/v76+vv6+vr4+fn29/f19vfx8vTs7vDr7e/i5efa3uHa3eDV2d3U2d3S1tvM0ta7wsixucCvt76psrqmrregqrKgqbKfqLKeqLGdp7CdprCcpq+bpa+bpa4Vzj1GAAAAHHRSTlMAAgQfID1GS1JoeX2Mp7m6v8zT4uPk7vP4+/v86VxdYgAAAX1JREFUeNqVldmSgjAQRaO44bjhrpNBZWBAQSBsmab//7/GoqgpXJDkPJ+HTtK5lzygdNXxfL3drudjtauQd/SnC8g45Ig58OxzOenXme2elgImLPCvN/yAJQip1mu/cjuzPUd2sQydFujGz4Uh3886z+5gAxg6tDRLn55DhM3gQW2NdhB7R/rEyYthN2rduUPAyKYvsSP8/ajaI4DApDWYAcCoMu8OgwOt5RDg7n/uzgYik77BjGDTKe93BrFN32LHMGsXcm+PHm3Aw32vkDUeHpvkY8i1Yh9SdGgjDqb9mzwF1ux+UQZTQpQVurQZ/YILhXQhsagAVgJdombMEJG/WaaSMQ90EVkP+JjMwadC+DAn6/wqJl/zNdmiqIxbKVlqDKkDSl2d8KMYLFOlnlt0kaiLS6Vc0WYYTISX/4xpX/RbnUKuSX1YqSiQCRmZ+JIJRvHIhWFLKMyPZZi/rIkHnKIm6grIrRSQ5ZYFJFFt9aW5qpQmrKb3pSlVx3/OLLyF52G6QAAAAABJRU5ErkJggg=="
                  width="22"
                  height="22"
                  data-v-008a65cb=""
                ></img>
                <p>Chọn</p>
              </div>
            ) : (
              <div
                onClick={onChangeChoose}
                className="route-confirm__item__bottom--right"
              >
                <img
                  alt="checkbox"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAFgAAAAAcITNaAAACSUlEQVQ4EbWVP2gUQRTGvzc7MedtzGljYWIhQoQYLTQSFQKKtSYgNkZFxE4sLERJQGOnpLCzUBQRsbGIsRJsbBW7gIUERZIcIv65i3fH5XK7z3kjs+xddol3kmlm5s17v5n3duZbQkornN6zhauVESKMgLmfibaJKzHnQfSBGTOUyc5sfjb7KwlBzUY+fyRTXFq4whReAyPXvN4wJxSJ1Z1cd+9devymGl9rAFdO9fXUwuAFMw/GndYaE9H7DcobzT7/uOh8I7BAl8PgrUm7xy221BMtdipvyMGVBEv6ctK2oRbCf7M1LJlasK1pi+lLcHOTEgpL7GS//nL585ofqpmSNpcP2unvUHKl2oF6u/Yhe3nK5Ow1bmFukjC13FNzJ1tqXv8BdI0/RPg9nxgnTCWXP3E1xah3D6Fr4pGFlm6OAWGw2tMwlXtR8VU9eAwdwyfiJjvWA4fgT5iTfptH6cYYuPhjlY8YhKmTVvTAQWSOX0DF70bt1VProvcehn/9AcKvX1CaPANe+pkUGtm0vH1T4r7IYgbVJ7ehtvZi48VJIKibEy4Y6H2E+U8Gehb8O1EeIoQwqXBy57S5f6OR1Q10B/yr96D3HwXqNQTzcyjfOgcuFZxHak+gaSUqlehRX0F56hJW3r1GMDeLsqT/D1BhmQq8XL8HInoq0pd46jaMwhKm1Qqrp0b62uA0hIh8CkuM6yubsoPoqOip7CrzVprExLVYYm0pHETguU3bhwlq3ORSdPbUXpTM+EqME3jnG5XCGVz/vz/TPwESC7rVdcaIAAAAAElFTkSuQmCC"
                  width="22"
                  height="22"
                  data-v-008a65cb=""
                ></img>
                <p>Chọn</p>
              </div>
            )}
          </div>
          <div className="route-chair">
            {showChair && (
              <>
                <Typography.Title level={5}>Danh sách ghế</Typography.Title>
                <div className="route-chair__list">
                  {dtLsChair.length > 0 &&
                    dtLsChair.map((item) => {
                      return (
                        <div
                          key={item.id}
                          onClick={handleSelectedTicket(item)}
                          className={item.chosedTicket ? `route-chair__list--chose` : `route-chair__list--empty`}>
                          {item.name}
                        </div>
                      );
                    })}
                </div>
                <div className="route-chair__note">
                  <div className="route-chair__note__item">
                    <span className="route-chair__note__item--empty"></span>
                    <p>Trống</p>
                  </div>
                  <div className="route-chair__note__item">
                    <span className="route-chair__note__item--choosing"></span>
                    <p>Đang chọn</p>
                  </div>
                  <div className="route-chair__note__item">
                    <span className="route-chair__note__item--chose"></span>
                    <p>Đã đặt</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteConfirmation;
