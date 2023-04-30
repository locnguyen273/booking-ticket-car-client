import { createSlice } from "@reduxjs/toolkit";
import { UserServices } from "../../services/userServices";
import { openNotificationWithIcon } from "./../../components/notification/index";
import { history } from "../../utils/history";
import { saveStringLocal } from "../../utils/config";

const initialState = {
  userLogin: {},
  userProfile: {},
  orderHistory: [],
};

const UserReducer = createSlice({
  name: "UserReducer",
  initialState,
  reducers: {
    userLoginReducer: (state, { type, payload }) => {
      state.userLogin = payload;
    },
    userLogoutReducer: (state, { type, payload }) => {
      state.userLogin = payload;
    },
    userProfileReducer: (state, { type, payload }) => {
      state.userProfile = payload;
    },
    userOrderHistory: (state, { type, payload }) => {
      state.orderHistory = payload;
    },
  },
});

export const { 
  userLoginReducer, 
  userLogoutReducer, 
  userProfileReducer,
  userOrderHistory,
} =
  UserReducer.actions;

export default UserReducer.reducer;

//------------ Action Call API For User ---------------//
export const CallApiRegisterUser = async (userInfoRegister) => {
  try {
    await UserServices.RegisterUser(userInfoRegister);
    UserServices.SendEmailRegister(userInfoRegister.email);
    openNotificationWithIcon(
      `success`,
      `Đăng ký thành công. Hãy đăng nhập email để xác nhận!`
    );
    history.push("/login");
  } catch (err) {
    openNotificationWithIcon(`error`, `Đăng ký thất bại. Vui lòng đăng ký lại`);
  }
};

export const CallApiLoginUser = (userInfoLogin) => async (dispatch) => {
  try {
    const result = await UserServices.LoginUser(userInfoLogin);
    await dispatch(userLoginReducer(result.data));
    openNotificationWithIcon(
      `success`,
      `Đăng nhập thành công. Xin chào ${result.data.name} !`
    );
    saveStringLocal("token", result.data.access_token);
    history.push("/");
  } catch (err) {
    openNotificationWithIcon(`error`, `Đăng nhập thất bại. Vui lòng thử lại !`);
  }
};

export const CallApiLogoutUser = () => async (dispatch) => {
  try {
    await dispatch(userLogoutReducer({}));
    history.push("/");
  } catch (err) {
    console.log(err);
  }
};

export const CallApiUserProfileReducer = (userId) => async (dispatch) => {
  try {
    const result = await UserServices.UserProfile(userId);
    await dispatch(userProfileReducer(result.data));
    history.push("/profile");
  } catch (err) {
    console.log(err);
  }
};

export const CallApiForgotPasswordUser = (userUpdate) => async () => {
  try {
    const res = await UserServices.ForgotPasswordUser(userUpdate);
    if (res) {
      openNotificationWithIcon(`success`, `Cập nhật mật khẩu thành công !`);
      history.push("/");
    } else {
      openNotificationWithIcon(
        `error`,
        `Cập nhật mật khẩu thất bại.Vui lòng thử lại sau !`
      );
    }
  } catch (err) {
    openNotificationWithIcon(
      `error`,
      `Cập nhật mật khẩu thất bại.Vui lòng thử lại sau !`
    );
    console.log(err);
  }
};

export const CallApiSendMailForgotPassword = (mail) => async () => {
  try {
    const result = await UserServices.SendMailForgotPassword(mail);
    if(result.status === 200) {
      openNotificationWithIcon(`success`, `Vui lòng kiểm tra email để đặt lại mật khẩu !`);
    }
  } catch (err) {
    openNotificationWithIcon(
      `error`,
      `Email sai hoặc không tồn tại. Vui lòng thử lại sau !`
    );
    console.log(err);
  }
}

export const CallApiGetOrderHistory = () => async (dispatch) => {
  try {
    const result = await UserServices.GetOrderHistory();
    dispatch(userOrderHistory(result.data));
  } catch (err) {
    console.log(err);
  }
}
