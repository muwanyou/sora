import type { RouteRecordRaw } from 'vue-router'
import { homePath } from '@/configs/path'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    redirect: homePath,
    component: () => import('@/layouts/default/index.vue'),
    meta: {
      code: 'root',
    },
    children: [
      {
        path: homePath,
        name: 'home',
        component: () => import('@/pages/home.vue'),
        meta: {
          code: 'home',
          title: '首页',
        },
      },
    ],
  },
]
