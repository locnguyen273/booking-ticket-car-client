import { API_URL_DOMAIN } from "../../utils/constant";
import { BaseApi } from "../baseServices";

const GetListTickets = () => {
  return BaseApi.get(API_URL_DOMAIN + "/ticket");
}

const GetOneTicketById = (ticketId) => {
  return BaseApi.get(API_URL_DOMAIN + `/ticket/${ticketId}`);
}

export const ManageTicketServices = {
  GetListTickets,
  GetOneTicketById,
}
