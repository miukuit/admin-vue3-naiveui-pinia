
import { defAxios as request } from '@/utils'

// 登录
export function login(data = {}) {
  return request({
    url: '/api/login',
    method: 'get',
    params: data,
  })
}

// 登录退出
export function logout(data = {}) {
  return request({
    url: '/api/logout',
    method: 'get',
    params: data,
  })
}