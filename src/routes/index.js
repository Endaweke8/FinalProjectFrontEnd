import { createRouter, createWebHistory } from 'vue-router'
import HomeV from '../pages/HomeV.vue'
import ContactUs from '../pages/ContactUs.vue'
import Electronics from '../pages/Electronics.vue'
import BookmarkStore from '../pages/BookmarkStore.vue'
import LaptopComputers from '../pages/LaptopComputers.vue'
import DesktopComputers from '../pages/DesktopComputers.vue'
import IphoneMobilesView from '../pages/IphoneMobilesView.vue'
import ButtonMobilesView from '../pages/ButtonMobilesView.vue'
import AndroidMobilesView from '../pages/AndroidMobilesView.vue'
import Clothes from '../pages/Clothes.vue'
import Orders from '../pages/Orders.vue'
import Products from '../pages/Products.vue'
import Users from '../pages/Users.vue'
import Settings from '../pages/Settings.vue'
import AddProducts from '../pages/AddProducts.vue'
import EditProduct from '../pages/EditProduct.vue'
import Messages from '../pages/Messages.vue'
import AdminDashboard from '../pages/AdminDashboard.vue'
import DashboardHome from '../pages/DashboardHome.vue'
import Profile from '../pages/Profile.vue'
import SignUp from '../pages/SignUp.vue'
import LoginV from '../pages/LoginV.vue'
import Checkout from '../pages/Checkout.vue'
import DetailView from '../pages/DetailView.vue'
import AuthLayout from '../pages/AuthLayout.vue'
import Pinia from '../pages/Pinia.vue'
import Counter from '../pages/Counter.vue'
import HeroSection from '../pages/HeroSection.vue'
import LoginView from '../pages/LoginView.vue'
import RegisterView from '../pages/RegisterView.vue'
import AccountView from '../pages/AccountView.vue'
import ProfileSection from '../pages/account/ProfileSection.vue'
import EditProfile from '../pages/account/EditProfile.vue'
import AddSong from '../pages/account/AddSong.vue'
import DeleteSong from '../pages/account/DeleteSong.vue'

import AddYoutubeVideo from '../pages/account/AddYoutubeVideo.vue'
import DeleteYoutubeVideo from '../pages/account/DeleteYoutubeVideo.vue'
import CreatePost from '../pages/account/CreatePost.vue'
import CreateProduct from '../pages/account/CreateProduct.vue'
import EditPost from '../pages/account/EditPost.vue'
import PostsSection from '../pages/account/PostsSection.vue'
import PostById from '../pages/account/PostById.vue'
import store from '../store'

import {useUserStore} from '../stores/user-store'

const routes = [

  {
    path: '/admindashboard',
    
    beforeEnter: (to, from, next) => {
      useUserStore().role=="admin"? next():next('/')
      },
    name: 'AdminDashboard',
    component:AdminDashboard,
    children:[
     {
      path: '/dashboardhome',
      name: 'DashboardHome',
      component:DashboardHome,
     },
     {
      path: '/profile',
      name: 'Profile',
      component:Profile,
     },
     {
      path: '/orders',
      name: 'Orders',
      component:Orders,
     },
     {
      path: '/products',
      name: 'Products',
      component:Products,
     },
     {
      path: '/editproduct/:id',
      name: 'EditProduct',
      component:EditProduct,
     },
     {
      path: '/users',
      name: 'Users',
      component:Users,
     },
     {
      path: '/createproduct',
      name: 'CreateProduct',
      component:CreateProduct,
     },
     {
      path: '/messages',
      name: 'Messages',
      component:Messages,
     },
     {
      path: '/settings',
      name: 'Settings',
      component:Settings,
     },
     {
      path: '/addproducts',
      name: 'AddProducts',
      component:AddProducts,
     },

    ]
   
  },
  {
    path: '/',
    name: 'homeV', 
    component:HomeV,
   
  },

  {
    path: '/checkout',
    name: 'Checkout', 
    component:Checkout,
   
  },
 
 
 
 
 
 
 
 
 
 
 
 
 
  {
    path: '/pinia',
    name: 'Pinia', 
    component:Pinia,
   
  },
  {
    path: '/herosection',
    name: 'HeroSection', 
    component:HeroSection,
   
  },
  {
   
    path: '/registerview',
    name: 'RegisterView', 
    beforeEnter: (to, from, next) => {
    useUserStore().id? next('/account/profile/'+useUserStore().id):next()
    },
    component:RegisterView,
   
  },
  {
    path: '/loginView',
    beforeEnter: (to, from, next) => {
      useUserStore().id? next('/account/profile/'+useUserStore().id):next()
      },
    name: 'LoginView', 
    component:LoginView,
   
  },
  {
    path: '/account', 
    beforeEnter: (to, from, next) => {
      useUserStore().id? next():next('/loginview')
      },
    component:AccountView,
    children:[
      {
        path: 'profile/:id', 
        component:ProfileSection, 
        name:'ProfileSection'
      },
      {
        path: 'edit-profile', 
        component:EditProfile, 
        name:'EditProfile'
      },
      {
        path: 'add-song', 
        component:AddSong, 
        name:'AddSong'
      },
      {
        path: 'delete-song', 
        component:DeleteSong, 
        name:'DeleteSong'
      },
      {
        path: 'add-youtube-video', 
        component:AddYoutubeVideo, 
        name:'AddYoutubeVideo'
      },
      {
        path: 'delete-youtube-video', 
        component:DeleteYoutubeVideo, 
        name:'DeleteYoutubeVideo'
      },
      {
        path: 'create-post', 
        component:CreatePost, 
        name:'CreatePost'
      },
      {
        path: 'edit-post/:id', 
        component:EditPost, 
        name:'EditPost'
      },
      {
        path: 'posts', 
        component:PostsSection, 
        name:'PostsSection'
      },
      {
        path: 'post-by-id', 
        component:PostById, 
        name:'PostById'
      },
      {
        path: 'post-by-id/:id', 
        component:PostById, 
        name:'PostById'
      }
    ]
  },
  {
    path: '/counter',
    name: 'Counter', 
    component:Counter,
   
  },
  
  
  
  
  
  
  
  
  
  
  
  {
    path: '/detailview/:id',
    beforeEnter: (to, from, next) => {
      useUserStore().id? next():next('/loginview')
      },
    name: 'DetailView',
    component:DetailView,
   
  },

  {
    path:'/auth',
    name:"Auth",
    redirect:'/login',
    meta:{isGuest:true},
    component:AuthLayout,
    children:[
      {
        path: '/login',
        name: 'LoginV',
        component: LoginV,
        
       
      },
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
       
      },
    ]
  },
  


 
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs,

    },

  {
    path: '/electronics',
    name: 'Electronics',
    component: Electronics,

    },
    {
      path: '/laptopcomputers',
      name: 'LaptopComputers',
      component: LaptopComputers,
  
      },
      {
        path: '/desktopcomputers',
        name: 'DesktopComputers',
        component: DesktopComputers,
    
        },
        {
          path: '/iphonemobiles',
          name: 'IphoneMobilesView',
          component: IphoneMobilesView,
      
          },
          {
            path: '/androidmobiles',
            name: 'AndroidMobilesView',
            component: AndroidMobilesView,
        
            },
            {
              path: '/buttonmobiles',
              name: 'ButtonMobilesView',
              component: ButtonMobilesView,
          
              },
    {
      path: '/clothes',
      name: 'Clothes',
      component: Clothes,
  
      },
      {
        path: '/bookmarks',
        name: 'BookmarkStore',
        component: BookmarkStore,
    
        },
 
  // {
  //   path:'/recipe/:id',
  //   name:'Recipie',
  //   component:Recipie,
  // },


 
]

const router = createRouter({
  history:createWebHistory(),
  routes
})


// router.beforeEach((to,from,next)=>{
//   if(to.meta.requiresAuth && !store.state.user.token){
//     next({name:'LoginV'})
//   }
//   else if(store.state.user.role==='admin' && (to.meta.isGuest)){
//      next({name:"AdminDashboard"})
//   }

// //   else if(store.state.user.role==='admin'){
// //     next({name:"AdminDashboard"})
// //  }

//   else{
//      next();
//   }
// })


export default router