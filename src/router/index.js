import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Image from "../views/Image"
import Steps from "../views/Steps"
import Card from "../views/Card"
import Backtop from "../views/Backtop"
import Divider from "../views/Divider"

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path : "/image",
    component : Image
  }, {
    path : "/steps",
    component : Steps
  }, {
    path : "/card",
    component : Card
  }, {
    path : "/backtop",
    component : Backtop
  }, {
    path : "/divider",
    component : Divider
  }, {
    path : "/link",
    component: () => import('../views/Link.vue')
  }, {
    path : "/radio",
    component: () => import('../views/Radio.vue')
  }, {
    path : "/empty",
    component: () => import('../views/Empty.vue')
  }, {
    path : "/tag",
    component: () => import('../views/Tag.vue')
  }, {
    path : "/result",
    component: () => import('../views/Result.vue')
  }, {
    path : "/descriptions",
    component: () => import('../views/Descriptions.vue')
  }, {
    path : "/skeleton",
    component: () => import('../views/Skeleton.vue')
  }, {
    path : "/avatar",
    component: () => import('../views/Avatar.vue')
  }, {
    path : "/progress",
    component: () => import('../views/Progress.vue')
  }, {
    path : "/rate",
    component: () => import('../views/Rate.vue')
  }, {
    path : "/alert",
    component: () => import('../views/Alert.vue')
  }, {
    path : "/input",
    component: () => import('../views/Input.vue')
  }, {
    path : "/checkbox",
    component: () => import('../views/Checkbox.vue')
  }, {
    path : "/inputnumber",
    component: () => import('../views/InputNumber.vue')
  }, {
    path : "/switch",
    component: () => import('../views/Switch.vue')
  }, {
    path : "/select",
    component: () => import('../views/Select.vue')
  },
   {
    path : "/myselect",
    component: () => import('../views/myselect/Select.vue')
  },
  {
   path : "/loading",
   component: () => import('../views/Loading.vue')
 },
 {
  path : "/badge",
  component: () => import('../views/Badge.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
