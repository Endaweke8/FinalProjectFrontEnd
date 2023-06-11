<template>
  <div class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
    <div class="relative">
      <span class="text-gray-900 text-xl">Product Store details</span>
      <span
        class="top-0 right-0 absolute"
        v-if="userStore.role == 'socialmediamanager'"
      >
        <button class="bg-gray-500 rounded py-2 px-4 text-white">
          <router-link
            :to="`/editproduct/${route.params.id}`"
            class="font-medium text-green-600 dark:text-red-500 hover:underline"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
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
          Edit
        </button>
      </span>
    </div>
    <div class="bg-gray-500 w-full h-1 mt-8"></div>

    <!-- <CropperModal
        
        v-if="showModal"
            :minAspectRatioProp="{width: 8, height: 8}"
            :maxAspectRatioProp="{width: 8, height: 8}"
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        /> -->

    <div class="flex flex-wrap mt-4 mb-6">
      <a
        :href="`${endpoint}/images/productprofiles/` + image_name"
        target="_blank"
      >
        <img
          :src="`${endpoint}/images/productprofiles/` + image_name"
          class="h-60 w-60"
        />
      </a>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <span class="text-xl mb-3"
          >Name of The product : <span class="text-xl">{{ name }}</span></span
        >
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <span class="text-xl mb-3"
          >Category of The product :
          <span class="text-xl">{{ category }}</span></span
        >
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <span class="text-xl mb-3"
          >SubCategory of The product :
          <span class="text-xl">{{ subcategory }}</span></span
        >
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <span class="text-xl mb-3"
          >Subcategory1 of The product :
          <span class="text-xl">{{ subcategory1 }}</span></span
        >
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <span class="text-xl mb-3">Description of The product : </span>
        <br />
        <span class="text-small font-thin">{{ description }}</span>
      </div>
    </div>
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <span class="text-xl mb-3">Product Features of the product : </span>
        <ul class="list-disc">
          <li class="ml-10" v-for="product_feature in product_features">
            <span> {{ product_feature.title }} :-</span>
            <span class="ml-3">{{ product_feature.value }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <span class="text-xl mb-3"
          >Quantity of The product :
          <span class="text-xl">{{ productquantity }}</span></span
        >
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <span class="text-xl mb-3"
          >Slug of The product : <span class="text-xl">{{ slug }}</span></span
        >
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <span class="text-xl mb-3"
          >Price of The product : <span class="text-xl">{{ price }}</span></span
        >
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <span class="text-xl mb-3"
          >Sale Price of The product :
          <span class="text-xl">{{ sale_price }}</span></span
        >
      </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full px-3">
        <span class="text-xl mb-3"
          >Buying Price of The product :
          <span class="text-xl">{{ buying_price }}</span></span
        >
      </div>
    </div>

    <div class="border-4 mb-12 border-gray-400 shadow-2xl shadow-gray-700">
      <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-500 text-white dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="py-3 px-6">Id</th>
              <th scope="col" class="py-3 px-6">
                Image<span class="sr-only">Image</span>
              </th>
              <!-- <th scope="col" class="py-3 px-6">Posted at</th>
              <th scope="col" class="py-3 px-6">Updated at</th>
              <th colspan="col" scope="col" class="py-3 px-6">Edit</th>
              <th colspan="col" scope="col" class="py-3 px-6">Remove</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="image in images"
              :key="image.id"
              class="bg-white border-b border-gray-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {{ image.id }}
              </td>
              <td class="p-4 w-32">
                <a
                  :href="
                    `${endpoint}/images/moreproductimages/` + image.imagepath
                  "
                  target="_blank"
                >
                  <img
                    :src="
                      `${endpoint}/images/moreproductimages/` + image.imagepath
                    "
                    :alt="image.imagepath"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import SubmitFormButton from "../components/global/SubmitFormButton.vue";
import axios from "axios";
import Swal from "sweetalert2";
import store from "../store";
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "../stores/user-store";

const endpoint = import.meta.env.VITE_APP_API_URL;

const userStore = useUserStore();

const router = useRouter();
const route = useRoute();

const name = ref(null);
const slug = ref(null);
const description = ref(null);
const category = ref(null);
const subcategory = ref(null);
const subcategory1 = ref(null);

const price = ref(null);
const sale_price = ref(null);
const image_name = ref(null);
const productquantity = ref(null);
const buying_price = ref();
const images = ref();
const product_features = ref();

onMounted(() => {
  getProductById();
});

const getProductById = () => {
  try {
    var page = "http://127.0.0.1:8000/api/product/" + route.params.id;
    axios.get(page).then(({ data }) => {
      console.log("The data name is ", data.editproduct);
      name.value = data.editproduct.name;
      slug.value = data.editproduct.slug;
      description.value = data.editproduct.description;
      price.value = data.editproduct.price;
      image_name.value = data.editproduct.image_name;
      sale_price.value = data.editproduct.sale_price;
      category.value = data.editproduct.category;
      subcategory.value = data.editproduct.subcategory;
      subcategory1.value = data.editproduct.subcategory1;
      productquantity.value = data.editproduct.productquantity;
      buying_price.value = data.editproduct.buying_price;
      images.value = data.editproduct.images;
      product_features.value = data.editproduct.product_feature;
    });
  } catch (err) {
    console.log(err);
  }
};
const imagePath = ref("");

function getImagePath(e) {
  const file = e.target.files[0];

  var form = new FormData();
  form.append("image", file);

  axios.post("http://127.0.0.1:8000/api/getImagePath", form).then((res) => {
    imagePath.value = res.data;
    image_name.value = imagePath.value;
    console.log("New Product Image is", image_name.value);
  });

  //  console.log(file)
}

function save(ev) {
  ev.preventDefault();

  try {
    var page = "http://127.0.0.1:8000/api/product/" + route.params.id;
    const res = axios.put(page, {
      name: name.value,
      slug: slug.value,
      category: category.value,
      subcategory: subcategory.value,
      subcategory1: subcategory1.value,
      description: description.value,
      price: price.value,
      image_name: image_name.value,

      sale_price: sale_price.value,
      productquantity: productquantity.value,
    });

    Swal.fire({
      toast: true,
      icon: "success",
      title: "You  updated successfully ",
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
    console.log(res);
    router.push({
      name: "AdminDashboard",
    });
  } catch (err) {
    console.log(err);
  }
}
</script>

<style scoped></style>
