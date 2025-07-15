import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Messages from '../pages/messages.vue'

const BASE = '/San-Antonio-for-christ-church/'

const routes = [
  { path: '/', component: Home },
  { path: '/messages', component: Messages },
  // others…
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router
