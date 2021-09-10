import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/Category')
  },
  {
    path: '/shopcar',
    name: 'Shopcar',
    component: () => import('@/views/Shopcar')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@/views/My')
  }
]

const router = new VueRouter({
  routes
})

export default router
