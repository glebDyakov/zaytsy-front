import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import HareDetail from '../views/HareDetail.vue'
import StartStory from "@/components/StartStory/StartStory.vue";
import News from '../views/News.vue'
import NewsDetail from '../views/NewsDetail.vue'
import Page404 from '../views/Page404.vue'
import History from '../views/History.vue'
import App from '../views/App.vue'
import Partners from '../views/Partners.vue'
import Souvenirs from '../views/Souvenirs.vue'

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
    },
    {
      path: '/start-story',
      name: 'StartStory',
      component: StartStory
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/news/:id',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404
    },
    {
      path: '/app',
      name: 'App',
      component: App
    },
    {
      path: '/partners',
      name: 'Partners',
      component: Partners
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/souvenirs',
      name: 'Souvenirs',
      component: Souvenirs
    }
  ]
})

export default router
