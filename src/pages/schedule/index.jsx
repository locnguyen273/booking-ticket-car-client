import React from "react";
import SlickSwiper from "./../../components/slickSwiper/index";
import "./style.scss";
import { Select, Button } from "antd";

const Schedule = () => {
  return (
    <div className="schedule">
      <SlickSwiper />
      <div className="schedule__filter">
        <div className="schedule__filter__control">
          <p>Điểm đi</p>
          <Select
            showSearch
            className="schedule__filter__control--select"
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Not Identified",
              },
              {
                value: "2",
                label: "Closed",
              },
              {
                value: "3",
                label: "Communicated",
              },
              {
                value: "4",
                label: "Identified",
              },
              {
                value: "5",
                label: "Resolved",
              },
              {
                value: "6",
                label: "Cancelled",
              },
            ]}
          />
        </div>
        <div className="schedule__filter__control">
          <p>Điểm đến</p>
          <Select
            showSearch
            className="schedule__filter__control--select"
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Not Identified",
              },
              {
                value: "2",
                label: "Closed",
              },
              {
                value: "3",
                label: "Communicated",
              },
              {
                value: "4",
                label: "Identified",
              },
              {
                value: "5",
                label: "Resolved",
              },
              {
                value: "6",
                label: "Cancelled",
              },
            ]}
          />
        </div>
        <Button className="schedule__filter__btn-search">
          <i className="fas fa-search"></i>
          Tìm kiếm
        </Button>
      </div>
      Schedule
    </div>
  );
};

export default Schedule;
