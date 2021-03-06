import axios from 'axios';
// import Toast from 'vant/lib/toast';
// import { store } from '@/store';
// import router from '../router';

const service = axios.create({
  baseURL: '/api', // 统一增加前缀接口路径
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  withCredentials: false,
});

service.interceptors.request.use((config) => {
  // if (store.state.token) {
  //   config.headers['token'] = store.state.token;
  // }
  return config;
});

service.interceptors.response.use((response) => {
  const { data } = response;
  if (data.status == 200) {
    // Toast.clear();
    return data;
  } else if (data.status == 403) {
    // go login
    // Toast({
    //   message: '去登录',
    //   onClose() {
    //     router.push({ path: '/me/login' });
    //   },
    // });
  } else {
    // error
    // Toast(data.msg);
    return Promise.reject(new Error(data.msg || 'Error'));
  }
});

export default service;

// 接口模拟数据地址
// http://rap2.taobao.org/repository/editor?id=297723&itf=2190888
