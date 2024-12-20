import { createRouter, createWebHashHistory } from 'vue-router'

import TheHome from '@/pages/TheHome.vue'
import TheAbout from '@/pages/TheAbout.vue'
import TheNotFound from '@/pages/TheNotFound.vue'

const ROOT_PATH = '/'

const routerHistory = createWebHashHistory()

const routes = [
    {
      path: ROOT_PATH,
      name: 'home',
      component: TheHome
    },
    {
      path: `${ROOT_PATH}about`,
      name: 'about',
      component: TheAbout
    },
    {
      path: '/:CatchAll(.*)*',
      name: '404',
      component: TheNotFound
    }
]

const router = createRouter({
  history: routerHistory,
  routes
});

export default router
