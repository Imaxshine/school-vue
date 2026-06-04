import {createRouter, createWebHistory} from 'vue-router';

import LandingPage from "@/view/LandingPage.vue";
import Home from "@/children/Home.vue";
import Dash from '@/children/Dash.vue'

const routers = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  {
    path: '/school',
    name: 'school',
    component: LandingPage,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
        meta:{
          title: "Get know about us"
        }
      },
      {
        path: 'dashboard',
        name: 'dash',
        component: Dash
      }
    ]
  }
]
const route = createRouter({
  history: createWebHistory('/file'),
  routes: routers
})
route.beforeEach((to, from)=>{

    //set default title if not set
    document.title = to.meta.title || "School App";
})
export default route;