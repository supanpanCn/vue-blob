import axios from "axios";

axios.defaults.timeout = 10000000;

axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  (config) => {
    config.headers = Object.assign(config.headers,{
      // 配置header
    })
    return config;
  },
  (error) => {
    // 处理错误
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // 统一拦截验证
    return response;
  },
  (error) => {
    // 处理错误
    return Promise.reject(error);
  }
);

export default axios;