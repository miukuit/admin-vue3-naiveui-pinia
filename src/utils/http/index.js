import axios from 'axios'
import { resResolve, resReject, reqResolve, reqReject } from './interceptors'

import config from '@/config'

export function createAxios(options = {}) {
  const defaultOptions = {
    baseURL: config.baseApi,
    timeout: 12000,
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(resResolve, resReject)
  return service
}

export const defAxios = createAxios()

export const testAxios = createAxios({
  baseURL: config.testApi,
})