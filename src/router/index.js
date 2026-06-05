import {createRouter, createWebHistory} from 'vue-router';

import LandingPage from "@/view/LandingPage.vue";
import Home from "@/children/Home.vue";
import Dash from '@/children/Dash.vue'
import About from '@/children/About.vue'

const routers = [
  {
    path: '/',
    redirect: { name: 'home' },
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
        meta: {
          title: 'Home page',
          description: 'We are the constitution looking for high academic issues',
        },
      },
      {
        path: 'dashboard',
        name: 'dash',
        component: Dash,
        meta: {
          title: 'Role over view',
          description: 'Our school performance over view',
        },
      },
      {
        path: 'about',
        name: 'about',
        component: About,
        meta: {
          title: 'Get know about us',
          description: "Read more to know us mostly who we are!"
        },
      },
    ],
  },
]
const route = createRouter({
  history: createWebHistory('/file'),
  routes: routers
})
route.beforeEach((to, from)=>{

    //set default title if not set
    document.title = to.meta.title || "School App";
    //Jaza description
  //Anza kwa kupata  description iliyopo
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && to.meta.description){
    metaDescription.setAttribute('content', to.meta.description);
  }
})
export default route;