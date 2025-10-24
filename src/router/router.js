// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Home     from '../pages/Home.vue'
import Messages from '../pages/messages.vue'
import Calendar from '../pages/calendar.vue'

const routes = [
  { path: '/',          component: Home     },
  { path: '/messages',  component: Messages },
  {
    path: '/calendar',
    component: Calendar,
  },
  // fallback for any other paths → Home
  { path: '/:pathMatch(.*)*', component: Home }
]

export default createRouter({
  // ← use hash history so server always serves the root page
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})
