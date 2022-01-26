import {
  createRouter,
  // createWebHistory,
  createWebHashHistory } from 'vue-router'
import liveRouter from '@/views/live/router.js'
import promotionRouter from '@/views/promotion/router.js'
import frameWorkRouter from '@/views/frame-work/router.js'
import mallRouter from '@/views/mall/router.js'
import meRouter from '@/views/me/router.js'
import testRouter from './testRouter.js'

const routes = [
  ...liveRouter,
  ...promotionRouter,
  ...frameWorkRouter,
  ...mallRouter,
  ...meRouter,
  ...testRouter,
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
