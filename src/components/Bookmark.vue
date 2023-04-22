<template>
  <div v-if="!bookmarkStore.bookmarks">
    <div
      class="flex items-center mt-12 h-48 mb-12 justify-center"
      v-if="!bookmarkStore.bookmarks"
    >
      <span class="text-5xl text-bold">No Favorites</span>
    </div>
  </div>
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

  <div v-if="bookmarkStore.bookmarks">
    <div class="antialiased text-gray-900 font-sans p-6">
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
        class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4"
      >
        <div
          v-for="product in bookmarkStore.bookmarks.bookmarkwithproduct"
          :key="product.id"
          class="hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="relative">
            <span
              @click="removeFromBookmark(product.id)"
              class="z-1 absolute right-0 top-0"
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
          </div>
          <router-link
            :to="`/detailview/${product.id}`"
            class="c-card block mt-10 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
          >
            <div class="items-center justify-center flex">
              <img
                class="h-60 w-auto rounded-t-lg"
                :src="
                  `${endpoint}/images/productprofiles/` + product.image_name
                "
                :alt="product.name"
              />
            </div>

            <div class="p-4 w-full">
              <!-- <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">{{product.subcategory1}}</span> -->
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
              <button
                class="text-white mt-1 bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to Cart
              </button>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>

  <div></div>
</template>

<script setup>
import { useBookmarkStore } from "../stores/bookmark-store";
import { useUserStore } from "../stores/user-store";
import Swal from "sweetalert2";
import axios from "axios";
const bookmarkStore = useBookmarkStore();
const userStore = useUserStore();
const endpoint = import.meta.env.VITE_APP_API_URL;

const removeFromBookmark = async (bookmark) => {
  Swal.fire({
    title: "Are you sure you want to remove this favorite form bookmark?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, Remove it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete("http://127.0.0.1:8000/api/bookmark/" + bookmark);
        bookmarkStore.fetchBookmarksByUserId(userStore.id);
        Swal.fire("Removed!", "Your favorite has been Removed.", "success");
      } catch (err) {
        console.log(err);
      }
    }
  });
};

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
