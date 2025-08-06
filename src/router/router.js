import { createRouter, createWebHashHistory } from 'vue-router'
import Home     from '../pages/Home.vue'
import Messages from '../pages/messages.vue'

const routes = [
  { path: '/',         component: Home     },
  { path: '/messages', component: Messages },
  // …
]

const router = createRouter({
  // ← use hash mode so GH-Pages always loads your SPA shell
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router
