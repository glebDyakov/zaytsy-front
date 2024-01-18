import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import HareDetail from '../views/HareDetail.vue'
import StartStory from "@/components/StartStory/StartStory.vue";
import News from '../views/News.vue'
import NewsDetail from '../views/NewsDetail.vue'
import Partners from '../views/Partners.vue'

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
      path: '/partners',
      name: 'Partners',
      component: Partners
    }
  ]
})

export default router
