import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { basicRoutes, NOT_FOUND_ROUTE, EMPTY_ROUTE } from './routes'

import { useUserStore, usePermissionStore } from '@/store'
import { isNullOrWhitespace } from '@/utils'


const isHash = false

export const router = createRouter({
  history: isHash ? createWebHashHistory('/') : createWebHistory('/'),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app) {
  await addDynamicRoutes() // 添加动态路由
  app.use(router)
}

// 添加动态路由
export async function addDynamicRoutes() {
  // const token = getToken() 
  const token = null
  // 没有token的情况
  if (isNullOrWhitespace(token)) {
    router.addRoute(EMPTY_ROUTE)
    return
  }

  // 有token的情况
  try {
    const userStore = useUserStore()

    const permissionStore = usePermissionStore()

    router.addRoute(NOT_FOUND_ROUTE)
  } catch (error) {
    console.error(error)
  }

}
export function getRouteNames(routes) {
  return routes.map((route) => getRouteName(route)).flat(1)
}

function getRouteName(route) {
  const names = [route.name]
  if (route.children && route.children.length) {
    names.push(...route.children.map((item) => getRouteName(item)).flat(1))
  }
  return names
}

export default router