<template>
  <nav
    class="sticky relative top-0 z-40 fixed border-b-2 border-slate-200 bg-slate-50 text-black fadeInTop"
  >
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <!-- Secondary Navbar items -->
        <div
          class="hidden divide-x divide-white md:flex items-center space-x-3"
        >
          <router-link
            to="/"
            class="vue-active-class py-4 sm:flex px-2 text-base font-regular primary-color"
            >Home</router-link
          >
          <router-link
            to="/contactus"
            class="py-4 px-2 text-base font-regular primary-color"
            >Contact Us</router-link
          >

        
          <ul class="space-y-2">
            <li @click="show = true" @mouseleave="show = false">
              <button
                type="button"
                class="flex relative items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
               
                <span
                  class="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                  >Electronics</span
                >
               
              </button>
              <ul
                id="dropdown-example"
                v-if="show"
                class="bg-slate-200 absolute py-2 space-y-2"
              >
                <li>
                  <router-link
                    to="/laptopcomputers"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Laptop Computer</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/desktopcomputers"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Desktop Computer</router-link
                  >
                </li>
                <li>
                  <button
                    @click="showDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mobiles
                  </button>
                  <div
                    v-if="showDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Iphone</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Adroid</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Buttons</a
                        >
                      </li>
                      
                    </ul>
                  </div>
                </li>
               
              </ul>
            </li>
          </ul>
          <ul class="space-y-2">
            <li @click="showClothe = true" @mouseleave="showClothe = false">
              <button
                type="button"
                class="flex relative items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
               
                <span
                  class="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                  >Clothes</span
                >
               
              </button>
              <ul
                id="dropdown-example"
                v-if="showClothe"
                class="bg-slate-200 absolute py-2 space-y-2"
              >
              <li>
                  <button
                    @click="showMenClothDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Male's
                  </button>
                  <div
                    v-if="showMenClothDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showMenClothDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Trouser</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Tshirt</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Jacket</a
                        >
                      </li>
                       <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Others</a
                        >
                      </li>
                      
                    </ul>
                  </div>
                </li>
                
                <li>
                  <button
                    @click="showFemaleClothDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Females's
                  </button>
                  <div
                    v-if="showFemaleClothDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showFemaleClothDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Trouser</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Tshirt</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Jacket</a
                        >
                      </li>
                       <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Others</a
                        >
                      </li>
                      
                    </ul>
                  </div>
                </li>
               
              </ul>
            </li>
          </ul>
         
          <ul class="space-y-2">
            <li @click="showBag = true" @mouseleave="showBag = false">
              <button
                type="button"
                class="flex relative items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
               
                <span
                  class="flex-1 ml-3 text-left whitespace-nowrap"
                  sidebar-toggle-item
                  >Bags</span
                >
               
              </button>
              <ul
                id="dropdown-example"
                v-if="showBag"
                class="bg-slate-200 absolute py-2 space-y-2"
              >
              <li>
                  <button
                    @click="showMenBagDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Male's
                  </button>
                  <div
                    v-if="showMenBagDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showMenBagDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >lazer</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >fashion</a
                        >
                      </li>
                      
                      
                    </ul>
                  </div>
                </li>
                
                <li>
                  <button
                    @click="showFemaleBagDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Females's
                  </button>
                  <div
                    v-if="showFemaleBagDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showFemaleBagDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Lazer</a
                        >
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Fashion</a
                        >
                      </li>
                     
                      
                    </ul>
                  </div>
                </li>
               
              </ul>
            </li>
          </ul>

          <router-link
            to="/bags"
            class="py-2 px-2 text-base font-regular primary-color"
            >Bags</router-link
          >
          <router-link
            to="/shoes"
            class="vue-active-class py-4 sm:flex px-2 text-base font-regular primary-color"
            >Shoes</router-link
          >
          <router-link
            to="/foods"
            class="py-4 px-2 text-base font-regular primary-color"
            >Foods</router-link
          >

          <router-link
            to="/Cars"
            class="py-2 px-2 text-base font-regular primary-color"
            >Cars</router-link
          >
          <router-link
            to="/Perfumes"
            class="py-4 px-2 text-base font-regular primary-color"
            >Perfumes</router-link
          >

          <router-link
            to="/stocks"
            class="py-2 px-2 text-base font-regular primary-color"
            >Stocks</router-link
          >
        </div>

        <!-- Mobile menu button -->
        <div @click="showSide = !showSide" class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg
              class="w-6 h-6 hover:text-blue-600"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <span class="ml-5">Categories</span>
        </div>
        <span  class="flex items-center">
                <router-link to="/bookmarks">
                <span>
                    <svg
                 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 cursor-pointer hover:stroke-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                </span>
                <span v-if="bookmarkStore.bookmarks">{{bookmarkStore.bookmarks.quantity }}</span>
                
                </router-link >
              </span>
        <div class="flex items-center">
          <router-link to="/checkout">
            <button class="outline-none mobile-menu-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span class="text-green-600 text-2xl" v-if="cartStore.carts">
                {{ cartStore.carts.quantity }}
              </span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <!-- mobile menu -->
    <div
      v-if="popupOpen"
      class="md:hidden max-w-[50%] fixed top-13 bg-gray-500 text-white right-2"
    >
      <ul>
        <li>
          <router-link
            active-class="bg-red text-white"
            to="/"
            class="block text-sm px-2 py-4 text-white text-black hover:bg-blue-200 text-base font-regular"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/contactus"
            class="block text-sm px-2 active:bg-black py-4 hover:bg-blue-200 text-base font-regular"
            >Contact Us</router-link
          >
        </li>
        <!-- <li class="active">
          <router-link
            to="/login"
            class="block text-sm px-2 py-4 hover:bg-blue-200 transition duration-300 text-base font-regular"
            ><button @click="login">Log in</button></router-link
          >
        </li>
        <li class="active">
          <button
            class="block text-sm px-2 py-4 hover:bg-blue-200 transition duration-300 text-base font-regular"
            @click="logout"
          >
            Log out
          </button>
        </li> -->
        <!-- <li class="active">
          <router-link
            to="/signup"
            class="block text-sm px-2 py-4 hover:bg-blue-200 transition duration-300 text-base font-regular"
            >SignUp</router-link
          >
        </li> -->
      </ul>
    </div>
  </nav>
  <div
    v-if="showSide"
    class="md:hidden animated slideInLeft faster w-full h-full top-0 left-0 justify-center backdrop-blur-sm"
  >
    <SideBar />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/cart-store";
import { useBookmarkStore } from "../stores/bookmark-store";
import SideBar from "./SideBar.vue";

const bookmarkStore = useBookmarkStore();
const cartStore = useCartStore();
const showSide = ref(false);
const show = ref(false);
const showDrop = ref(false);
const showClothe = ref(false);
const showClothDrop = ref(false);
const showMenClothDrop = ref(false);
const showFemaleClothDrop = ref(false);

const showBag = ref(false);
const showMenBagDrop = ref(false);
const showFemaleBagDrop = ref(false);

</script>

<style>
a.router-link-exact-active {
  color: purple;
  border-bottom: black;
}
</style>
