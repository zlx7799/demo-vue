/*
 * @Description: 
 * @Author: zhoulx
 * @Date: 2021-03-30 18:04:06
 * @LastEditors: zhoulx
 * @LastEditTime: 2021-10-15 14:51:59
 */
import axios from 'axios';
import qs from 'qs';

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 30000, // request timeout
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  paramsSerializer(params) {
    return qs.stringify(params);
  },
});

// request interceptor
service.interceptors.request.use(
  config => config,
  error => {
    // do something with request error
    Toast.fail(error);
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  /**
   * Determine the request status by custom err
   * Here is just an example
   * You can also judge the status by HTTP Status err
   */
  response => {
    const res = response.data;
    // if the custom err is not 0, it is judged as an error.
    // < 0 ：未登录
    if (res.err && res.err < 0) {
    } else if (res.err && res.err !== 0) {
      Toast.fail(res.msg);
      return Promise.reject(res);
    } else {
      return res;
    }
  },
  error => {
    return Promise.reject(error);
  },
);

export const Request = {
  /**
   *
   * @param {String} url
   * @param {Any} data
   * @param {String} isForm
   * @param {Any} config
   *
   *
   */
  post(url, data, isForm, config = {}) {
    if (isForm === 'FORM') {
      const formHeaders = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      };
      const transformRequest = data =>
        qs.stringify(data, {
          encode: false,
          allowDots: true,
          arrayFormat: 'indices',
        });
      config.transformRequest = config.transformRequest
        ? [transformRequest, ...config.transformRequest]
        : [transformRequest];

      config = { headers: formHeaders, ...config };
    }
    return service.post(url, data, config);
  },
  /**
   *
   * @param {String} url
   * @param {Object} params
   */
  get(url, data, config) {
    const params = {
      ...data,
    };
    return service.get(url, { params }, config);
  },
};
