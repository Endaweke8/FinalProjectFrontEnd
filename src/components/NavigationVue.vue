<template>
  <nav
    class="sticky top-0 z-19 fixed border-b-8 border-t-8 border-green-200 bg-slate-500 text-white fadeInTop"
  >
    <div class="w-full mx-auto px-4">
      <div class="flex justify-between">
        <!-- Secondary Navbar items -->
        <div
          class="hidden divide-x divide-white md:hidden items-center space-x-3 xl:flex"
        >
          <router-link
            to="/"
            class="vue-active-class py-4 ml-10 sm:flex text-white font-regular primary-color"
            >Home</router-link
          >

          <ul
            class="space-y-2 hover:bg-gray-300 z-80"
            v-for="category in categories"
            :key="category.id"
          >
            <li @click="show = true" @mouseleave="show = false">
              <router-link :to="`/category/${category.id}`">
                <button
                  type="button"
                  class="flex relative items-center p-2 w-full text-white hover:text-black font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <span
                    :class="
                      $route.params.id == category.id ? 'text-red-800 ' : ''
                    "
                  >
                    {{ category.name }}
                  </span>
                </button>
              </router-link>
            </li>
          </ul>

          <ul class="space-y-2 hover:bg-gray-300">
            <li @click="showStocks = true" @mouseleave="showStocks = false">
              <button
                type="button"
                class="flex relative items-center p-2 w-full text-white hover:text-black font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span
                  :class="
                    route.name == 'StocksView' ||
                    route.name == 'SellStocks' ||
                    route.name == 'AskStock'
                      ? 'text-red-800'
                      : ' '
                  "
                  >Stocks</span
                ><svg
                  class="w-4 h-4 ml-2"
                  :class="
                    route.name == 'StocksView' ||
                    route.name == 'SellStocks' ||
                    route.name == 'AskStock'
                      ? 'text-red-800'
                      : ' '
                  "
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-example"
                v-if="showStocks"
                class="bg-slate-200 text-black absolute py-2 space-y-2"
              >
                <li>
                  <router-link
                    to="/stocks"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white"
                    >Buy Stocks</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/sellstocks"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Sell Stocks</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/askstock"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Ask Stocks</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>

          <ul class="space-y-2 hover:bg-gray-300">
            <li @click="showAbout = true" @mouseleave="showAbout = false">
              <button
                type="button"
                class="flex relative items-center p-2 w-full text-white hover:text-black font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span
                  :class="
                    route.name == 'BreakingNews' ||
                    route.name == 'TutorialsView' ||
                    route.name == 'WhoAreWe'
                      ? 'text-red-800'
                      : ' '
                  "
                >
                  About Us </span
                ><svg
                  class="w-4 h-4 ml-2"
                  :class="
                    route.name == 'BreakingNews' ||
                    route.name == 'TutorialsView' ||
                    route.name == 'WhoAreWe'
                      ? 'text-red-800'
                      : ' '
                  "
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-example"
                v-if="showAbout"
                class="bg-slate-200 text-black absolute py-2 space-y-2"
              >
                <li>
                  <router-link
                    to="/breakingnews"
                    id="doubleDropdownButton"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Breaking News
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/tutorials"
                    id="doubleDropdownButton"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Tutorials
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/whoarewe"
                    id="doubleDropdownButton"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Who are We ?
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
          <router-link
            to="/contactus"
            class="vue-active-class py-4 sm:flex px-2 text-white font-regular primary-color"
            >Contact Us</router-link
          >
        </div>

        <!-- <div>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" @keyup="searchProducts(query)" v-model="query" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
        <button  @click="searchProducts(query)"   class="text-white visible focus:invisible absolute  right-1 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</div> -->

        <div class="flex items-center mt-2 right-2">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              @keyup="searchProducts(query)"
              v-model="query"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
          <button
            class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span @click="searchProducts(query)" class="sr-only">Search</span>
          </button>
        </div>

        <!-- 
        <span class="divide-x divide-white md:flex items-center space-x-3"> <input
                  type="text"
                  id="voice-search"
                  v-model="query"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                /></span>
                <button  class="bg-blue-200 rounded-full">Search</button> -->

        <!-- Mobile menu button -->
        <div
          @click="showSide = !showSide"
          class="md:flex lg:hidden flex items-center"
        >
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
      </div>
    </div>
    <!-- mobile menu -->
    <div
      v-if="popupOpen"
      class="md:hidden relative max-w-[50%] z-4 fixed top-13 bg-gray-500 text-white right-2"
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
      </ul>
    </div>
  </nav>
  <div
    v-if="showSide"
    class="animated slideInLeft faster w-full h-full top-0 left-0 justify-center"
  >
    <SideBar
      :categories="categories"
      class="lg:hidden"
      @showSideBar="showSideBar"
    />
  </div>
  <div v-if="noProductDisplay">
    <div
      v-if="products.length < 1"
      class="flex items-center mt-12 h-48 mb-12 justify-center"
    >
      <div class="text-3xl">Sorry searched Products not found</div>
    </div>
  </div>
  <div class="mt-10" v-if="products.length > 0">
    <h1 class="h-full flex items-center justify-center text-3xl">
      Searched Products
    </h1>

    <div
      class="grid grid-cols-1 bg-gray-200 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a
          :href="`/detailview/${product.id}`"
          class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div class="items-center justify-center flex">
            <img
              class="h-60 w-auto rounded-t-lg"
              :src="`${endpoint}/images/productprofiles/` + product.image_name"
              :alt="product.name"
            />
          </div>

          <div class="p-4 w-full">
            <h2
              class="w-full text-[12px] py-2 text-teal-600 font-extrabold hover:text-red-600 cursor-pointer w-full"
            >
              {{ product.name.substring(0, 40) }}...
            </h2>

            <div class="flex items-center justify-between mt-1">
              <span
                ><span class="text-sm font-semibold">Et</span>&nbsp;<span
                  class="text-[16px] font-extrabold"
                  >{{ product.sale_price }}</span
                >&nbsp;<span class="text-[12px]">birr</span></span
              >
              <span class="line-through"
                ><span class="text-sm font-semibold">Et</span>&nbsp;<span
                  class="text-[16px] font-extrabold"
                  >{{ product.price }}</span
                >&nbsp;<span class="text-sm font-semibold">birr</span></span
              >
            </div>
          </div>

          <div
            class="flex items-center justify-between mb-2 ml-2 mr-2 border-t border-gray-300"
          >
            <div>
              <span
                ><i
                  :class="
                    getStars(product.stars, product.stars.length) >= 1
                      ? 'checked'
                      : 'unchecked'
                  "
                  class="fa fa-star"
                  style="font-size: 20"
                ></i
              ></span>

              <span
                ><i
                  :class="
                    getStars(product.stars, product.stars.length) >= 2
                      ? 'checked'
                      : 'unchecked'
                  "
                  class="fa fa-star"
                  style="font-size: 20"
                ></i
              ></span>

              <span
                ><i
                  :class="
                    getStars(product.stars, product.stars.length) >= 3
                      ? 'checked'
                      : 'unchecked'
                  "
                  class="fa fa-star"
                  style="font-size: 20"
                ></i
              ></span>

              <span
                ><i
                  :class="
                    getStars(product.stars, product.stars.length) >= 4
                      ? 'checked'
                      : 'unchecked'
                  "
                  class="fa fa-star"
                  style="font-size: 20"
                ></i
              ></span>

              <span
                ><i
                  :class="
                    getStars(product.stars, product.stars.length) >= 5
                      ? 'checked'
                      : 'unchecked'
                  "
                  class="fa fa-star"
                  style="font-size: 20"
                ></i
              ></span>
            </div>

            <button
              class="text-white mt-1 bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Cart
            </button>
          </div>
        </a>
      </div>
    </div>

    <div class="flex items-center justify-center p-2">
      <v-pagination
        class="p-10"
        v-model="page"
        :pages="pageCount"
        :range-size="1"
        active-color="#337aff"
        @update:modelValue="searchProducts"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import SideBar from "./SideBar.vue";
import axios from "axios";
const endpoint = import.meta.env.VITE_APP_API_URL;

let page = ref(1);
let query = ref("");
let pageCount = ref(null);
const route = useRoute();
const products = ref([]);
const categories = ref([]);
const isLoading = ref(false);
const noProductDisplay = ref(false);
const showStocks = ref(false);

const searchProducts = async (query) => {
  noProductDisplay.value = true;
  let res = await axios.post(
    "http://127.0.0.1:8000/api/search?page=" + page.value,
    {
      searchData: query,
    }
  );
  pageCount.value = res.data.page_count;
  products.value = res.data.products.data;

  console.log("response", res);
};

onMounted(() => {
  getCategories();
});

const getStars = (star, starlength) => {
  console.log(star);

  const value = star.reduce((total, e) => {
    console.log(e.stars_rated);
    console.log("star length", starlength);
    return Math.ceil(total + Number(e.stars_rated) / starlength);
  }, 0);
  console.log(value);
  return value;

  // let response = await axios.get("http://127.0.0.1:8000/api/rates/"+id);
  // console.log("totalProductrate", response.data.totalRateGiven);
  // return Math.ceil(response.data.totalRateGiven)
};

const getCategories = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/getactivecategories");
  console.log(res);
  categories.value = res.data.categories;
};

const showSideBar = () => {
  showSide.value = false;
};

const showActiveElectronics = ref(false);
const showSide = ref(false);
const show = ref(false);
const showDrop = ref(false);
const showClothe = ref(false);
const showClothDrop = ref(false);
const showMenClothDrop = ref(false);
const showFemaleClothDrop = ref(false);

const showShoes = ref(false);
const showShoesDrop = ref(false);
const showMenShoesDrop = ref(false);
const showFemaleShoesDrop = ref(false);

const showMobile = ref(false);
const showMobileDrop = ref(false);

const showLaptopDrop = ref(false);
const showDesktopDrop = ref(false);

const showBag = ref(false);
const showMenBagDrop = ref(false);
const showFemaleBagDrop = ref(false);

const showAbout = ref(false);
</script>

<style>
a.router-link-exact-active {
  color: rgb(173, 15, 173);
  border-bottom: black;
}
.rating-css div {
  color: #ffe400;
  font-size: 30px;
  font-family: sans-serif;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  padding: 20px 0;
}
.rating-css input {
  display: none;
}
.rating-css input + label {
  font-size: 60px;
  text-shadow: 1px 1px 0 #8f8420;
  cursor: pointer;
}
.rating-css input:checked + label ~ label {
  color: #b4afaf;
}
.rating-css label:active {
  transform: scale(0.8);
  transition: 0.3s ease;
}
.checked {
  color: #ffe400;
}

.unchecked {
  color: #424139;
}
</style>
