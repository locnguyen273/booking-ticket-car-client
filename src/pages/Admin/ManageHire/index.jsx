/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Modal, Input, Select, DatePicker, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetListCareersAction } from "./../../../redux/reducers/admin/manageCareerReducer";
import "./style.scss";
import dayjs from "dayjs";
import {
  CreateNewCareerAction,
  GetDetailCareerAction,
} from "./../../../redux/reducers/admin/manageCareerReducer";
import moment from "moment";

const ManageHire = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetListCareersAction());
  }, [dispatch]);

  const listCareers = useSelector(
    (state) => state.ManageCareerReducer.listCareers
  );
  const [listCareerClone, setListCareerClone] = useState([]);
  useEffect(() => {
    setListCareerClone(listCareers.slice(0, 10));
  }, [listCareers]);

  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [careerCreate, setCareerCreate] = useState({
    name: "",
    quantity: "",
    salary: "",
    workspace: "",
    welfare: "",
    description: "",
    requirement: "",
    contact: "",
    include: "",
  });
  const [levelCareer, setLevelCareer] = useState("");
  const [formalityCareer, setFormalityCareer] = useState("");
  const [experienceCareer, setExperienceCareer] = useState("");
  const [deadlineCareer, setDeadlineCareer] = useState("");
  const showModal = () => setOpen(true);
  const handleCancel = () => setOpen(false);

  const handleChangeValueModal = (event) => {
    const name = event.target.name;
    setCareerCreate((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };
  const handleViewDetailCareer = (careerId) => {
    dispatch(GetDetailCareerAction(careerId));
  };

  const handleOk = () => {
    const newDataCreate = {
      name: careerCreate.name,
      level: levelCareer,
      quantity: careerCreate.quantity,
      formality: formalityCareer,
      experience: experienceCareer,
      salary: careerCreate.salary,
      workspace: careerCreate.workspace,
      deadline: deadlineCareer,
      welfare: careerCreate.welfare,
      description: careerCreate.description,
      requirement: careerCreate.description,
      contact: careerCreate.contact,
      include: careerCreate.include,
    };
    dispatch(CreateNewCareerAction(newDataCreate));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleChangeSliceCareerList = (e) => {
    setCurrent(e);
    setListCareerClone(listCareers.slice(10 * (e - 1), e * 10));
  };

  return (
    <div className="manage-hire">
      <div className="manage-hire__top">
        <Button className="manage-hire__top--add" onClick={showModal}>
          Tạo tuyển dụng<i className="fas fa-plus"></i>
        </Button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Vị trí tuyển dụng</th>
            <th>Nơi làm việc</th>
            <th>Hạn nộp</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listCareerClone.length > 0 &&
            listCareerClone.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.workspace}</td>
                  <td>{moment(item.deadline).utc().format("DD/MM/YYYY")}</td>
                  <td>
                    <Button onClick={() => handleViewDetailCareer(item.id)}>
                      Xem chi tiết
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className="bus-info__pagination">
        <Pagination
          current={current}
          total={listCareers.length}
          onChange={handleChangeSliceCareerList}
        />
      </div>

      <Modal
        open={open}
        title="Thêm mới tuyển dụng"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Thêm tuyển dụng mới
          </Button>,
        ]}
      >
        <div className="manage-car__modal">
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Vị trí tuyển dụng:</p>
              <Input
                placeholder=""
                name="name"
                value={careerCreate.name}
                onChange={handleChangeValueModal}
              />
            </div>
            <div className="manage-car__modal__item">
              <p>Lương:</p>
              <Input
                placeholder=""
                name="salary"
                value={careerCreate.salary}
                onChange={handleChangeValueModal}
              />
            </div>
          </div>
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Cấp bậc:</p>
              <Select
                defaultValue={levelCareer}
                className="router-confirm__top--selected"
                onChange={(value) => setLevelCareer(value)}
                options={[
                  { value: "Nhân viên", label: "Nhân viên" },
                  {
                    value: "Trưởng phòng/ Giám sát",
                    label: "Trưởng phòng/ Giám sát",
                  },
                  { value: "Quản lý", label: "Quản lý" },
                  { value: "Phó giám đốc", label: "Phó giám đốc" },
                  { value: "Giám đốc", label: "Giám đốc" },
                  { value: "Phó tổng giám đốc", label: "Phó tổng giám đốc" },
                  { value: "Tổng giám đốc", label: "Tổng giám đốc" },
                  { value: "Chuyên viên", label: "Chuyên viên" },
                ]}
                style={{ width: "100%" }}
              />
            </div>
            <div className="manage-car__modal__item">
              <p>Nơi làm việc:</p>
              <Input
                placeholder=""
                name="workspace"
                value={careerCreate.workspace}
                onChange={handleChangeValueModal}
              />
            </div>
          </div>
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Số lượng tuyển:</p>
              <Input
                placeholder=""
                name="quantity"
                value={careerCreate.quantity}
                onChange={handleChangeValueModal}
              />
            </div>
            <div className="manage-car__modal__item">
              <p>Hạn nộp:</p>
              <DatePicker
                style={{ width: "100%" }}
                defaultValue={dayjs("2023/05/03", "YYYY/MM/DD")}
                onChange={(d, dateString) => {
                  setDeadlineCareer(new Date(dateString).toISOString());
                }}
              />
            </div>
          </div>
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Hình thức:</p>
              <Select
                defaultValue={formalityCareer}
                className="router-confirm__top--selected"
                onChange={(value) => setFormalityCareer(value)}
                options={[
                  {
                    value: "Nhân viên chính thức",
                    label: "Nhân viên chính thức",
                  },
                  { value: "Nhân viên thời vụ", label: "Nhân viên thời vụ" },
                  {
                    value: "Nhân viên bán thời gian",
                    label: "Nhân viên bán thời gian",
                  },
                ]}
                style={{ width: "100%" }}
              />
            </div>
            <div className="manage-car__modal__item">
              <p>Phúc lợi:</p>
              <Input
                placeholder=""
                name="welfare"
                value={careerCreate.welfare}
                onChange={handleChangeValueModal}
              />
            </div>
          </div>
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Kinh nghiệm:</p>
              <Select
                defaultValue={experienceCareer}
                className="router-confirm__top--selected"
                onChange={(value) => setExperienceCareer(value)}
                options={[
                  {
                    value: "Chưa có kinh nghiệm",
                    label: "Chưa có kinh nghiệm",
                  },
                  { value: "0 - 1 năm", label: "0 - 1 năm" },
                  { value: "1- 2 năm", label: "1- 2 năm" },
                  { value: "2 -3 năm", label: "2 -3 năm" },
                  { value: "3- 4 năm", label: "3- 4 năm" },
                  {
                    value: "Trên 5 năm kinh nghiệm",
                    label: "Trên 5 năm kinh nghiệm",
                  },
                  {
                    value: "Trên 10 năm kinh nghiệm",
                    label: "Trên 10 năm kinh nghiệm",
                  },
                ]}
                style={{ width: "100%" }}
              />
            </div>
            <div className="manage-car__modal__item">
              <p>Mô tả công việc:</p>
              <Input
                placeholder=""
                name="description"
                value={careerCreate.description}
                onChange={handleChangeValueModal}
              />
            </div>
          </div>
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Yêu cầu:</p>
              <Input
                placeholder=""
                name="requirement"
                value={careerCreate.requirement}
                onChange={handleChangeValueModal}
              />
            </div>
            <div className="manage-car__modal__item">
              <p>Liên hệ:</p>
              <Input
                placeholder=""
                name="contact"
                value={careerCreate.contact}
                onChange={handleChangeValueModal}
              />
            </div>
          </div>
          <div className="manage-car__modal__row">
            <div className="manage-car__modal__item">
              <p>Hồ sơ bao gồm:</p>
              <Input
                placeholder=""
                name="include"
                value={careerCreate.include}
                onChange={handleChangeValueModal}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ManageHire;
