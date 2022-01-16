import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/Today',
    name: 'Today',
    component: () => import('../views/Today.vue')
  },
  {
    path: '/Week',
    name: 'Week',
    component: () => import('../views/Week.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
