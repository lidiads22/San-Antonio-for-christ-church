import { createRouter, createWebHistory } from 'vue-router'
import Home from './App.vue'
import PlanYourVisit from './pages/planYourVisit.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/plan-your-visit', component: PlanYourVisit }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router