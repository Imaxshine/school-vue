import {createRouter, createWebHistory} from 'vue-router';

import LandingPage from "@/view/LandingPage.vue";
import Home from "@/children/Home.vue";

const routers = [
  {
    path: '/',
    redirect: {name: 'about'}
  },
  {
    path: '/school',
    name: 'school',
    component: LandingPage,
    children: [
      {
        path: 'home',
        name: 'about',
        component: Home,
        meta:{
          title: "Get know about us"
        }
      }
    ]
  }
]
const route = createRouter({
  history: createWebHistory('/dist'),
  routes: routers
})
route.beforeEach((to, from)=>{

    //set default title if not set
    document.title = to.meta.title || "School App";
})
export default route;