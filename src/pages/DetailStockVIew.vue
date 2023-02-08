<template>
  <div>
    <TopNavigation />
    <NavigationVue></NavigationVue>
    
    
<div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
  <div
      v-show="isLoading"
      class="flex items-center mt-12 h-48 mb-12 justify-center"
    >
      <img
        class="w-20 h-20 absolute left-1/2 -ml-2.5"
        src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
        alt=""
      />
    </div>
    <div>
      <router-link to="/stocks" class="flex flex-wrap m-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3.5"
          stroke="currentColor"
          class="w-15 hover:bg-green-400 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </router-link>
      <div
        class="flex items-center mt-10 justify-center"
      
      >
        <div class="w-75% lg:flex ">
          <div
            class="card-zoom  lg:h-auto m-4 lg:w-60 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          >
            <img :src="stocks.image_name" alt="" width="600" class="card-zoom-image w-96 h-96" />
          </div>
          <div
            class="border-r  shadow-xl max-w-md mb-10 border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r lg:rounded-l p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-8 ">
              <p class="text-sm text-gray-600 flex items-center">
                <svg
                  class="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  />
                </svg>
                {{ stocks.name }}
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">
                {{ stocks.slug }}
              </div>
          
              <p class="text-gray-700 text-base">
                {{ stocks.description }}
              </p>

              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <span class="text-3xl mt-5 mb-5 font-bold text-gray-900 dark:text-white"
                >{{ stocks.sale_price }} Birr</span
              >
        
             


            
             
            </div>
      
            <div class="flex items-center justify-between">
              
           
          

              <span>
                <button @click="addToBookmark(stock.name)">
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
                </button>
              </span>

              <button
                @click="addToCart(stock.name)"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Order Us Now
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
 
  <FooterSection />
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import Swal from "sweetalert2";
import axios from "axios";
import NavigationVue from "../components/NavigationVue.vue";
import { useUserStore } from "../stores/user-store";
import { useBookmarkStore } from "../stores/bookmark-store";
import { useCartStore } from "../stores/cart-store";


import TopNavigation from "../components/structure/TopNavigation.vue";

import FooterSection from "../components/structure/FooterSection.vue";
const route = useRoute();
const likeCount = ref(0);
const rateCount = ref(0);
const showRate=ref(false);
const product_rating=ref(1)
const user = ref([]);
const stocks = ref([]);
const store = useStore();
const isLoading = ref(false);
const userStore = useUserStore();
const cartStore = useCartStore();

const bookmarkStore = useBookmarkStore();

onMounted(async () => {
  isLoading.value = true;
  getStock();
});





  const getStock = async () => {
  let response = await axios.get("http://127.0.0.1:8000/api/stock/"+route.params.id);
  console.log("response", response);
  if (response.data) {
    isLoading.value = false;
  }
   stocks.value = response.data;
   console.log(stocks.value);
};






const addToCart = async (title) => {
  var url = "http://127.0.0.1:8000/api/cart";
  await axios
    .post("http://127.0.0.1:8000/api/cart/" + userStore.id, {
      product_id: route.params.id,
      user_id: userStore.id,
    })
    .then((response) => {
      cartStore.fetchCartsByUserId(userStore.id);
      Swal.fire({
        toast: true,
        icon: "success",
        title: "You added " + title + " " + "to cart",
        animation: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      console.log(response.data);
    
    });
}

const addToBookmark = async (title) => {

  var url = "http://127.0.0.1:8000/api/bookmark";
  await axios
    .post("http://127.0.0.1:8000/api/bookmark/" + userStore.id, {
      product_id: route.params.id,
      //  user_id: userStore.id,
    })
    .then((response) => {
      console.log(response.data.message);
      bookmarkStore.fetchBookmarksByUserId(userStore.id);
      if (response.data.message == "item is already exsist") {
        Swal.fire({
          toast: true,
          icon: "error",
          title: " " + response.data.message + " " + "in Bookmark",
          animation: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      } else {
        Swal.fire({
          toast: true,
          icon: "success",
          title:
            " Your favorites are" + response.data.items + " " + "in Bookmark",
          animation: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      }
      console.log(response.data);
    });
};
</script>

<style scoped>
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
  .checked{
    color:#ffe400
  }

  .unchecked{
    color:#e6e5dd
  }
  .card-zoom {
  @apply  flex items-center justify-center m-3 overflow-hidden shadow-xl w-96 h-96 rounded-2xl;
}
.card-zoom:hover .card-zoom-image {
  @apply scale-150;
}
.card-zoom-image:hover{
  @apply scale-150;
}
</style>
