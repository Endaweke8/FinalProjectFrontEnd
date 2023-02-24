<template>
  <div>
    <TopNavigation />
    <NavigationVue></NavigationVue>
    
    
<div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
  <div
      v-show="isLoading"
      class="flex items-center mt-12 h-48 mb-3 justify-center"
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
                @click="showOrderStockForm=true"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Order Us Now
              </button>

            </div>
          </div>
        </div>

       

      </div>
    </div>
    <div class="bg-gray-200 flex items-center justify-center" v-if="showOrderStockForm">
    <div id="stockorderus" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
      <div class="text-gray-900 text-xl">Stock Order</div>
      <div class="bg-gray-500 w-full md:w-1/2  h-1"></div>
      <div class="border border-gray-500 w-full md:w-1/2 px-3">
        <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full ">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Enter you first Name
          </label>
          <input
            type="text"
            name="first name"
            v-model="firstName"
            id=""
            placeholder="Abebe"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.firstName">* {{ errors.firstName[0] }}</p>
        </div>
      </div>
      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full ">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Enter your last Name
          </label>
          <input
            type="text"
            name="first name"
            v-model="lastName"
            id=""
            placeholder="Abebe"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.lastName">* {{ errors.lastName[0] }}</p>
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full ">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Enter Your email
          </label>
          <input
            type="email"
            name=""
            v-model="email"
            id=""
            placeholder="abebe123@gmail.com"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
         
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Enter Your Phone Nuber
          </label>
          <input
            type="text"
            name=""
            v-model="phone"
            id=""
            placeholder="0938943835"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.phone">
            * {{ errors.phone[0] }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full ">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Enter Your Address
          </label>
          <input
            type="text"
            name=""
            v-model="address"
            id=""
            placeholder="Addis Ababa, kebele 5"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
         
        </div>
      </div>


      <div class="flex flex-wrap mb-6">
        <div class="w-full ">
          <button
            @click.prevent="Submit()"
            class="px-4 py-4 mb-10 text-sm relative font-medium w-full   text-center item-center rounded text-white bg-green-600 hover:bg-green-600/80"
          >
            <svg
              v-show="showOrderRequestLoading"
              class="w-8 h-7 text-white animate-spin relative left-1/2 -ml-2.5"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="11"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                fill="currentColor"
              ></path>
            </svg>
            <span :class="{ invisible: showOrderRequestLoading }">
              <span v-if="showCorrect">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="4.5"
                  stroke="currentColor"
                  class="w-8 h-10 text-white  relative left-1/2 -ml-2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <span v-if="!showCorrect"> Submit </span></span
            >
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
import StockOrderRequest from "../components/StockOrderRequest.vue";
const route = useRoute();



const stocks = ref([]);

const isLoading = ref(false);
const userStore = useUserStore();
const cartStore = useCartStore();
const showOrderRequestLoading=ref(false)
const showOrderStockForm=ref(false)

const router = useRouter();
let errors = ref([]);
let showCorrect = ref(false);

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












let  firstName=ref("")
let  lastName=ref("")
 let email =ref("")
 let phone =ref("")
 let address =ref("")
  


const Submit = async () => {
  showOrderRequestLoading.value = true;
  errors.value = [];
  alert(stocks.value.amount)
  console.log(stocks.value.amount)
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/savestockorder",{
      
      firstName:firstName.value,
      lastName:lastName.value,
      email:email.value,
      phone:phone.value,
      address:address.value,
      amount:stocks.value.amount,
      buying_price:stocks.value.sale_price,
      user_id:userStore.id,
      stock_id:route.params.id,


      }
    );
    console.log(res.data.success);
    if (res.data.success == "true") {
      Swal.fire({
        toast: true,
        icon: "success",
        title: "You Sent stockorder successfully , We will contact you soon",
        animation: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 6500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      showOrderRequestLoading.value = false;
      showCorrect.value = true;
    }
  } catch (err) {
    errors.value = err.response.data.errors;
    showOrderRequestLoading.value = false;
    console.log(errors.value);
  }
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
