import axios from "axios";
import { getStringLocal } from "./config";
import { API_URL_DOMAIN, USER_LOGIN } from "./constant";

export const http = axios.create({
  baseURL: API_URL_DOMAIN,
  timeout: 10000
})

// interceptor => can thiệp một hàm middleware vào request và response khi gọi api
http.interceptors.request.use((config) => {
  const token = getStringLocal(USER_LOGIN);

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    }
  }
}, err => { console.log(err) })