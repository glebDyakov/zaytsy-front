import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import HareDetail from '../views/HareDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: MainView
    },
    {
      path: '/hare',
      name: 'HareDetail',
      component: HareDetail
    }
  ]
})

export default router
