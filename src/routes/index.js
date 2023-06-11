import { createRouter, createWebHistory } from "vue-router";
import HomeV from "../pages/HomeV.vue";
import ContactUs from "../pages/ContactUs.vue";
import Electronics from "../pages/Electronics.vue";
import BookmarkStore from "../pages/BookmarkStore.vue";
import LaptopComputers from "../pages/LaptopComputers.vue";

import TutorialsView from "../pages/TutorialsView.vue";

import WhoAreWe from "../pages/WhoAreWe.vue";
import Employee from "../components/Employee.vue";

import HpLaptopComputers from "../pages/laptops/HpLaptopComputers.vue";
import LenevoLaptopComputers from "../pages/laptops/LenevoLaptopComputers.vue";
import AppleLaptopComputers from "../pages/laptops/AppleLaptopComputers.vue";

import HpDesktopComputers from "../pages/computers/HpDesktopComputers.vue";
import AppleDesktopComputers from "../pages/computers/AppleDesktopComputers.vue";
import LenevoDesktopComputers from "../pages/computers/LenevoDesktopComputers.vue";

import DesktopComputers from "../pages/DesktopComputers.vue";
import IphoneMobilesView from "../pages/mobiles/IphoneMobilesView.vue";
import ButtonMobilesView from "../pages/mobiles/ButtonMobilesView.vue";
import AndroidMobilesView from "../pages/mobiles/AndroidMobilesView.vue";

import TelevisionView from "../pages/TelevisionView.vue";
import HeadSetsView from "../pages/HeadSetsView.vue";

import Analysis from "../pages/Analysis.vue";

import SellStocks from "../pages/stocks/SellStocks.vue";
import AskStock from "../pages/stocks/AskStock.vue";
import StocksView from "../pages/stocks/StocksView.vue";
import AdminStocks from "../pages/stocks/AdminStocks.vue";
import UserStockRequest from "../pages/stocks/UserStockRequest.vue";
import UserStockSellRequest from "../pages/stocks/UserStockSellRequest.vue";
import EditStock from "../pages/stocks/EditStock.vue";
import ViewStockStoreDetail from "../pages/stocks/ViewStockStoreDetail.vue";
import DetailStockVIew from "../pages/stocks/DetailStockVIew.vue";
import AddStock from "../pages/stocks/AddStock.vue";
import UserStockOrders from "../pages/stocks/UserStockOrders.vue";

import AddEmployeeRole from "../pages/auth/admin/manager/AddEmployeeRole.vue";
import DailyReport from "../pages/report/dailyreport/DailyReport.vue";
import WeeklyReport from "../pages/WeeklyReport.vue";

import AddCategory from "../pages/AddCategory.vue";
import AdminDashboardTest from "../pages/AdminDashboardTest.vue";
import AddSubCategory from "../pages/AddSubCategory.vue";
import AddSubSubCategory from "../pages/AddSubSubCategory.vue";

import NotifiedOrder from "../pages/orders/NotifiedOrder.vue";
import PendingOrders from "../pages/orders/PendingOrders.vue";
import DeliveredOrder from "../pages/orders/DeliveredOrder.vue";
import AcceptedOrder from "../pages/orders/AcceptedOrder.vue";
import Orders from "../pages/Orders.vue";
import Products from "../pages/Products.vue";
import TotalSoldProducts from "../pages/TotalSoldProducts.vue";
import Users from "../pages/Users.vue";
import AllCategories from "../pages/AllCategories.vue";
import EditCategory from "../pages/EditCategory.vue";

import Settings from "../pages/Settings.vue";
import UserOrderHistory from "../pages/orders/UserOrderHistory.vue";

import DetailOrderResponse from "../pages/DetailOrderResponse.vue";

import AdminNotificationView from "../pages/AdminNotificationView.vue";
import AddProducts from "../pages/AddProducts.vue";

import BreakingNews from "../pages/BreakingNews.vue";
import EditProduct from "../pages/EditProduct.vue";
import ViewProductStoreDetails from "../pages/ViewProductStoreDetails.vue";

import Messages from "../pages/Messages.vue";
import AdminDashboard from "../pages/AdminDashboard.vue";
import DashboardHome from "../pages/DashboardHome.vue";
import Profile from "../pages/Profile.vue";
import SignUp from "../pages/SignUp.vue";
import LoginV from "../pages/LoginV.vue";
import Checkout from "../pages/Checkout.vue";
import DetailView from "../pages/DetailView.vue";

import Category from "../pages/Category.vue";
import ResposiveAdminDashboard from "../pages/ResposiveAdminDashboard.vue";

import AuthLayout from "../pages/AuthLayout.vue";

import HeroSection from "../pages/HeroSection.vue";
import LoginView from "../pages/LoginView.vue";
import RegisterView from "../pages/RegisterView.vue";
import EmailVerification from "../pages/EmailVerification.vue";
import ResetPassword from "../pages/ResetPassword.vue";
import ForgetPassword from "../pages/ForgetPassword.vue";
import AccountView from "../pages/AccountView.vue";
import ProfileSection from "../pages/account/ProfileSection.vue";
import EditProfile from "../pages/account/EditProfile.vue";

import CreateProduct from "../pages/account/CreateProduct.vue";
import { useUserStore } from "../stores/user-store";

const routes = [
  {
    // path: "/admindashboard",

    // beforeEnter: (to, from, next) => {
    //   useUserStore().role == "admin" ||
    //   useUserStore().role == "delivery" ||
    //   useUserStore().role == "manager" ||
    //   useUserStore().role == "socialmediamanager" ||
    //   useUserStore().role == "customerserviceofficor"
    //     ? next()
    //     : next("/");
    // },
    // name: "AdminDashboard",
    // component: AdminDashboard,
    path: "/admindashboard",

    beforeEnter: (to, from, next) => {
      useUserStore().role == "admin" ||
      useUserStore().role == "delivery" ||
      useUserStore().role == "manager" ||
      useUserStore().role == "socialmediamanager" ||
      useUserStore().role == "customerserviceofficor"
        ? next()
        : next("/");
    },
    name: "AdminDashboardTest",
    component: AdminDashboardTest,
    children: [
      {
        path: "/dashboardhome",
        name: "DashboardHome",
        component: DashboardHome,
      },
      
      {
        path: "/employees",
        name: "Employee",
        component: Employee,
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
        path: "/pendingorders",
        name: "PendingOrders",
        component: PendingOrders,
      },
      {
        path: "/notifiedorder",
        name: "NotifiedOrder",
        component: NotifiedOrder,
      },
      {
        path: "/deliveredorders",
        name: "DeliveredOrder",
        component: DeliveredOrder,
      },
      {
        path: "/acceptedorders",
        name: "AcceptedOrder",
        component: AcceptedOrder,
      },
      {
        path: "/products",
        name: "Products",
        component: Products,
      },
      {
        path: "/analysis",
        name: "Analysis",
        component: Analysis,
      },
      {
        path: "/totalsoldproducts",
        name: "TotalSoldProducts",
        component: TotalSoldProducts,
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
        path: "/dailyreport",
        name: "DailyReport",
        component: DailyReport,
      },

      {
        path: "/weeklyreport",
        name: "WeeklyReport",
        component: WeeklyReport,
      },

      {
        path: "/users",
        name: "Users",
        component: Users,
      },
      {
        path: "/allcategories",
        name: "AllCategories",
        component: AllCategories,
      },

      {
        path: "/editcategory/:id",
        name: "EditCategory",
        component: EditCategory,
      },
      {
        path: "/userstockrequests",
        name: "UserStockRequest",
        component: UserStockRequest,
      },
      {
        path: "/usersellstockrequests",
        name: "UserStockSellRequest",
        component: UserStockSellRequest,
      },
      {
        path: "/userstockorders",
        name: "UserStockOrders",
        component: UserStockOrders,
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
        path: "/addcategory",
        name: "AddCategory",
        component: AddCategory,
      },
      {
        path: "/addsubcategory",
        name: "AddSubCategory",
        component: AddSubCategory,
      },
      {
        path: "/addsubsubcategory",
        name: "AddSubSubCategory",
        component: AddSubSubCategory,
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
  // {
  //   path: "/admintest",
  //   name: "AdminDashboardTest",
  //   component: AdminDashboardTest,
  // },

  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },

  {
    path: "/herosection",
    name: "HeroSection",
    component: HeroSection,
  },
  {
    path: "/resetpassword",
    name: "ResetPassword",
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next("/") : next();
    },
    component: ResetPassword,
  },

  {
    path: "/emailverification",
    name: "EmailVerification",
    // beforeEnter: (to, from, next) => {
    //   useUserStore().id
    //     ? next("/account/profile/" + useUserStore().id)
    //     : next();
    // },
    component: EmailVerification,
  },
  {
    path: "/forgotpassword",
    name: "ForgetPassword",
    beforeEnter: (to, from, next) => {
      useUserStore().id ? next("/") : next();
    },
    component: ForgetPassword,
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
    ],
  },

  {
    path: "/detailview/:id",
    // beforeEnter: (to, from, next) => {
    //   useUserStore().id ? next() : next("/loginview");
    // },
    name: "DetailView",
    component: DetailView,
  },

  {
    path: "/category/:id",
    name: "Category",
    component: Category,
  },

  {
    path: "/resadmindashboard",
    name: "ResposiveAdminDashboard",
    component: ResposiveAdminDashboard,
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
    beforeEnter: (to, from, next) => {
      useUserStore().id
        ? next()
        : next("/loginview");
    },
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
    path: "/orderresponsedetail/:id",
    name: "DetailOrderResponse",
    component: DetailOrderResponse,
  },

  {
    path: "/breakingnews",
    name: "BreakingNews",
    component: BreakingNews,
  },
  {
    path: "/tutorials",
    name: "TutorialsView",
    component: TutorialsView,
  },

  {
    path: "/whoarewe",
    name: "WhoAreWe",
    component: WhoAreWe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
