import { createWebHistory, createRouter } from 'vue-router'

import Ecommerce from "../ecommerce/view/ecommerce.vue"

const routes = [
  { path: '/', component: Ecommerce },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router