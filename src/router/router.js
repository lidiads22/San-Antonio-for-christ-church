// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home     from '../pages/Home.vue'
import Messages from '../pages/messages.vue'

const routes = [
  { path: '/',         component: Home     },
  { path: '/messages', component: Messages },
  { path: '/:pathMatch(.*)*', component: Home }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})
