const Layout = () => import('@/layout/index.vue')


export const basicRoutes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        name: 'Home',
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', icon: '', },
      }
    ]
  }
]