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
    // 登录
    async userLogin(loginInfo) {
      try {
        let response = {
          ...loginInfo
        }
        return Promise.resolve(response)
      } catch (e) {
        console.log(e)
        return Promise.reject(e)
      }
    },
    // 获取用户信息
    getUserInfo () {

    },
    // 登录
    async userLogout () {

    }
  }
})