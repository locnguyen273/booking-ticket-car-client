/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Select } from "antd";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { GetListResumesAction, GetDetailResumeAction } from "./../../../redux/reducers/admin/manageCareerReducer";

const ManageResume = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(GetListResumesAction());
  // }, []);

  const listResumes = useSelector(state => state.ManageCareerReducer.listResume);
  const [listResumesFilter, setListResumesFilter] = useState([]);
  useEffect(() => {
    console.log("listResumes", listResumes);
    listResumes.forEach(item => {
      setListResumesFilter((prev) => [...prev, item]);
    })
  }, []);
  const handleChange = (value) => {
    const filtered = listResumes.filter(item => item.status === value);
    setListResumesFilter(filtered);
  };

  return (
    <div className="manage-cv">
      <div className="manage-cv__top">
        <p>Lọc theo:</p>
        <Select
          defaultValue="New"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            { value: "New", label: "New" },
            { value: "Approved", label: "Approved" },
            { value: "Rejected", label: "Rejected" },
          ]}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Vị trí tuyển dụng</th>
            <th>Nơi làm việc</th>
            <th>Họ và tên</th>
            <th>Ngày nộp</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {listResumesFilter.length > 0 ? listResumesFilter.map(item => {
            return <tr key={item.id} className={item.status === "Rejected" ? "manage-cv__rejected" : item.status === "Approved" ? "manage-cv__approved" : ""}>
              <td>{item.career.name}</td>
              <td>{item.career.workspace}</td>
              <td>{item.fullName}</td>
              <td>{Date(item.created_at).slice(0,21)}</td>
              <td><Button onClick={() => {
                dispatch(GetDetailResumeAction(item.id))
              }}>Xem chi tiết</Button></td>
            </tr>
          }) : <p>Không tìm thấy dữ liệu</p>}
        </tbody>
      </table>
    </div>
  );
};

export default ManageResume;
