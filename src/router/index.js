import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { basicRoutes } from './routes'

const isHash = false

export const router = createRouter({
  history: isHash ? createWebHashHistory('/') : createWebHistory('/'),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app) {
  app.use(router)
}