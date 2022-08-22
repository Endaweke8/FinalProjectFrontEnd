import { createRouter, createWebHistory } from 'vue-router'
import HomeV from '../pages/HomeV.vue'
import ContactUs from '../pages/ContactUs.vue'

import LoginV from '../pages/LoginV.vue'
import LogoutV from '../pages/LogoutV.vue'
import ProfileV from '../pages/ProfileV.vue'
import { authGuard } from "@auth0/auth0-vue";
const routes = [
  {
    path: '/',
    name: 'homeV',
    component:HomeV
  },
  
  {
    path: '/login',
    name: 'LoginV',
    component: LoginV,
    
   
  },
  {
    path: '/logout',
    name: 'LogoutV',
    component: LogoutV,
  },
  {
    path: '/profile',
    name: 'ProfileV',
    component: ProfileV,
    beforeEnter: authGuard,
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs,
   
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router