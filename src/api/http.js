import $http from "axios";
import qs from "qs";
import keys from "./key";
import Vue from "vue";

export default class Api {
  constructor() {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "http://api.avatardata.cn"
        : "/api";
    $http.defaults.baseURL = baseUrl;
    $http.defaults.withCredentials = true;
    this._interceptors;
  }
  _interceptors() {
    // 添加请求拦截器
    $http.interceptors.request.use(
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
    $http.interceptors.response.use(
      function(response) {
        console.log("~~~~~~~~", response.data.err_code);
        if (response.data.err_code === 0) {
          // 请求参数错误
          Vue.prototype.$toast({
            message: "请求参数错误~！"
          });
        }
        return response.data;
      },
      function(error) {
        // 对响应错误做点什么
        Vue.prototype.$toast({
          message: error || "未知错误"
        });
        return Promise.reject(error);
      }
    );
  }
  // 解梦
  searchDream(data) {
    data = qs.stringify(data);
    return $http.post("/ZhouGongJieMeng/LookUp", data);
  }
  // 辞海
  searchCihai(data) {
    data.key = keys.cihai;
    data = qs.stringify(data);
    return $http.post("/CiHai/LookUp", data);
  }
  // 乌云漏洞 =>>等待认领
  getWbugForWait(data) {
    data.key = keys.wbug;
    return $http.post("/WooYun/Unclaim", data);
  }
}
