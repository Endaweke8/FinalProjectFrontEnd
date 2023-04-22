<template>
  <!-- Modal toggle -->
  <div class="italic mb-3">
    <div class="text-3xl font-bold">Products</div>
  </div>
  <div class="flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
    <label for="table-search" class="sr-only">Search</label>
    <div class="relative">
      <div
        @click="searchProduct(queryProduct)"
        class="flex absolute inset-y-0 right-0 bg-blue-500 rounded items-center pl-3 hover:cursor-pointer"
      >
        <svg
          class="w-5 h-5 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
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
        v-model="queryProduct"
        @keyup="searchProduct(queryProduct)"
        type="text"
        id="table-search-users"
        class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search for products"
      />
    </div>
  </div>

  <!-- Main modal -->
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
  <div v-if="noProductDisplay">
    <div
      v-if="products.length < 1"
      class="flex items-center mt-12 h-48 mb-12 justify-center"
    >
      <div class="text-3xl">Sorry searched Products not found</div>
    </div>
  </div>
  <div class="shadow-2xl shadow-gray-700">
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Id</th>
            <th scope="col" class="py-3 px-6">
              Image<span class="sr-only">Image</span>
            </th>
            <th scope="col" class="py-3 px-6">Name</th>
            <th scope="col" class="py-3 px-6">Category</th>
            <th scope="col" class="py-3 px-6">Subcategory</th>
            <th scope="col" class="py-3 px-6">Subcategory1</th>
            <th scope="col" class="py-3 px-6">Slug</th>
            <!-- <th scope="col" class="py-3 px-6">Description</th> -->
            <th scope="col" class="py-3 px-6">Price</th>
            <th scope="col" class="py-3 px-6">Sale_price</th>
            <th scope="col" class="py-3 px-6">Product Quantity</th>
            <th scope="col" class="py-3 px-6">Posted at</th>
            <th scope="col" class="py-3 px-6">Updated at</th>
            <th colspan="2" scope="col" class="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in products"
            :key="product.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ product.id }}
            </td>
            <td class="p-4 w-32">
              <a
                :href="
                  `${endpoint}/images/productprofiles/` + product.image_name
                "
                target="_blank"
              >
                <img
                  :src="
                    `${endpoint}/images/productprofiles/` + product.image_name
                  "
                  alt="Apple Watch"
                />
              </a>
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ product.name }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ product.category }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ product.subcategory }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ product.subcategory1 }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ product.slug }}
            </td>
            <!-- <td class="py-4 overflow-hidden px-6 font-semibold text-gray-900 dark:text-white">
              {{ product.description }}
            </td> -->
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ product.price }} birr
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ product.sale_price }} birr
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ product.productquantity }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ filterTime(product.created_at) }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ filterTime(product.updated_at) }}
            </td>
            <td class="py-4 px-6">
              <router-link
                :to="`/viewproductstoredetails/${product.id}`"
                class="font-medium text-green-600 dark:text-red-500 hover:underline"
                ><svg
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
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </router-link>
              View Details
            </td>
            <td class="py-4 px-6" v-if="userStore.role == 'socialmediamanager'">
              <router-link
                :to="`/editproduct/${product.id}`"
                class="font-medium text-green-600 dark:text-red-500 hover:underline"
                ><svg
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
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </router-link>
              Edit Product
            </td>
            <!-- <td class="py-4 px-6">
              <button
                @click="deleteProduct(product)"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                ><svg
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Remove Product
              </button>
            </td> -->

            <td class="py-4 px-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span> Add More Image</span>
              <input type="file" @change="getImagePath" name="" id="" />
              <button
                @click="addImage(product.id)"
                class="font-medium bg-green-600 text-white rounded-lg mt-2 p-3 dark:text-red-500"
              >
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex items-center justify-center p-2">
    <v-pagination
      class="p-10"
      v-model="page"
      :pages="pageCount"
      :range-size="1"
      active-color="#337aff"
      @update:modelValue="getAllProducts"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { useUserStore } from "../stores/user-store";

let products = ref([]);
const showModal = ref(false);
let page = ref(1);
let pageCount = ref(null);
const isLoading = ref(false);
const noProductDisplay = ref(false);
const findTime = ref(0);
const userStore = useUserStore();
const errors = ref([]);

const endpoint = import.meta.env.VITE_APP_API_URL;

const imagepath = ref("");
const product_id = ref("");

onMounted(async () => {
  isLoading.value = true;
  getAllProducts();
});

const imagePath = ref("");

function getImagePath(e) {
  const file = e.target.files[0];
  let reader = new FileReader();
  reader.onloadend = () => {
    imagePath.value = reader.result;
    console.log(imagePath.value);
  };

  reader.readAsDataURL(file);
  //  var form=new FormData();
  //  form.append('image',file);

  //  axios.post("http://127.0.0.1:8000/api/getImagePath",form).then((res)=>{
  //     imagePath.value=res.data;
  //     imagepath.value=imagePath.value;
  //     console.log(imagepath.value);
  //  });

  //  console.log(file)
}

const addImage = async (id) => {
  console.log(endpoint);
  // errors.value = [];
  product_id.value = id;
  try {
    const res = await axios.post(`${endpoint}/api/saveimage`, {
      imagepath: imagePath.value,
      product_id: product_id.value,
    });

    console.log(res);
    Swal.fire({
      toast: true,
      icon: "success",
      title: "You added Image successfully ",
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
  } catch (err) {
    // errors.value = err.response.data.errors;
    console.log(err);
  }
};

const getAllProducts = async () => {
  let res = await axios.get(
    "http://127.0.0.1:8000/api/get_all_products?page=" + page.value
  );
  isLoading.value = false;
  pageCount.value = res.data.page_count;
  products.value = res.data.products.data;

  console.log("response", res);
};

const searchProduct = async (query) => {
  noProductDisplay.value = true;
  isLoading.value = true;
  let res = await axios.post(
    "http://127.0.0.1:8000/api/searchproduct?page=" + page.value,
    {
      searchData: query,
    }
  );
  isLoading.value = false;
  pageCount.value = res.data.page_count;
  products.value = res.data.products.data;

  console.log("response", res);
};

const deleteProduct = async (product) => {
  Swal.fire({
    title: "Are you sure you want to delete this?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete("http://127.0.0.1:8000/api/product/" + product.id);
        getAllProducts();
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      } catch (err) {
        console.log(err);
      }
    }
  });
};

const filterTime = (created_at) => {
  const currentTime = new Date();

  findTime.value = parseInt((currentTime - Date.parse(created_at)) / 1000);
  if (findTime.value > 60) {
    findTime.value = parseInt(
      (currentTime - Date.parse(created_at)) / (1000 * 60)
    );
    if (findTime.value > 60) {
      findTime.value = parseInt(
        (currentTime - Date.parse(created_at)) / (1000 * 60 * 60)
      );

      if (findTime.value > 24) {
        findTime.value = parseInt(
          (currentTime - Date.parse(created_at)) / (1000 * 60 * 60 * 24)
        );
        if (findTime.value >= 7) {
          findTime.value = parseInt(
            (currentTime - Date.parse(created_at)) / (1000 * 60 * 60 * 24 * 7)
          );
          if (findTime >= 4) {
            findTime.value = parseInt(
              (currentTime - Date.parse(created_at)) /
                (1000 * 60 * 60 * 24 * 7 * 4)
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
};
</script>

<style scoped></style>
