const Layout = () => import('@/layout/index.vue')

export const basicRoutes = [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录页' },
    isHidden: true,
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/welcome',
    children: [
      {
        name: 'Welcome',
        path: 'welcome',
        component: () => import('@/views/welcome/index.vue'),
        meta: { title: '欢迎页', icon: '', },
      }
    ]
  }
]


export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}

export const EMPTY_ROUTE = {
  name: 'Empty',
  path: '/:pathMatch(.*)*',
  component: null,
}