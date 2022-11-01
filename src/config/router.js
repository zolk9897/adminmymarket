import { createRouter, createWebHistory } from 'vue-router'
import main from '@/views/router.js'

export function setupRouter() {
  const routes = [
    {
      path: '/',
      name: 'main',
      component: () => import('@/layouts/default.vue'),
      children: main,
    },
  ]

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })

  router.beforeEach((to) => {
    document.title = to.meta.title || 'mymarket - Admin'
  })

  return router
}
