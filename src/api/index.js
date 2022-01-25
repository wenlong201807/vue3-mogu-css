import request from '@/utils/request'
/**
 * 接口测试
 */
export const getUsers = () => request({
  url: '/users',
  method: 'get'
});