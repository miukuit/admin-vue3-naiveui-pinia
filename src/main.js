import '@/styles/reset.css'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import App from './App.vue'
import AppIcon from '@/components/app-icon/index.vue'

import { setupRouter } from '@/router'
import { setupStore  } from '@/store'

const app = createApp(App)

// 挂载状态管理
setupStore(app)

// 挂载路由
setupRouter(app)

app
  .component('app-icon', AppIcon)
  .mount('#app', true)
