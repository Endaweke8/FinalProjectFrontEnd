<template>
  <div>
    <TopNavigation />
    <NavigationVue></NavigationVue>
    <!-- {{ route.params.id }}
    {{ userStore }}
    {{ filtereProducts }} -->
    <!-- {{ bookmarkStore.bookmarks.quantity }} -->
    <div class="text-gray-900 font-sans p-6">
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
        <router-link to="/" class="flex flex-wrap mt-10">
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
      </div>
    </div>

    <div>
      <Carausel
        class="lg:max-h[130vh] lg:h-[100vh] max-h[100vh] h-[50vh] z-1 m-10"
        v-for="(slide, index) in filtereProducts"
        :key="index"
        v-slot="{ currentSlide }"
      >
        <Slide v-for="(slideimage, index) in slide.images" :key="index">
          <div
            v-show="currentSlide === index + 1"
            class="image-info flex items-center justify-center"
          >
            <a
              :href="
                `${endpoint}/images/moreproductimages/` + slideimage.imagepath
              "
              target="_blank"
            >
              <img
                :src="
                  `${endpoint}/images/moreproductimages/` + slideimage.imagepath
                "
                alt=""
                class="lg:h-[400px] lg:w-auto h-48 w-48 md:h-80 md:w-96 z-1"
              />
            </a>
          </div>
        </Slide>
      </Carausel>
    </div>
  </div>
  <div
    class="flex flex-col md:flex-row"
    v-for="item in filtereProducts"
    :key="item.id"
  >
    <!-- Product Image -->
    <div class="w-full md:w-1/3 ml-1 mr-12 mb-12">
      <a
        :href="`${endpoint}/images/productprofiles/` + item.image_name"
        target="_blank"
      >
        <img
          :src="`${endpoint}/images/productprofiles/` + item.image_name"
          :alt="item.name"
          width=""
          class="w-full lg:h-[400px] max-h[600px] object-contain"
        />
      </a>
      <div v-if="item.videopath">
        <div class="text-2xl italic mt-12">Video about the item</div>
        <iframe
          class="mt-3"
          height="250"
          width="400"
          :src="`${endpoint}/videos/productvideos/` + item.videopath"
        ></iframe>
      </div>
    </div>

    <!-- Product Details -->
    <div class="w-full md:w-2/3 p-4">
      <!-- Product Name -->
      <h1 class="text-2xl font-bold mb-4">
        Name :
        <span class="italic">
          {{ item.name }}
        </span>
      </h1>

      <h1 class="text-2xl font-extrabold text-tight">Product Description</h1>
      <p class="mb-4">
        {{ item.description }}
      </p>
      <h1 class="text-2xl font-extrabold text-tight">Product Features</h1>
      <div
        class="pl-6"
        v-for="feature in item.product_feature"
        :key="feature.id"
      >
        <li class="items-center">
          <span class="mr-12"> {{ feature.title }}</span>
          <span class="items-center justify-center">{{ feature.value }}</span>
        </li>
      </div>

      <!-- Product Price -->
      <div class="flex items-center justify-between mt-1">
        <span
          ><span class="text-2xl font-bold">Item Selling Price </span>:<span
            class="text-sm font-semibold"
            >Et</span
          >&nbsp;<span class="font-bold text-xl">{{ item.sale_price }}</span
          >&nbsp;<span class="text-sm font-semibold">birr</span></span
        >
        <span class="line-through"
          ><span class="text-sm font-semibold">Et</span>&nbsp;<span
            class="font-bold text-xl"
            >{{ item.price }} (5%off)</span
          >&nbsp;<span class="text-sm font-semibold">birr</span></span
        >
      </div>

      <!-- Product Options -->
      <span
        class="text-3xl mt-5 mb-5 font-bold italic text-gray-900 dark:text-white"
        >Available quantity :{{ item.productquantity }} items</span
      >
      <br />

      <div class="mt-5 mb-5">
        <span v-if="rateCount >= 1"
          ><i class="fa fa-star checked" style="font-size: 25px"></i
        ></span>
        <span v-else><i class="fa fa-star" style="font-size: 25px"></i></span>
        <span v-if="rateCount >= 2"
          ><i class="fa fa-star checked" style="font-size: 25px"></i
        ></span>
        <span v-else><i class="fa fa-star" style="font-size: 25px"></i></span>
        <span v-if="rateCount >= 3"
          ><i class="fa fa-star checked" style="font-size: 25px"></i
        ></span>
        <span v-else><i class="fa fa-star" style="font-size: 25px"></i></span>
        <span v-if="rateCount >= 4"
          ><i class="fa fa-star checked" style="font-size: 25px"></i
        ></span>
        <span v-else><i class="fa fa-star" style="font-size: 25px"></i></span>
        <span v-if="rateCount >= 5"
          ><i class="fa fa-star checked" style="font-size: 25px"></i
        ></span>
        <span v-else><i class="fa fa-star" style="font-size: 25px"></i></span>
        <span class="mb-4 text-xl ml-2 text-amber-500"
          >{{ rateCount }}
          <small class="text-black font-style-italic"
            >reviewed by {{ item.stars.length }} customer</small
          ></span
        >
      </div>

      <!-- Add to Cart Button -->
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
          <input type="radio" value="2" v-model="product_rating" id="rating2" />
          <label for="rating2" class="fa fa-star"></label>
          <input type="radio" value="3" v-model="product_rating" id="rating3" />
          <label for="rating3" class="fa fa-star"></label>
          <input type="radio" value="4" v-model="product_rating" id="rating4" />
          <label for="rating4" class="fa fa-star"></label>
          <input type="radio" value="5" v-model="product_rating" id="rating5" />
          <label for="rating5" class="fa fa-star"></label>
        </div>
        <span class="ml-10 my-3 flex items-center justify-center">
          <button
            class="p-2 ml-2 bg-gray-500 rounded"
            @click="showRate = false"
          >
            cancel
          </button>
          <button
            class="p-2 ml-2 bg-green-600 rounded"
            @click="rateProduct(product_rating, item.id)"
          >
            submit
          </button>
        </span>
      </div>

      <!-- Product Reviews -->

      <div class="flex items-center justify-between">
        <button
          @click="showRate = true"
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
          @click="addToCart(item.name, item.id, item.productquantity)"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add to Cart
        </button>
      </div>

      <div class="w-full mb-10">
        <div
          class="w-full bg-white p-2 pt-4 rounded shadow-lg border-t border-gray-200 mt-5"
        >
          <div class="flex ml-3">
            <div class="mr-3">
              <img
                class="h-10 w-10 rounded-full object-cover"
                :src="
                  userStore.image
                    ? userStore.image
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYheQxHYPSePkkyZVWqQ6SIdigc8mlJoOu0TqWYM&s'
                "
                alt="Commenter image"
              />
            </div>
            <div>
              <h1 class="font-semibold">
                {{ userStore.firstName }} {{ userStore.lastName }}
              </h1>
              <p class="text-xs text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </p>
            </div>
          </div>

          <div class="">
            <span>
              <textarea
                v-model="comment"
                @focus="errors = []"
                rows="3"
                class="border p-2 rounded w-2/3"
                placeholder="Write something here about the product ..."
              ></textarea>

              <p class="text-red-600" v-if="errors.comment">
                * {{ errors.comment[0] }}
              </p>
              <button
                @click="sendComment"
                class="px-4 py-2 ml-4 rounded font-light hover:bg-gray-300 hover:rounded-full"
              >
                <svg
                  class="w-10 h-10 hover:h-12 transition-colors duration-300 ease-in-out"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </span>
          </div>

          <div class="flex justify-between mx-3"></div>
        </div>
      </div>
      <div class="text-2xl italic">Comments</div>
      <div
        class="max-w-3xl mx-auto"
        v-for="comment in filtereProducts"
        :key="comment.id"
      >
        <div
          v-for="usercomment in comment.comments"
          :key="usercomment.id"
          class="bg-white rounded-lg shadow p-6"
        >
          <div class="flex items-center mb-4">
            <img
              class="w-10 h-10 rounded-full mr-4"
              :src="
                usercomment.userimage
                  ? usercomment.userimage
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsYheQxHYPSePkkyZVWqQ6SIdigc8mlJoOu0TqWYM&s'
              "
              alt="Avatar"
            />
            <div>
              <p class="font-bold">{{ usercomment.user_name }}</p>
              <p class="text-sm text-gray-600">
                Commented {{ filterTime(usercomment.created_at) }}
              </p>
            </div>
            <button
              @click="deleteComment(usercomment.id)"
              v-if="userStore.id == usercomment.user_id"
              class="ml-auto text-red-500 hover:bg-red-700 hover:rounded-full hover:p-2"
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            <!-- <button @click="editComment(usercomment.id,usercomment.comment),showModal('edit')" v-if="userStore.id==usercomment.user_id" class="ml-3 text-green-500 hover:bg-green-700 hover:rounded-full hover:p-2" >
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
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                
              
      </button> -->
          </div>
          <p class="text-gray-800 pl-[30px]">{{ usercomment.comment }}.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full bg-white overflow-x-scroll overflow-x-visible mt-[50px]">
    <div class="max-w-[1500px] mx-auto">
      <div class="text-3xl lg:text-4xl pt-4 font-extrabold m-2 italic">
        Related Items
      </div>
      <div class="flex justify-between items-stretch border-t border-gray-200">
        <div v-for="product in relatedproducts" :key="product.id">
          <div class="p-4 text-center mx-auto">
            <div class="h-auto w-auto max-h-[16rem] overflow-hidden">
              <img
                :src="
                  `${endpoint}/images/productprofiles/` + product.image_name
                "
              />
            </div>
            <a :href="`/detailview/${product.id}`">
              <div
                class="w-[160px] text-[12px] py-2 text-teal-600 font-extrabold hover:text-red-600 cursor-pointer"
              >
                {{ product.name.substring(0, 20) }}...
              </div>
            </a>
            <div class="flex justify-start">
              <div class="text-xs font-extrabold text-red-600 w-full text-left">
                Et {{ product.sale_price }}birr
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
import Carausel from "../components/Carausel.vue";
import Slide from "../components/Slide.vue";

const carauselSlides = ["bg-1", "bg-2", "bg-3"];

const endpoint = import.meta.env.VITE_APP_API_URL;

const route = useRoute();
const likeCount = ref(0);
const rateCount = ref(0);
const showRate = ref(false);
const product_rating = ref(1);
const user = ref([]);
const products = ref([]);
const store = useStore();
const isLoading = ref(false);
const userStore = useUserStore();
const cartStore = useCartStore();
const cartQuantity = ref(0);
const relatedproducts = ref([]);
const comment = ref("");
const findTime = ref(0);
let errors = ref([]);
const modalValue = ref("");

const bookmarkStore = useBookmarkStore();

onMounted(async () => {
  isLoading.value = true;
  getProducts();
  getRates();
  getRelatedProducts();
});

const sendComment = async () => {
  errors.value = [];
  try {
    await axios
      .post("http://127.0.0.1:8000/api/sendcomment", {
        comment: comment.value,
        product_id: route.params.id,
        user_id: userStore.id,
        user_name: userStore.firstName + " " + userStore.lastName,
        userimage: userStore.image,
      })
      .then((response) => {
        console.log(response);
        getProducts();
        if (response) {
          comment.value = "";
          Swal.fire({
            toast: true,
            icon: "success",
            title: "message sent successfuly",
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
            icon: "error",
            title: "Please try again",
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
        console.log(response);
      });
  } catch (err) {
    errors.value = err.response.data.errors;
  }
};

const showModal = (modal) => {
  modalValue.value = modal;
};

const editComment = async (id, commentvalue) => {
  comment.value = commentvalue;

  try {
    await axios
      .put(`${endpoint}/api/editusercomment/` + id, {
        comment: comment.value,
        product_id: route.params.id,
        user_id: userStore.id,
        user_name: userStore.firstName + " " + userStore.lastName,
        userimage: userStore.image,
      })
      .then((response) => {
        console.log(response);
        getProducts();
        if (response) {
          comment.value = "";
          Swal.fire({
            toast: true,
            icon: "success",
            title: "message sent successfuly",
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
            icon: "error",
            title: "Please try again",
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
        console.log(response);
      });
  } catch (err) {
    errors.value = err.response.data.errors;
  }
};

const deleteComment = async (id) => {
  Swal.fire({
    title: "Are you sure you want to delete this comment?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete("http://127.0.0.1:8000/api/comment/" + id);
        getProducts();
        Swal.fire("Deleted!", "Your comment has been Deleted.", "success");
      } catch (err) {
        console.log(err);
      }
    }
  });
};

const getImage = async (id) => {
  let response = await axios.get(
    "http://127.0.0.1:8000/api/getcommentimages/" + id
  );
  console.log(response.data.image);
  return response.data.image;
};

const getCommentUserName = async (id) => {
  let response = await axios.get(
    "http://127.0.0.1:8000/api/getcommentusername/" + id
  );
  console.log(response.data.name.name);
  return response.data.name;
};

const rateProduct = async (stars_rated, product_id) => {
  let response = await axios.post("http://127.0.0.1:8000/api/add-rate", {
    stars_rated: stars_rated,
    product_id: product_id,
    user_id: userStore.id,
  });
  showRate.value = false;
  getRates();
  getProducts();
  console.log(
    "response from rateProduct function",
    response.data.totalRateGiven
  );
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

const getRelatedProducts = async () => {
  let response = await axios.get(
    "http://127.0.0.1:8000/api/getrelatedproducts/" + route.params.id
  );
  console.log("related product response", response);

  relatedproducts.value = response.data.relatedproducts;
  console.log("related Products", relatedproducts.value);
};

const getRates = async () => {
  let response = await axios.get(
    "http://127.0.0.1:8000/api/rates/" + route.params.id
  );
  console.log("totalrate", response.data.totalRateGiven);
  rateCount.value = Math.ceil(response.data.totalRateGiven);
};

const filtereProducts = computed(() => {
  return products.value.filter((item) => item.id == route.params.id);
});

const addToCart = async (title, product_id, product_quantity) => {
  let res = await axios.get("http://127.0.0.1:8000/api/getcart/" + product_id);
  cartQuantity.value = res.data.cartQuantity;
  if (cartQuantity.value >= product_quantity) {
    Swal.fire({
      toast: true,
      icon: "error",
      title:
        "Sorry,You are ordering " +
        cartQuantity.value +
        " currently the available quantity of this product is " +
        product_quantity,
      animation: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    return;
  }
  console.log("cartresponse", res);

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
  filtereProducts();
};

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
.checked {
  color: #ffe400;
}

.unchecked {
  color: #e6e5dd;
}
.card-zoom {
  @apply flex items-center justify-center m-3 overflow-hidden shadow-xl w-96 h-96 rounded-2xl;
}
.card-zoom:hover .card-zoom-image {
  @apply scale-150;
}
.card-zoom-image:hover {
  @apply scale-150;
}

/* 
.carousel__item {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.carousel__prev,
.carousel__next {
    width: 40px;
    height: 200px;
    color: rgb(196, 196, 196);
    margin-top: -100px;
    border: transparent
}
.carousel__prev:hover,
.carousel__next:hover {
    width: 40px;
    height: 200px;
    color: rgb(212, 212, 212);
    margin-top: -100px;
    border: 3px solid rgb(217, 217, 217);
} */
/* 
.carausel{
  max-height: 200vh;
  height: 130vh;
  
} */
</style>
