<template>
  <div class="flex items-center mt-12 h-48  mb-12 justify-center" v-if="bookmarkStore.bookmarks.bookmarkwithproduct.length<1"><span class="text-5xl text-bold">No Favorites</span></div>
 <div v-show="isLoading" class="flex items-center mt-12 h-48  mb-12 justify-center">
  <img   class="w-20 h-20 absolute  left-1/2 -ml-2.5" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
</div>

  <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">

    <div
    v-for="product in bookmarkStore.bookmarks.bookmarkwithproduct"
      :key="product.id"
    class="relative max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
  <span 
        @click="removeFromBookmark(product.id)"
        class="absolute right-0 top-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 mx-1 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-red-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    <router-link :to="`/detailview/${product.id}`">
      <img
        class="p-8 ml-10 h-60 w-full rounded-t-lg"
        :src="product.image_name" alt="product name"
      
      />
    </router-link>
    <div class="px-5 pb-5">
      <a href="#">
        <h5
          class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
        {{ product.name }}
        </h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>First star</title>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Second star</title>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Third star</title>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Fourth star</title>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Fifth star</title>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
          >5.0</span
        >
      </div>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-gray-900 dark:text-white"
          >${{ product.price }}</span
        >
        <router-link
        :to="`/detailview/${product.id}`"
          
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Add to cart</router-link
        >
      </div>
    </div>
  </div>
    <!-- <div
      v-for="product in products"
      :key="product.id"
      class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-grey-50 h-[470px]"
    >
      <img :src="product.image_name" alt="" class="w-full h-40 object-cover" />
      <h4 class="mt-4 text-lg font-bold">{{ product.name }}</h4>
      <h4 class="mt-4 text-lg font-bold">{{ product.slug }}</h4>
      <h4 class="mt-4 text-lg font-bold">{{ product.description }}</h4>
      <h4 class="mt-4 text-lg font-bold">{{ product.price }}</h4>
      <h4 class="mt-4 text-lg font-bold">{{ product.sale_price }}</h4>

      <div class="flex justify-between items-centere mt-2">
        <router-link
          :to="{ name: 'DetailView', params: { id: product.id } }"
          class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
        >
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
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>

          Add To Cart
        </router-link>
      </div>
    </div> -->
  </div>
  
  
<div >

  <!-- <div v-for="product in bookmarkStore.bookmarks.bookmarkwithproduct"
      :key="product.id"
   
  >
   <div  class="grid z-0 grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-4">
    <div
    
      class="relative max-w-sm bg-white z-3 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <span 
        @click="removeFromBookmark(product.id)"
        class="absolute right-0 top-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 mx-1 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-red-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
      <a href="#" >
        <img
          class="p-8 ml-10 h-60 w-full rounded-t-lg object-fill"
          :src="product.image_name"
          alt="product name"
        />
      </a>
      <div class="px-5 pb-5" >
        <a href="#">
          <h5
            class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            {{ product.name }}
          </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5" >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>First star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Second star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Third star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fourth star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Fifth star</title>
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
            >5.0</span
          >
        </div>
        <div class="flex items-center justify-between" >
          <span class="text-3xl font-bold text-gray-900 dark:text-white"
            >${{ product.price }}</span
          >
          <router-link
            :to="`/detailview/${product.id}`"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Add to cart</router-link
          >
        </div>
      </div>
    </div>
   </div>
</div> -->
  </div>

  <!-- <div class="flex items-center justify-center p-2">
                <v-pagination
                    class="p-10"
                    v-model="page"
                    :pages="pageCount"
                    :range-size="1"
                    active-color="#337aff"
                    @update:modelValue="getProducts"
                />
            </div> -->
</template>

<script setup>
import { useBookmarkStore } from "../stores/bookmark-store";
import { useUserStore } from "../stores/user-store";
import Swal from "sweetalert2";
import axios  from "axios";
const bookmarkStore = useBookmarkStore();
const userStore = useUserStore();

const removeFromBookmark = async (bookmark) => {
        Swal.fire({
            title: 'Are you sure you want to remove this favorite form bookmark?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Remove it!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete('http://127.0.0.1:8000/api/bookmark/' + bookmark)
                    bookmarkStore.fetchBookmarksByUserId(userStore.id)
                    Swal.fire(
                        'Removed!',
                        'Your favorite has been Removed.',
                        'success'
                    )
                } catch (err) {
                    console.log(err)
                }
            }
        })
    }


// import {useRoute, useRouter} from 'vue-router'
// import VPagination from "@hennge/vue3-pagination";
//     import "@hennge/vue3-pagination/dist/vue3-pagination.css";
// import {computed,onMounted,ref} from 'vue'

// import axios from 'axios'

//        let page = ref(1)
//        let posts = ref(null)
//         let pageCount = ref(null)
//         const route=useRoute()
//         const products=ref([])
//         const isLoading=ref(false)

//      onMounted(async() => {
//       isLoading.value=true

//      setTimeout(() => {
//       getProducts()
//      }, 1000);

//     })

//     const getProducts=async()=>{
//     let res=await axios.get('http://127.0.0.1:8000/api/products?page=' + page.value)

//     pageCount.value = res.data.page_count
//     products.value = res.data.products.data
//     console.log('response',res);
//     if(res.data.products.data){
//       isLoading.value=false;
//     }
//     // products.value=response.data.products
//     // console.log(products.value)

//    }

// // import axios from "axios";
// // export default {
// //   data() {
// //     return {
// //       products: {},
// //     };
// //   },
// //   created() {
// //     this.getProducts();
// //   },
// //   methods: {
// //     getProducts() {

// //       let response=await axios.get('http://127.0.0.1:8000/api/products')
// //       console.log('response',response);
// //       this.products=response.data.products
// //     console.log(products.value)
// //     },

// //     const getProducts=async()=>{
// //     let response=await axios.get('http://127.0.0.1:8000/api/products')
// //     console.log('response',response);

// //     products.value=response.data.products
// //     console.log(products.value)

// //    }

//     //     save(){
//     //       if(this.employee.id==''){
//     //         this.saveData();
//     //       }
//     //       else{
//     //         this.updateData();
//     //       }
//     //     },
//     //     saveData(){
//     //         axios.post("http://127.0.0.1:8000/api/save",this.employee)
//     //         .then(({data})=>{
//     //             alert("Saved")
//     //             this.EmployeeLoad();
//     //         })
//     //     },
//     //     edit(employee){
//     //         this.employee=employee
//     //     },

//     //     updateData(){
//     //        var editrecords='http://127.0.0.1:8000/api/update/'+this.employee.id;
//     //        axios.put(editrecords,this.employee)
//     //        .then(({data})=>{
//     //         this.employee.name="",
//     //         this.employee.address="",
//     //         this.employee.mobile="",
//     //         this.id="",
//     //         alert("updated");
//     //         this.EmployeeLoad();
//     //        })
//     //     },
//     //     remove(employee){
//     //         var url=`http://127.0.0.1:8000/api/delete/${employee.id}`
//     //         axios.delete(url)
//     //         alert("Deleted");
//     //         this.EmployeeLoad();
//     //     }
//     // }
</script>

<style scoped></style>
