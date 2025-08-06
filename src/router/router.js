// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Messages from '../pages/messages.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',          component: Home    },
    { path: '/messages',  component: Messages },
    // catch-all sends everything else back to Home
    { path: '/:pathMatch(.*)*', component: Home }
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

