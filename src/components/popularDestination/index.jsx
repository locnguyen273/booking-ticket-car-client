import React from "react";
import { Typography } from "antd";
import "./style.scss";

const PopularDestination = () => {
  return (
    <div className="pop-des">
      <Typography.Title level={5} className="pop-des__title">
        ĐIỂM ĐẾN PHỔ BIẾN
      </Typography.Title>
      <p className="pop-des__intro">
        Gợi ý những điểm du lịch được ưa thích trong năm
      </p>
    </div>
  );
};

export default PopularDestination;
