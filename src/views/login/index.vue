<template>
  <div class="login-container">
    <div class="login-box">
      <div class="left">
        <div class="img-box">
          <img :src="illustrationImg" class="illustration-img" alt="插画">
        </div>
      </div>
      <div class="right">
        <div class="right-box">
          <h1 class="title">后台管理系统</h1>
          <n-form ref="formRef" :model="formData" :rules="formRules" :show-label="false">
            <n-form-item path="userName" label="用户名">
              <n-input v-model:value="formData.userName" placeholder="请输入用户名"
                clearable :disabled="loginLoading"
                @keydown.enter.prevent="loginConfirm"
              >
                <template #prefix>
                  <app-icon icon="ant-design:user-outlined" />
                </template>
              </n-input>
            </n-form-item>
            <n-form-item path="password" label="密码">
              <n-input v-model:value="formData.password" type="password" placeholder="请输入密码"
                clearable show-password-on="mousedown" :disabled="loginLoading"
                @keydown.enter.prevent="loginConfirm"
              >
                <template #prefix>
                  <app-icon icon="ant-design:lock-outlined" />
                </template>
              </n-input>
            </n-form-item>
            <n-form-item path="verifyCode" label="验证码" class="code-form-item">
              <n-input v-model:value="formData.verifyCode" placeholder="请输入验证码"
                clearable :disabled="loginLoading"
                @keydown.enter.prevent="loginConfirm"
              >
                <template #prefix>
                  <app-icon icon="ant-design:key-outlined" />
                </template>
              </n-input>
              <n-image :src="verifyCodeImg" class="code-img" alt="验证码" />
            </n-form-item>
            <n-form-item>
              <n-button type="info" round @click="loginConfirm" :disabled="loginLoading" :loading="loginLoading">登 录</n-button>
            </n-form-item>
          </n-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store'
import { throttle } from '@/utils'
import { addDynamicRoutes } from '@/router'
import illustrationImg  from '@/assets/img/work.svg'

const router = useRouter()
// const route = useRoute()
const userStore = useUserStore()

const formRef = ref()
const formRules = {
  userName: [
    { required: true, message: '请输入用户名', trigger: ['blur'] }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: ['blur'] }
  ],
  verifyCode: [
    { required: true, message: '请输入验证码', trigger: ['blur'] }
  ]
}

const formData = ref({
  userName: '',
  password: '',
  verifyCode: ''
})
const verifyCodeImg = ref('') // 验证码图片
const loginLoading = ref(false)

// 登录 + 节流
const loginConfirm = throttle(e => {
  e.preventDefault()
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      try {
        $message.loading('登录验证中...')
        loginLoading.value = true
        let { userName, password, verifyCode } = formData.value
        const params = {
          userName,
          password,
          verifyCode
        }
        const { code, data, message } = await userStore.userLogin(params)
        $message.destroyAll()
        // 设置token
        // if (code === 0) {
        if (true) {
          await addDynamicRoutes() // 添加动态路由
          $message.success('登录成功')
          router.replace('/');
        } else {
          $message.info(message || '登录失败')
        }
      } catch (error) {
        console.error(error)
      } finally {
        loginLoading.value = false
      }
    } else {
      $message.error('请填写完整信息，并进行验证码校验')
    }
  })
})
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  background: linear-gradient(
    calc(333deg),
    rgba(163, 163, 163, 0.09) 0%,
    rgba(163, 163, 163, 0.09) 33.3%,
    rgba(100, 100, 100, 0.09) 33.3%,
    rgba(100, 100, 100, 0.09) 66.6%,
    rgba(162, 162, 162, 0.09) 66.6%,
    rgba(162, 162, 162, 0.09) 99%
  ),
  linear-gradient(
    calc(539deg),
    rgba(193, 193, 193, 0.06) 0%,
    rgba(193, 193, 193, 0.06) 33.3%,
    rgba(169, 169, 169, 0.06) 33.3%,
    rgba(169, 169, 169, 0.06) 66.6%,
    rgba(92, 92, 92, 0.06) 66.6%,
    rgba(92, 92, 92, 0.06) 99%
  ),
  linear-gradient(
    calc(410deg),
    rgba(45, 45, 45, 0.03) 0%,
    rgba(45, 45, 45, 0.03) 33.3%,
    rgba(223, 223, 223, 0.03) 33.3%,
    rgba(223, 223, 223, 0.03) 66.6%,
    rgba(173, 173, 173, 0.03) 66.6%,
    rgba(173, 173, 173, 0.03) 99%
  ),
  linear-gradient(
    calc(561deg),
    rgba(226, 226, 226, 0.06) 0%,
    rgba(226, 226, 226, 0.06) 33.3%,
    rgba(81, 81, 81, 0.06) 33.3%,
    rgba(81, 81, 81, 0.06) 66.6%,
    rgba(186, 186, 186, 0.06) 66.6%,
    rgba(186, 186, 186, 0.06) 99%
  ),
  linear-gradient(
    calc(366deg),
    rgba(225, 225, 225, 0.04) 0%,
    rgba(225, 225, 225, 0.04) 33.3%,
    rgba(95, 95, 95, 0.04) 33.3%,
    rgba(95, 95, 95, 0.04) 66.6%,
    rgba(39, 39, 39, 0.04) 66.6%,
    rgba(39, 39, 39, 0.04) 99%
  ),
  linear-gradient(
    calc(409deg),
    rgba(184, 184, 184, 0.06) 0%,
    rgba(184, 184, 184, 0.06) 33.3%,
    rgba(0, 0, 0, 0.06) 33.3%,
    rgba(0, 0, 0, 0.06) 66.6%,
    rgba(140, 140, 140, 0.06) 66.6%,
    rgba(140, 140, 140, 0.06) 99.9%
  ),
  linear-gradient(
    calc(604deg),
    rgba(40, 40, 40, 0.07) 0%,
    rgba(40, 40, 40, 0.07) 33.3%,
    rgba(214, 214, 214, 0.07) 33.3%,
    rgba(214, 214, 214, 0.07) 66.6%,
    rgba(190, 190, 190, 0.07) 66.6%,
    rgba(190, 190, 190, 0.07) 99.9%
  ),
  linear-gradient(
    calc(342deg),
    rgba(230, 230, 230, 0) 0%,
    rgba(230, 230, 230, 0) 33.3%,
    rgba(241, 241, 241, 0) 33.3%,
    rgba(241, 241, 241, 0) 66.6%,
    rgba(55, 55, 55, 0) 66.6%,
    rgba(55, 55, 55, 0) 99%
  ),
  linear-gradient(
    calc(80deg),
    rgb(24, 82, 190),
    rgb(64, 157, 254)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  .login-box {
    height: 400px;
    // width: 460px;
    border-radius: 15px;
    background-color: rgb(255, 255, 255);
    display: flex;
    .left {
      display: none;
      height: 100%;
      .img-box {
        width: 360px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .illustration-img {
          width: 280px;
          height: 280px;
        }
      }
    }
    .right {
      width: 420px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .right-box {
        width: 300px;
        .title {
          margin-bottom: 20px;
          text-align: center;
        }
        .n-form {
          .code-form-item {
            .n-form-item-blank {
              .code-img {
                width: 160px;
                height: 34px;
                margin-left: 15px;
                border: 1px solid #E0E0E6;
                border-radius: 3px;
                overflow: hidden;
              }
            }
          }
          .n-button {
            width: 100%;
          }
        }
      }
    }
  }
}
/* 超小屏幕（手机，小于 768px） */
/* 小屏幕（平板，大于等于 768px） */
@media (min-width: 768px) {
  .login-container {}
}

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 992px) {
  .login-container {
    .login-box {
      .left {
        display: block;
      }
    }
  }
}
/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: 1200px) {}
</style>