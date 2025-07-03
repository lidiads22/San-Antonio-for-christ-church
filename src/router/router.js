import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Messages from '../pages/messages.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/messages', component: Messages }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
