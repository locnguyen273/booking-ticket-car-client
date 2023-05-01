import { API_URL_DOMAIN } from "../../utils/constant";
import { BaseApi } from "../baseServices";

const GetListUsers = () => {
  return BaseApi.get(API_URL_DOMAIN + "/user");
};

export const ManageUserServices = {
  GetListUsers,
}