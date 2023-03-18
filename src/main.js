import '@/styles/reset.css'

import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from '@/router'
import { setupStore  } from '@/store'

const app = createApp(App)

// 挂载状态管理
setupStore(app)

// 挂载路由
setupRouter(app)

// 路由准备就绪后挂载 APP 实例
await router.isReady()

app.mount('#app', true)
