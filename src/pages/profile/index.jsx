import React, { useState } from "react";
import "./style.scss";
import { Typography, Input, Button } from "antd";
import { useSelector } from "react-redux";

const Profile = () => {
  const userProfile = useSelector((state) => state.UserReducer.userProfile);
  const [profile, setProfile] = useState(userProfile);
  console.log("profile: ", profile);

  const handleChangeProfile = (event) => {
    const name = event.target.name;
    setProfile((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  return (
    <div className="profile">
      <Typography.Title level={4} className="profile__title">
        Thông tin cá nhân
      </Typography.Title>
      <div className="profile__form">
        <div className="profile__form__item">
          <p>Họ và tên:</p>
          <Input
            placeholder={profile.name}
            name="name"
            value={profile.name}
            onChange={handleChangeProfile}
          />
        </div>
        <div className="profile__form__item">
          <p>Email:</p>
          <Input
            placeholder={profile.email}
            name="email"
            value={profile.email}
            onChange={handleChangeProfile}
          />
        </div>
        <div className="profile__form__item">
          <p>Số điện thoại:</p>
          <Input
            placeholder={profile.phoneNumber}
            name="phoneNumber"
            value={profile.phoneNumber}
            onChange={handleChangeProfile}
          />
        </div>
        <div className="profile__form__item">
          <p>Quận/ Huyện:</p>
          <Input
            placeholder={profile.district}
            name="district"
            value={profile.district}
            onChange={handleChangeProfile}
          />
        </div>
        <div className="profile__form__item">
          <p>Địa chỉ:</p>
          <Input
            placeholder={profile.city}
            name="city"
            value={profile.city}
            onChange={handleChangeProfile}
          />
        </div>
        <Button className="profile__form__btn-update">
          Cập nhật thông tin
        </Button>
      </div>
    </div>
  );
};

export default Profile;
