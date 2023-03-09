import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state() {
    return {
      userInfo: {}, // 侧边栏
    }
  },
  getters: {
    name() {
      return this.userInfo?.name
    },
    avatar() {
      return this.userInfo?.avatar
    },
  },
  actions: {
    setUserInfo(userInfo = {}) {
      this.userInfo = { ...this.userInfo, ...userInfo }
    },
  }
})