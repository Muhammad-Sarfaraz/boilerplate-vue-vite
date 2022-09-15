import { createRouter, createWebHistory } from 'vue-router'

import Home from './App.vue'
import App from './App.vue'

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/about',
    name: 'About',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default routes
