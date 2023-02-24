import { createRouter, createWebHistory } from "vue-router";
import HomeV from "../pages/HomeV.vue";
import ContactUs from "../pages/ContactUs.vue";
import Electronics from "../pages/Electronics.vue";
import BookmarkStore from "../pages/BookmarkStore.vue";
import LaptopComputers from "../pages/LaptopComputers.vue";





import HpLaptopComputers from "../pages/HpLaptopComputers.vue";
import LenevoLaptopComputers from "../pages/LenevoLaptopComputers.vue";
import AppleLaptopComputers from "../pages/AppleLaptopComputers.vue";

import HpDesktopComputers from "../pages/HpDesktopComputers.vue";
import AppleDesktopComputers from "../pages/AppleDesktopComputers.vue";
import LenevoDesktopComputers from "../pages/LenevoDesktopComputers.vue";

import DesktopComputers from "../pages/DesktopComputers.vue";
import IphoneMobilesView from "../pages/IphoneMobilesView.vue";
import ButtonMobilesView from "../pages/ButtonMobilesView.vue";
import AndroidMobilesView from "../pages/AndroidMobilesView.vue";
import MenTrousersView from "../pages/MenTrousersView.vue";
import MenTshirtsView from "../pages/MenTshirtsView.vue";


import TelevisionView from "../pages/TelevisionView.vue";
import HeadSetsView from "../pages/HeadSetsView.vue";


import SellStocks from "../pages/SellStocks.vue";

import AskStock from "../pages/AskStock.vue";


import AddEmployeeRole from "../pages/AddEmployeeRole.vue";

import StocksView from "../pages/StocksView.vue";

import AdminStocks from "../pages/AdminStocks.vue";

import MenJacketsView from "../pages/clothes/MenJacketsView.vue";
import MenClothesOthersView from "../pages/clothes/MenClothesOthersView.vue";
import FemaleTrousersView from "../pages/clothes/FemaleTrousersView.vue";
import FemaleJacketsView from "../pages/clothes/FemaleJacketsView.vue";
import FemaleClothesOthersView from "../pages/clothes/FemaleClothesOthersView.vue";
import FemaleTshirtsView from "../pages/clothes/FemaleTshirtsView.vue";




import FemaleFashionBagsView from "../pages/bags/FemaleFashionBagsView.vue";
import FemaleLazerBagsView from "../pages/bags/FemaleLazerBagsView.vue";
import MenLazerBagsView from "../pages/bags/MenLazerBagsView.vue";
import MenFashionBagsView from "../pages/bags/MenFashionBagsView.vue";



import MenLazerShoesView from "../pages/shoes/males/MenLazerShoesView.vue";
import MenOtherShoesView from "../pages/shoes/males/MenOtherShoesView.vue";
import MenSheraShoesView from "../pages/shoes/males/MenSheraShoesView.vue";
import MenSnickerShoesView from "../pages/shoes/males/MenSnickerShoesView.vue";


import FemaleLazerShoesView from "../pages/shoes/females/FemaleLazerShoesView.vue";
import FemaleOtherShoesView from "../pages/shoes/females/FemaleOtherShoesView.vue";
import FemaleSheraShoesView from "../pages/shoes/females/FemaleSheraShoesView.vue";
import FemaleSnickerShoesView from "../pages/shoes/females/FemaleSnickerShoesView.vue";
import FemaleHealShoesView from "../pages/shoes/females/FemaleHealShoesView.vue";


import Clothes from "../pages/Clothes.vue";
import Orders from "../pages/Orders.vue";
import Products from "../pages/Products.vue";
import Users from "../pages/Users.vue";
import UserStockRequest from "../pages/UserStockRequest.vue";
import Settings from "../pages/Settings.vue";
import UserOrderHistory from "../pages/UserOrderHistory.vue";

import AdminNotificationView from "../pages/AdminNotificationView.vue";
import AddProducts from "../pages/AddProducts.vue";
import AddStock from "../pages/AddStock.vue";
import EditProduct from "../pages/EditProduct.vue";
import ViewProductStoreDetails from "../pages/ViewProductStoreDetails.vue";


import EditStock from "../pages/EditStock.vue";
import ViewStockStoreDetail from "../pages/ViewStockStoreDetail.vue";

import Messages from "../pages/Messages.vue";
import AdminDashboard from "../pages/AdminDashboard.vue";
import DashboardHome from "../pages/DashboardHome.vue";
import Profile from "../pages/Profile.vue";
import SignUp from "../pages/SignUp.vue";
import LoginV from "../pages/LoginV.vue";
import Checkout from "../pages/Checkout.vue";
import DetailView from "../pages/DetailView.vue";
import DetailStockVIew from "../pages/DetailStockVIew.vue";
import AuthLayout from "../pages/AuthLayout.vue";
import Pinia from "../pages/Pinia.vue";
import Counter from "../pages/Counter.vue";
import HeroSection from "../pages/HeroSection.vue";
import LoginView from "../pages/LoginView.vue";
import RegisterView from "../pages/RegisterView.vue";
import AccountView from "../pages/AccountView.vue";
import ProfileSection from "../pages/account/ProfileSection.vue";
import EditProfile from "../pages/account/EditProfile.vue";
import AddSong from "../pages/account/AddSong.vue";
import DeleteSong from "../pages/account/DeleteSong.vue";

import AddYoutubeVideo from "../pages/account/AddYoutubeVideo.vue";
import DeleteYoutubeVideo from "../pages/account/DeleteYoutubeVideo.vue";
import CreatePost from "../pages/account/CreatePost.vue";
import CreateProduct from "../pages/account/CreateProduct.vue";
import EditPost from "../pages/account/EditPost.vue";
import PostsSection from "../pages/account/PostsSection.vue";
import PostById from "../pages/account/PostById.vue";
import store from "../store";

import { useUserStore } from "../stores/user-store";

const routes = [
  {
    path: "/admindashboard",

    beforeEnter: (to, from, next) => {
      useUserStore().role == "admin" || useUserStore().role == "delivery" ||  useUserStore().role == "manager" ? next() : next("/");
    },
    name: "AdminDashboard",
    component: AdminDashboard,
    children: [
      {
        path: "/dashboardhome",
        name: "DashboardHome",
        component: DashboardHome,
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "/orders",
        name: "Orders",
        component: Orders,
      },
      {
        path: "/products",
        name: "Products",
        component: Products,
      },
      {
        path: "/adminstocks",
        name: "AdminStocks",
        component: AdminStocks,
      },
      {
        path: "/editproduct/:id",
        name: "EditProduct",
        component: EditProduct,
      },
      {
        path: "/viewproductstoredetails/:id",
        name: "ViewProductStoreDetails",
        component: ViewProductStoreDetails,
      },
      {
        path: "/editstock/:id",
        name: "EditStock",
        component: EditStock,
      },

      {
        path: "/viewstockstoredetail/:id",
        name: "ViewStockStoreDetail",
        component: ViewStockStoreDetail,
      },

      
      {
        path: "/users",
        name: "Users",
        component: Users,
      },
      {
        path: "/userstockrequests",
        name: "UserStockRequest",
        component: UserStockRequest,
      },
      {
        path: "/addemployeerole",
        name: "AddEmployeeRole",
        component: AddEmployeeRole,
      },
      {
        path: "/createproduct",
        name: "CreateProduct",
        component: CreateProduct,
      },
      {
        path: "/messages",
        name: "Messages",
        component: Messages,
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
      },
      {
        path: "/adminnotification",
        name: "AdminNotificationView",
        component: AdminNotificationView,
      },
      {
        path: "/addproducts",
        name: "AddProducts",
        component: AddProducts,
      },
      {
        path: "/addstocks",
        name: "AddStock",
        component: AddStock,
      },
    ],
  },
  {
    path: "/",
    name: "homeV",
    component: HomeV,
  },

  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },

  {
    path: "/pinia",
    name: "Pinia",
    component: Pinia,
  },
  {
    path: "/herosection",
    name: "HeroSection",
    component: HeroSection,
  },
  {
    path: "/registerview",
    name: "RegisterView",
    beforeEnter: (to, from, next) => {
      useUserStore().id
        ? next("/account/profile/" + useUserStore().id)
        : next();
    },
    component: RegisterView,
  },
  {
    path: "/loginView",
    beforeEnter: (to, from, next) => {
      useUserStore().id
        ? next("/account/profile/" + useUserStore().id)
        : next();
    },
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/account",
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next() : next("/loginview");
    },
    component: AccountView,
    children: [
      {
        path: "profile/:id",
        component: ProfileSection,
        name: "ProfileSection",
      },
      {
        path: "edit-profile",
        component: EditProfile,
        name: "EditProfile",
      },
      {
        path: "add-song",
        component: AddSong,
        name: "AddSong",
      },
      {
        path: "delete-song",
        component: DeleteSong,
        name: "DeleteSong",
      },
      {
        path: "add-youtube-video",
        component: AddYoutubeVideo,
        name: "AddYoutubeVideo",
      },
      {
        path: "delete-youtube-video",
        component: DeleteYoutubeVideo,
        name: "DeleteYoutubeVideo",
      },
      {
        path: "create-post",
        component: CreatePost,
        name: "CreatePost",
      },
      {
        path: "edit-post/:id",
        component: EditPost,
        name: "EditPost",
      },
      {
        path: "posts",
        component: PostsSection,
        name: "PostsSection",
      },
      {
        path: "post-by-id",
        component: PostById,
        name: "PostById",
      },
      {
        path: "post-by-id/:id",
        component: PostById,
        name: "PostById",
      },
    ],
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },

  {
    path: "/detailview/:id",
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next() : next("/loginview");
    },
    name: "DetailView",
    component: DetailView,
  },

  {
    path: "/detailstockview/:id",
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next() : next("/loginview");
    },
    name: "DetailStockVIew",
    component: DetailStockVIew,
  },


  {
    path: "/auth",
    name: "Auth",
    redirect: "/login",
    meta: { isGuest: true },
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "LoginV",
        component: LoginV,
      },
      {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
      },
    ],
  },

  {
    path: "/contactus",
    name: "ContactUs",
    component: ContactUs,
  },



  {
    path: "/stocks",
    name: "StocksView",
    component: StocksView,
  },


  {
    path: "/electronics",
    name: "Electronics",
    component: Electronics,
  },
  {
    path: "/laptopcomputers",
    name: "LaptopComputers",
    component: LaptopComputers,
  },
  {
    path: "/hplaptopcomputers",
    name: "HpLaptopComputers",
    component: HpLaptopComputers,
  },
  {
    path: "/lenevolaptopcomputers",
    name: "LenevoLaptopComputers",
    component: LenevoLaptopComputers,
  },
  {
    path: "/applelaptopcomputers",
    name: "AppleLaptopComputers",
    component: AppleLaptopComputers,
  },


  {
    path: "/hpdesktopcomputers",
    name: "HpDesktopComputers",
    component: HpDesktopComputers,
  },

  {
    path: "/appledesktopcomputers",
    name: "AppleDesktopComputers",
    component: AppleDesktopComputers,
  },

  {
    path: "/lenevodesktopcomputers",
    name: "LenevoDesktopComputers",
    component: LenevoDesktopComputers,
  },


  {
    path: "/desktopcomputers",
    name: "DesktopComputers",
    component: DesktopComputers,
  },
  {
    path: "/iphonemobiles",
    name: "IphoneMobilesView",
    component: IphoneMobilesView,
  },
  {
    path: "/androidmobiles",
    name: "AndroidMobilesView",
    component: AndroidMobilesView,
  },
  {
    path: "/buttonmobiles",
    name: "ButtonMobilesView",
    component: ButtonMobilesView,
  },


  {
    path: "/television",
    name: "TelevisionView",
    component: TelevisionView,
  },


  {
    path: "/headsets",
    name: "HeadSetsView",
    component: HeadSetsView,
  },




  {
    path: "/sellstocks",
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next() : next("/loginview");
    },
    name: "SellStocks",
    component: SellStocks,
  },

  {
    path: "/askstock",
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next() : next("/loginview");
    },
    name: "AskStock",
    component: AskStock,
  },



  {
    path: "/mentrousers",
    name: "MenTrousersView",
    component: MenTrousersView,
  },
  {
    path: "/mentshirts",
    name: "MenTshirtsView",
    component: MenTshirtsView,
  },

  {
    path: "/menjackets",
    name: "MenJacketsView",
    component: MenJacketsView,
  },
  {
    path: "/menclotheothers",
    name: "MenClothesOthersView",
    component: MenClothesOthersView,
  },



  {
    path: "/femaletrousers",
    name: "FemaleTrousersView",
    component: FemaleTrousersView,
  },
  {
    path: "/femaletshirts",
    name: "FemaleTshirtsView",
    component: FemaleTshirtsView,
  },

  {
    path: "/femalejackets",
    name: "FemaleJacketsView",
    component: FemaleJacketsView,
  },
  {
    path: "/femaleclotheothers",
    name: "FemaleClothesOthersView",
    component: FemaleClothesOthersView,
  },

  

  {
    path: "/femalefashionbags",
    name: "FemaleFashionBagsView",
    component: FemaleFashionBagsView,
  },
  {
    path: "/femalelazerbags",
    name: "FemaleLazerBagsView",
    component: FemaleLazerBagsView,
  },

  {
    path: "/menfashionbags",
    name: "MenFashionBagsView",
    component: MenFashionBagsView,
  },
  {
    path: "/menlazerbags",
    name: "MenLazerBagsView",
    component: MenLazerBagsView,
  },



  {
    path: "/clothes",
    name: "Clothes",
    component: Clothes,
  },
  {
    path: "/bookmarks",
    name: "BookmarkStore",
    component: BookmarkStore,
  },
  {
    path: "/userorderhistory",
    name: "UserOrderHistory",
    component: UserOrderHistory,
  },



  {
    path: "/menlazershoes",
    name: "MenLazerShoesView",
    component: MenLazerShoesView,
  },
  {
    path: "/menothershoes",
    name: "MenOtherShoesView",
    component: MenOtherShoesView,
  },
  {
    path: "/mensherashoes",
    name: "MenSheraShoesView",
    component: MenSheraShoesView,
  },
  {
    path: "/mensnickershoes",
    name: "MenSnickerShoesView",
    component: MenSnickerShoesView,
  },

 
 
 
  {
    path: "/femalelazershoes",
    name: "FemaleLazerShoesView",
    component: FemaleLazerShoesView,
  },
  {
    path: "/femaleothershoes",
    name: "FemaleOtherShoesView",
    component: FemaleOtherShoesView,
  },
  {
    path: "/femalesherashoes",
    name: "FemaleSheraShoesView",
    component: FemaleSheraShoesView,
  },
  {
    path: "/femalesnickershoes",
    name: "FemaleSnickerShoesView",
    component: FemaleSnickerShoesView,
  },

  {
    path: "/femalehealshoes",
    name: "FemaleHealShoesView",
    component: FemaleHealShoesView,
  },


  // {
  //   path:'/recipe/:id',
  //   name:'Recipie',
  //   component:Recipie,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

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

export default router;
