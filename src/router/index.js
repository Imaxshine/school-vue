import { createRouter, createWebHistory } from 'vue-router'
import { useTokenStore } from '@/stores/token'

import LandingPage from '@/view/LandingPage.vue'
import Home from '@/children/Home.vue'
import Dash from '@/children/Dash.vue'
import About from '@/children/About.vue'
import Sign_up from '@/children/Sign_up.vue'
import Login from '@/children/Login.vue'
import ViewUser from '@/children/ViewUser.vue'
import NotFound from '@/view/NotFound.vue'

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
          isAuth: true,
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
          description: 'Read more to know us mostly who we are!',
        },
      },
      {
        path: 'sign-up',
        name: 'register',
        component: Sign_up,
        meta: {
          title: 'Registration',
          description: `Register to our site and start from here`,
        },
      },
      {
        path: 'login',
        name: 'login',
        component: Login,
        meta: {
          title: 'Login',
          description: 'Login to our site and then look for our academic issue',
        },
      },
    ],
  },
  {
    path: '/view/:id',
    name: 'uniq',
    component: ViewUser,
  },
  {
    path: '/:ErrorPage(.*)*',
    name: 'notFound',
    component: NotFound,
    meta: {
      title: '404 Not Found',
    },
  },
]
const route = createRouter({
  history: createWebHistory('/'),
  routes: routers,
})
route.beforeEach((to, from) => {
  const tokenStore = useTokenStore()
  //set default title if not set
  document.title = to.meta.title || 'School App'
  //Jaza description
  //Anza kwa kupata  description iliyopo
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description)
  }

  if (to.meta.isAuth && !tokenStore.isLogin) {
    return { name: 'login' }
  }
  return true
})
export default route
