<template>
<!-- <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
  <div class="container mx-auto">
    <div class="flex flex-wrap -mx-4"   v-for="product in products"
      :key="product.id">
      <div class="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
        <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden" >
        <div class="relative pb-48 overflow-hidden">
          <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="">
        </div>
        <div class="p-4">
          <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
          <h2 class="mt-2 mb-2  font-bold">Purus Ullamcorper Inceptos Nibh</h2>
          <p class="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <div class="mt-3 flex items-center">
            <span class="text-sm font-semibold">ab</span>&nbsp;<span class="font-bold text-xl">45,00</span>&nbsp;<span class="text-sm font-semibold">€</span>
          </div>
        </div>
        <div class="p-4 border-t border-b text-xs text-gray-700">
          <span class="flex items-center mb-1">
            <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
          </span>
          <span class="flex items-center">
            <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Ermäßigung mit Karte
          </span>        
        </div>
        <div class="p-4 flex items-center text-sm text-gray-600"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-yellow-500"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-current text-gray-400"><path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path></svg><span class="ml-2">34 Bewertungen</span></div>
      </a>
      </div>
   

    </div>
  </div>
</div> -->



<h1>Latest Posts</h1>





 <div class="antialiased bg-gray-200  text-gray-900 font-sans p-6">


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

  <div
    class="grid  grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4"
  >
    <div
      v-for="product in products"
      :key="product.id"
      class="hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
    <router-link :to="`/detailview/${product.id}`" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden" >
        
            <div v-if="filterTodayTime( product.created_at)">
              <img  class=" h-60 w-full rounded-t-lg " :src="product.image_name" alt="">
       
       <div class="p-4">
         <!-- <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{{product.subcategory1}}</span> -->
         <h2 class="mt-2 mb-2  font-bold">{{product.name}}</h2>
                      
         <div class="flex items-center mt-1">
           <span class="text-sm font-semibold">Et</span>&nbsp;<span class="font-bold text-xl">{{product.sale_price}}</span>&nbsp;<span class="text-sm font-semibold">birr</span>
            </div>

        

         <!-- <div class="mt-3 flex items-center">
           <span class="text-sm font-semibold">Et</span>&nbsp;<span class="font-bold text-xl">{{product.sale_price}}</span>&nbsp;<span class="text-sm font-semibold">birr</span>
         </div> -->
       </div>
       <!-- <div class="p-4 border-t border-b text-xs text-gray-700">
         <span class="flex items-center mb-1">
           <i class="far fa-clock fa-fw mr-2 text-gray-900"></i>posted {{ filterTime( product.created_at)}}
         </span>
         <span class="flex items-center mb-1" >
           <i class="fa fa-users mr-2" aria-hidden="true"></i> reviewed by {{ product.stars.length}} person
         </span>
               
       </div> -->
       <!-- <div class="p-4 flex items-center border-t border-b text-sm text-gray-600"> 
         <div class="flex items-center">
           <span class="text-sm font-semibold">Et</span>&nbsp;<span class="font-bold text-xl">{{product.sale_price}}</span>&nbsp;<span class="text-sm font-semibold">birr</span>
         </div>
         <div
       
           class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
           >Ad to cart</div
         ></div> -->

         <div class="flex items-center justify-between mb-2 ml-2 mr-2 border-t border-gray-300">

            <div >
               
               <span ><i :class="getStars(product.stars,product.stars.length)>=1?'checked':'unchecked'" class="fa fa-star" style="font-size:20;"></i></span>
            
             <span ><i :class="getStars(product.stars,product.stars.length)>=2?'checked':'unchecked'" class="fa fa-star" style="font-size:20;"></i></span>
             
             <span ><i :class="getStars(product.stars,product.stars.length)>=3?'checked':'unchecked'" class="fa fa-star" style="font-size:20;"></i></span>
             
             <span ><i :class="getStars(product.stars,product.stars.length)>=4?'checked':'unchecked'" class="fa fa-star" style="font-size:20;"></i></span>
            
             <span ><i :class="getStars(product.stars,product.stars.length)>=5?'checked':'unchecked'" class="fa fa-star" style="font-size:20;"></i></span>
             
             
           </div>
            
             <button
               
               class="text-white mt-1 bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             >
               Add to Cart
             </button>

           </div>
            </div>
        </router-link>
    </div>
   
  </div>

  <div class="flex items-center justify-center p-2">
    <v-pagination
      class="p-10"
      v-model="page"
      :pages="pageCount"
      :range-size="1"
      active-color="#337aff"
      @update:modelValue="getProducts"
    />
  </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { computed, onMounted, ref, watch } from "vue";

import axios from "axios";

let page = ref(1);
let posts = ref(null);
let pageCount = ref(null);
const route = useRoute();
const products = ref([]);
var sum = ref(0);
const isLoading = ref(false);
const findTime = ref(0);
const rateCount=ref(0);
const findTodayTime=ref(0);

onMounted(async () => {
  isLoading.value = true;

  setTimeout(() => {
    getProducts();
  }, 1000);
});

const addStar = (star, length) => {
  sum.value = 2;
  sum.value += star;
  sum.value = eval(parseInt(sum.value));
  return sum.value;
};

const getProducts = async () => {
  let res = await axios.get(
    "http://127.0.0.1:8000/api/products?page=" + page.value
  );

  pageCount.value = res.data.page_count;
  products.value = res.data.products.data;
  count.value=0;
  console.log("response", res);
  if (res.data.products.data) {
    isLoading.value = false;
  }
};

const count=ref(0);
const getStars =  (star,starlength) => {
  
  console.log(star)
 
const value = star.reduce((total,e)=>{
console.log(e.stars_rated);
   console.log("star length",starlength)
  return Math.ceil( total+Number(e.stars_rated)/starlength);
},0)
console.log(value);
return value;


 
  // let response = await axios.get("http://127.0.0.1:8000/api/rates/"+id);
  // console.log("totalProductrate", response.data.totalRateGiven);
  // return Math.ceil(response.data.totalRateGiven)
  
};



const filterTime = (created_at) => {
  const currentTime = new Date();

  findTime.value = parseInt((currentTime - Date.parse(created_at)) / (1000));
  if(findTime.value>60)
  {
    findTime.value = parseInt((currentTime - Date.parse(created_at)) / (1000*60));
    if(findTime.value>60)
  {
    findTime.value = parseInt((currentTime - Date.parse(created_at)) / (1000 * 60*60));
     
  if (findTime.value > 24) {
    findTime.value =parseInt((currentTime - Date.parse(created_at)) / (1000 * 60 * 60 * 24));  
    if (findTime.value >= 7) {
      findTime.value = parseInt(
        (currentTime - Date.parse(created_at)) / (1000 * 60 * 60 * 24 * 7)
      );
      if (findTime >= 4) {
        findTime.value = parseInt(
          (currentTime - Date.parse(created_at)) / (1000 * 60 * 60 * 24 * 7 * 4)
        );
        return `${findTime.value} monthes ago`;
      }
      return `${findTime.value} weeks ago`;
    }
    return `${findTime.value} days ago`;
  } 
    return `${findTime.value} hours ago`;
  }

    return `${findTime.value} minutes ago`;
  }
 
  return `${findTime.value} seconds ago`;

}


const filterTodayTime = (created_at) => {
  const currentTime = new Date();

findTodayTime.value = parseInt((currentTime - Date.parse(created_at)) / (1000));
if(findTodayTime.value>60)
{
  findTodayTime.value = parseInt((currentTime - Date.parse(created_at)) / (1000*60));
  if(findTodayTime.value>60)
{
  findTodayTime.value = parseInt((currentTime - Date.parse(created_at)) / (1000 * 60*60));
   
if (findTodayTime.value < 24) {
  
  return `${findTodayTime.value} hoursss ago`;
} 
  else{
   return 
  }
}

  return `${findTodayTime.value} minutes ago`;
}

return `${findTodayTime.value} seconds ago`;
 
}
//  res = filterByLastMins(60, a);
//  console.log(res);
//   // products.value=response.data.products
//   // console.log(products.value)

//  }
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
    color:#424139
  }
</style>
