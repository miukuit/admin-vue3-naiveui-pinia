const Layout = () => import('@/layout/index.vue')

export const basicRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
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