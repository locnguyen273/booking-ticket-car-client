import { API_URL_DOMAIN } from "../utils/constant";
import { BaseApi } from "./baseServices";

const RegisterUser = (userInfoRegister) => {
  return BaseApi.post(API_URL_DOMAIN + "/user/register", userInfoRegister);
}
const SendEmailRegister = (mailUser) => {
  return BaseApi.post(API_URL_DOMAIN + "/mailer/register", { to: mailUser });
}

const LoginUser = (userInfoLogin) => {
  return BaseApi.post(API_URL_DOMAIN + "/auth/login", userInfoLogin);
}

const UserProfile = (userId) => {
  return BaseApi.get(API_URL_DOMAIN + `/user/${userId}`);
}

const ForgotPasswordUser = () => {
  return BaseApi.patch(API_URL_DOMAIN + "/user/forgot-password")
}

export const UserServices = {
  RegisterUser,
  SendEmailRegister,
  LoginUser,
  UserProfile,
  ForgotPasswordUser,
}
