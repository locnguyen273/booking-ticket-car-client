import React from "react";
import { Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GetListResumesAction } from './../../../redux/reducers/admin/manageCareerReducer';

const ViewDetailResume = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <Typography.Title level={5} className="car-detail__title">
        Hồ Sơ Chi Tiết
      </Typography.Title>
      <div className="view-detail-address__bottom">
        <Button 
          className="view-detail-address__bottom--back"
          onClick={() => {
            navigate("/admin/manage-resume");
            dispatch(GetListResumesAction());
          }}
        >Quay lại</Button>
        <div className="view-detail-address__group">
          <Button 
            className="view-detail-address__bottom--disabled"
            // onClick={handleDisableAddress}
          >Từ chối</Button>
          <Button 
            className="view-detail-address__bottom--update" 
            // onClick={handleUpdateAddress}
          >Tuyển dụng</Button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailResume;
