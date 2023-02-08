<template>

  
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
  
    <div
      class="grid  grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
      <router-link :to="`/detailview/${product.id}`" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden" >
          
            <img  class=" h-60 w-full rounded-t-lg " :src="product.image_name" alt="">
         
          <div class="p-4">
            <!-- <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{{product.subcategory1}}</span> -->
            <h2 class="mt-2 mb-2  font-bold">{{product.name}}</h2>
                         
            <div class="flex items-center mt-1">
              <span class="text-sm font-semibold">Et</span>&nbsp;<span class="font-bold text-xl">{{product.sale_price}}</span>&nbsp;<span class="text-sm font-semibold">birr</span>
               </div>
  
           
  
          </div>
     
  
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
  
  
  import {useRoute, useRouter} from 'vue-router'
  import VPagination from "@hennge/vue3-pagination";
      import "@hennge/vue3-pagination/dist/vue3-pagination.css";
  import {computed,onMounted,ref,watch} from 'vue'
  
  import axios from 'axios'
  
         let page = ref(1)
         
         let posts = ref(null)
          let pageCount = ref(null)
          const route=useRoute()
          const products=ref([])
          const isLoading=ref(false)
  
       onMounted(async() => {
        isLoading.value=true
        getProducts()

      })
  
     
  
      const getProducts=async()=>{
      let res=await axios.get('http://127.0.0.1:8000/api/products/electronics/desktopcomputers?page=' + page.value)
      
      pageCount.value = res.data.page_count
      products.value = res.data.products.data
      console.log('response',res);
      if(res.data.products.data){
        isLoading.value=false;
      }
      // products.value=response.data.products
      // console.log(products.value)
  
     }
   
     const getStars =  (star,starlength) => {
  
  console.log(star)
 
const value = star.reduce((total,e)=>{
console.log(e.stars_rated);
   console.log("star length",starlength)
  return Math.ceil( total+Number(e.stars_rated)/starlength);
},0)
console.log(value);
return value;
     }
  
  
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
