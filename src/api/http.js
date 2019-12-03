import axios from "axios";
import qs from "qs";

export default class Api {
  constructor() {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "http://api.avatardata.cn"
        : "/api";
    axios.defaults.baseURL = baseUrl;
    axios.defaults.withCredentials = true;
    this._interceptors;
  }
  _interceptors() {
    // 添加请求拦截器
    axios.interceptors.request.use(
      function(config) {
        // 在发送请求之前做些什么
        return config;
      },
      function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    axios.interceptors.response.use(
      function(response) {
        // 对响应数据做点什么
        return response;
      },
      function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );
  }
  searchDream(data) {
    data = qs.stringify(data);
    return axios.post("/ZhouGongJieMeng/LookUp", data);
  }
}
