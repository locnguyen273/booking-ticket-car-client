import { API_URL_DOMAIN } from "../../utils/constant";
import { BaseApi } from "../baseServices";

const GetAllBusInfo = () => {
  return BaseApi.get(API_URL_DOMAIN + "/schedule");
}

export const ManageBusInfoServices = {
  GetAllBusInfo,
}
