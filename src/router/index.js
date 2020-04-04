import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/grid',
    name: 'Grid',
    component: () => import(/* webpackChunkName: "grid" */ '../views/Grid.vue')
  },
  {
    path: '/button-cards',
    name: 'Button-cards',
    component: () => import(/* webpackChunkName: "button-cards" */ '../views/Button-cards.vue')
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue')
  },
  {
    path: '/vuelidate',
    name: 'Vuelidate',
    component: () => import(/* webpackChunkName: "vuelidate" */ '../views/Vuelidate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
