import NProgress from 'nprogress'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { basePath } from '@/configs/path'
import { routerMode } from '@/configs/router'
import { constantRoutes } from './modules/constant'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: routerMode === 'history' ? createWebHistory(basePath) : createWebHashHistory(basePath),
  routes: constantRoutes,
})
router.beforeEach((to, from, next) => {
  NProgress.configure({ showSpinner: false })
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
