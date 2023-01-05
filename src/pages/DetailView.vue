<template>
  <div>
    <TopNavigation />
    <NavigationVue></NavigationVue>
    <!-- {{ route.params.id }}
    {{ userStore }}
    {{ filtereProducts }} -->
    <!-- {{ bookmarkStore.bookmarks.quantity }} -->
    
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
      <router-link to="/" class="flex flex-wrap m-10">
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
        v-for="item in filtereProducts"
        :key="item.id"
      >
        <div class="w-75% lg:flex">
          <div
            class="h-60 lg:h-auto m-4 lg:w-60 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          >
            <img :src="item.image_name" alt="" width="600" class="h-60" />
          </div>
          <div
            class="border-r max-w-md mb-10 border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r lg:rounded-l p-4 flex flex-col justify-between leading-normal"
          >
            <div class="mb-8">
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
                {{ item.name }}
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">
                {{ item.slug }}
              </div>
              <div class="text-gray-900 font-bold text-xl mb-2">
                {{ item.category }}
              </div>
              <div class="text-gray-900 font-bold text-xl mb-2">
                {{ item.subcategory }}
              </div>
              <div class="text-gray-900 font-bold text-xl mb-2">
                {{ item.subcategory1 }}
              </div>
              <p class="text-gray-700 text-base">
                {{ item.description }}
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
                >${{ item.price }}</span
              >
        
             

              <div class="mt-5 mb-5">
                
                <span v-if="rateCount>=1"><i class="fa fa-star checked" style="font-size:25px;"></i></span>
              <span v-else><i class="fa fa-star " style="font-size:25px;"></i></span>
              <span v-if="rateCount>=2"><i class="fa fa-star checked" style="font-size:25px;"></i></span>
              <span v-else><i class="fa fa-star " style="font-size:25px;"></i></span>
              <span v-if="rateCount>=3"><i class="fa fa-star checked" style="font-size:25px;"></i></span>
              <span v-else><i class="fa fa-star " style="font-size:25px;"></i></span>
              <span v-if="rateCount>=4"><i class="fa fa-star checked" style="font-size:25px;"></i></span>
              <span v-else><i class="fa fa-star " style="font-size:25px;"></i></span>
              <span v-if="rateCount>=5"><i class="fa fa-star checked" style="font-size:25px;"></i></span>
              <span v-else><i class="fa fa-star " style="font-size:25px;"></i></span>
              <span class="mb-4 text-xl ml-2 text-amber-500">{{ rateCount}}</span> 
            </div>


              <div v-if="showRate" class="rating-css bg-slate-50">
                <div class="star-icon">
                  <input
                    type="radio"
                    value="1"
                    v-model="product_rating"
                    checked
                    id="rating1"
                  />
                  <label for="rating1" class="fa fa-star"></label>
                  <input
                    type="radio"
                    value="2"
                    v-model="product_rating"
                    id="rating2"
                  />
                  <label for="rating2" class="fa fa-star"></label>
                  <input
                    type="radio"
                    value="3"
                    v-model="product_rating"
                    id="rating3"
                  />
                  <label for="rating3" class="fa fa-star"></label>
                  <input
                    type="radio"
                    value="4"
                    v-model="product_rating"
                    id="rating4"
                  />
                  <label for="rating4" class="fa fa-star"></label>
                  <input
                    type="radio"
                    value="5"
                    v-model="product_rating"
                    id="rating5"
                  />
                  <label for="rating5" class="fa fa-star"></label>
                </div>
                <span class="ml-10 mt-10">
                  <button class="p-2 ml-2 bg-gray-500 rounded" @click="showRate=false">cancel</button>
                <button class="p-2 ml-2 bg-green-600 rounded" @click="rateProduct(product_rating,item.id)">submit</button>
                </span>
              </div>
             
            </div>
      
            <div class="flex items-center justify-between">
              
           
              
              <button
              @click="showRate=true"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Rate this product
              </button>
              
              <span>
                <button @click="likeIt(item.id)">
                  <small class="mb-4">{{ item.likes.length }}</small>
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
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </button>
              </span>

              <span>
                <button @click="addToBookmark(item.name)">
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
                @click="addToCart(item.name)"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to Cart
              </button>
              <!-- <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
        <p class="text-gray-600">Aug 18</p>
      </div> -->
            </div>
          </div>
        </div>

        <!-- <div
          class="py-4 px-6 shadow-md bg-white hover:bg-grey-50 h-[470px]"
        >
          <img :src="item.image_name" alt="" class=" h-48 object-cover" />
          <h4 class="mt-4 text-lg font-bold">{{ item.name}}</h4>
          <h4 class="mt-4 text-lg font-bold">{{ item.slug}}</h4>
          <h4 class="mt-4 text-lg font-bold">{{ item.description}}</h4>
          <h4 class="mt-4 text-lg font-bold">{{ item.price}}</h4>
          <h4 class="mt-4 text-lg font-bold">{{ item.sale_price}}</h4>
          
          <div class="flex justify-between items-centere mt-2">
             <button  @click="addToCart(item.name)" class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
>
              Add To Cart
            </button>
            
          </div>
        </div> -->
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
const products = ref([]);
const store = useStore();
const isLoading = ref(false);
const userStore = useUserStore();
const cartStore = useCartStore();

const bookmarkStore = useBookmarkStore();

onMounted(async () => {
  isLoading.value = true;
  getProducts();
  getRates();
  user.value = store.state.user.data;
  console.log("abe");
  console.log(user.value.id);
});

const rateProduct = async (stars_rated,product_id) => {

  let response = await axios.post("http://127.0.0.1:8000/api/add-rate", {
    stars_rated:stars_rated,
    product_id: product_id,
    user_id: userStore.id,
  });
  showRate.value=false
  getRates();
  console.log("response from rateProduct function", response.data.totalRateGiven);
  Swal.fire({
        toast: true,
        icon: "success",
        title: "" + response.data.status + " " + "",
        animation: true,
        position: "center",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      

 
};



const likeIt = async (id) => {
  console.log("I like it");
  let response = await axios.post("http://127.0.0.1:8000/api/saveLike", {
    product_id: id,
    user_id: userStore.id,
  });
  console.log("response", response);
  getProducts();
  likeCount.value += 1;

  // if (response.data.products) {
  //   isLoading.value = false;
  // }
  // products.value = response.data.products;
  // console.log(products.value);
};

const getProducts = async () => {
  let response = await axios.get("http://127.0.0.1:8000/api/fromallproducts");
  console.log("response", response);
  if (response.data.products) {
    isLoading.value = false;
  }
  products.value = response.data.products;
  console.log(products.value);
};


const getRates = async () => {
  let response = await axios.get("http://127.0.0.1:8000/api/rates/"+route.params.id);
  console.log("totalrate", response.data.totalRateGiven);
  rateCount.value = Math.ceil(response.data.totalRateGiven);
  
};

// const  getProducts=async() =>{
//             var page = "http://127.0.0.1:8000/api/products";
//           await  axios.get(page).then(({ data }) => {
//                 console.log(data);
//                 products.value= data;
//                 console.log('kebede')
//                 console.log(products.value)
//             });
//         }

const filtereProducts = computed(() => {
  return products.value.filter((item) => item.id == route.params.id);
});

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
};

const addToBookmark = async (title) => {
  //  if(bookmarkStore.bookmarks.quantity>0){
  //   Swal.fire({
  //        toast: true,
  //        icon: "error",
  //        title: "The  " + title + " " + "is already exsist",
  //        animation: true,
  //        position: "top-end",
  //        showConfirmButton: false,
  //        timer: 2000,
  //        timerProgressBar: true,
  //        didOpen: (toast) => {
  //          toast.addEventListener("mouseenter", Swal.stopTimer);
  //          toast.addEventListener("mouseleave", Swal.resumeTimer);
  //        },
  //      });

  //      return
  //  }
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
</style>
