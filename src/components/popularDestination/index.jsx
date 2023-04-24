import React from "react";
import { Typography } from "antd";
import Slider from "react-slick";
import "./style.scss";

const PopularDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };
  return (
    <div className="pop-des">
      <Typography.Title level={5} className="pop-des__title">
        ĐIỂM ĐẾN PHỔ BIẾN
      </Typography.Title>
      <p className="pop-des__intro">
        Gợi ý những điểm du lịch được ưa thích trong năm
      </p>

      <div className="pop-des__list">
        <Slider {...settings}>
          <div 
            className="pop-des__item" 
            style={{ backgroundImage: `url("https://futabus.vn/_nuxt/img/commonDest_item10.fe3a059.png")` }}>
            <div className="pop-des__item__content">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                TP. Hồ Chí Minh
              </p>
              <Typography.Title level={5} className="">
                Sài Gòn
              </Typography.Title>
            </div>
          </div>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PopularDestination;
