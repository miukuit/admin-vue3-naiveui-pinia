import { defineStore } from 'pinia'

export const usePermissionStore = defineStore('permission', {
  state() {
    return {
      accessRoutes: [], // 权限路由
    }
  }
})