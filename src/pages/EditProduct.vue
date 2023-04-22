<template>
  <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
    <div class="text-gray-900 text-xl font-extrabold">Edit Product Images</div>
    <div class="bg-gray-500 w-full h-1"></div>

    <!-- <CropperModal
        
        v-if="showModal"
            :minAspectRatioProp="{width: 8, height: 8}"
            :maxAspectRatioProp="{width: 8, height: 8}"
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        /> -->

    <div
      class="relative mb-[100px] bg-gray-300 shadow-2xl shadow-gray-700 rounded-xl py-[20px] mt-5"
    >
      <div class="lg:flex block m-12 lg:items-center lg:justify-between">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="gray"
            class="w-8 h-8 ml-12 mb-5 lg:mb-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>

        <span class=""> Add More Image</span>
        <input
          type="file"
          @change="getUploadedMoreImage"
          class="files"
          id="images"
          accept="image/png, image/jpeg"
        />
        <button
          @click="addMoreProductImage"
          class="px-6 py-4 mr-[12px] bg-gray-700 text-white rounded-md hover:bg-gray-400"
        >
          Save
        </button>
      </div>
    </div>

    <div class="m-12" v-if="imagePath">
      <img
        :src="`${endpoint}/images/moreproductimages/` + imagePath"
        height="200"
        width="300"
      />
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
              <th scope="col" class="py-3 px-6">Posted at</th>
              <th scope="col" class="py-3 px-6">Updated at</th>
              <th colspan="col" scope="col" class="py-3 px-6">Edit</th>
              <th colspan="col" scope="col" class="py-3 px-6">Remove</th>
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
                    alt="Apple Watch"
                  />
                </a>
              </td>

              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {{ filterTime(image.created_at) }}
              </td>
              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {{ filterTime(image.updated_at) }}
              </td>

              <td class="py-4 px-6">
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
                <span> Change Image</span>
                <input
                  type="file"
                  @change="getUploadedMoreImage"
                  name=""
                  id=""
                />
                <button
                  @click="editMoreProductImage(image.id)"
                  class="font-medium bg-gray-600 text-white rounded-lg mt-2 p-3 dark:text-red-500e"
                >
                  Save
                </button>
              </td>
              <td class="py-4 px-6">
                <button
                  @click="removefromMoreProductImage(image.id)"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
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
                  Remove Image
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="text-gray-900 text-xl font-extrabold">
      Add More Product Features
    </div>
    <div class="bg-gray-500 w-full h-1"></div>
    <div
      class="relative mb-[100px] bg-gray-300 shadow-2xl shadow-gray-700 rounded-xl py-[20px] mt-5"
    >
      <div class="lg:flex block m-12 lg:items-center lg:justify-between">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="gray"
            class="w-8 h-8 ml-12 mb-5 lg:mb-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>

        <input
          type="text"
          v-model="feature.title"
          @keypress="errors = []"
          class="bg-green-50 m-6 border border-gray-700 text-green-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="Ram Value"
        />
        <p class="text-red-600" v-if="errors.title">* {{ errors.title[0] }}</p>

        <input
          type="text"
          v-model="feature.value"
          @keypress="errors = []"
          class="bg-green-50 m-6 border border-gray-700 text-green-900 dark:text-green-400 placeholder-gray-400 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
          placeholder="8GB RAM"
        />
        <p class="text-red-600" v-if="errors.value">* {{ errors.value[0] }}</p>
        <button
          @click="saveFeature"
          class="px-6 py-4 mr-[12px] mx-6 bg-gray-700 text-white rounded-md hover:bg-gray-400"
        >
          Save
        </button>
      </div>
    </div>

    <div class="text-gray-900 text-xl font-extrabold">Edit Product Feature</div>
    <div class="bg-gray-500 w-full h-1"></div>
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
              <th scope="col" class="py-3 px-6">Feature title</th>
              <th scope="col" class="py-3 px-6">Feature Value</th>
              <th scope="col" class="py-3 px-6">Posted at</th>
              <th scope="col" class="py-3 px-6">Updated at</th>
              <th colspan="col" scope="col" class="py-3 px-6">Edit</th>
              <th colspan="col" scope="col" class="py-3 px-6">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="feature in product_feature"
              :key="feature.id"
              class="bg-white border-b border-gray-400 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {{ feature.id }}
              </td>

              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {{ feature.title }}
              </td>
              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {{ feature.value }}
              </td>

              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {{ filterTime(feature.created_at) }}
              </td>
              <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                {{ filterTime(feature.updated_at) }}
              </td>

              <td class="py-4 px-6">
                <EditProductFeature
                  :id="feature.id"
                  @getProduct="getProductById"
                />
              </td>
              <td class="py-4 px-6">
                <button
                  @click="removeProductFeature(feature.id)"
                  class="font-medium text-red-600 dark:text-red-500 hover:underline"
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
                  Remove Feature
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="text-gray-900 text-xl font-extrabold">Edit Product Details</div>
    <div class="bg-gray-500 w-full h-1"></div>
    <div class="border-4 border-gray-400 shadow-2xl shadow-gray-700">
      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product Name
          </label>
          <input
            type="text"
            name="product name"
            v-model="name"
            id=""
            placeholder="Enter the product name"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product Category
          </label>
          <input
            type="text"
            v-model="category"
            placeholder="Enter the product category"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>

      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
        >
          Category Id
        </label>
        <select
          v-model="category_id"
          id="category_id"
          name="category_id"
          class="w-full mt-1 mb-2 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option
            v-for="category in categories"
            key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>

        <!-- <p class="text-red-600" v-if="errors.category_id">* {{ errors.category_id[0] }}</p> -->
      </div>
      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product Subcategory
          </label>
          <input
            type="text"
            name=""
            v-model="subcategory"
            id=""
            placeholder="Enter the product subcategory"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product Subcategory1
          </label>
          <input
            type="text"
            v-model="subcategory1"
            placeholder="Enter the product subcategory1"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product slug
          </label>
          <input
            type="text"
            name=""
            v-model="slug"
            id=""
            placeholder="Enter the product slug"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>

      <div class="w-full md:w-1/2 px-3 mb-6">
        <label
          class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
        >
          Product buying_price
        </label>
        <input
          type="text"
          v-model="buying_price"
          class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Enter the buying price"
        />
      </div>

      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
        >
          Product price
        </label>
        <input
          type="text"
          v-model="price"
          class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Enter the product price"
        />
      </div>
      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product Sale Price
          </label>
          <input
            type="text"
            name=""
            v-model="sale_price"
            id=""
            placeholder="Enter the product sale Price"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product quantity
          </label>
          <input
            type="text"
            name=""
            v-model="productquantity"
            id=""
            placeholder="Enter the product quantity"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product Description
          </label>
          <textarea
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            cols="30"
            rows="10"
            placeholder="Please Enter the product information here!!!"
            v-model="description"
          ></textarea>
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Edit Product profile
          </label>
          <input
            type="file"
            name=""
            @change="getUploadedImage"
            id=""
            ref="fileInput"
            placeholder="Enter the product image"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <img
          :src="`${endpoint}/images/productprofiles/` + image_name"
          alt="image"
          height="200"
          width="300"
        />
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Edit Product video
          </label>
          <input
            type="file"
            name=""
            @change="getVideoPath"
            id=""
            ref="videoInput"
            placeholder="Enter the product video"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        <div v-if="videopath">
          <iframe
            height="200"
            width="300"
            :src="`${endpoint}/videos/productvideos/` + videopath"
          ></iframe>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap mt-3 mb-6">
      <div class="w-full px-3 py-3">
        <SubmitFormButton btnText="Save" @click="Save" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SubmitFormButton from "../components/global/SubmitFormButton.vue";
import axios from "axios";
import Swal from "sweetalert2";
import store from "../store";
import { ref, onMounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import EditProductFeature from "../components/EditProductFeature.vue";

const endpoint = import.meta.env.VITE_APP_API_URL;

const router = useRouter();
const route = useRoute();

const imagePath = ref("");
const name = ref(null);
const slug = ref(null);
const description = ref(null);
const category = ref(null);
const subcategory = ref(null);
const subcategory1 = ref(null);
const errors = ref([]);

const price = ref(null);
const buying_price = ref(null);
const sale_price = ref(null);
const image_name = ref(null);
const productquantity = ref(null);
const images = ref([]);
const findTime = ref(0);
const image_url = ref("");
const fileInput = ref(null);
const videoInput = ref(null);
const categories = ref([]);
const category_id = ref(null);
const videopath = ref(null);
const product_feature = ref();
const feature = reactive({
  title: "",
  value: "",
});

onMounted(() => {
  getProductById();
  getCategories();
});

function getUploadedImage(e) {
  const file = e.target.files[0];

  var form = new FormData();
  form.append("image", file);

  axios.post("http://127.0.0.1:8000/api/getImagePath", form).then((res) => {
    imagePath.value = res.data;
    image_name.value = imagePath.value;
  });
}

function getUploadedMoreImage(e) {
  const file = e.target.files[0];
  imagePath.value = file;
  console.log(imagePath.value);

  var form = new FormData();
  form.append("image", file);

  axios.post("http://127.0.0.1:8000/api/getImagePathMore", form).then((res) => {
    imagePath.value = res.data;
  });
}

function getVideoPath(e) {
  const file = e.target.files[0];
  videopath.value = file;
  console.log(videopath.value);
  var form = new FormData();
  form.append("video", file);

  axios.post("http://127.0.0.1:8000/api/getvideopath", form).then((res) => {
    videopath.value = res.data;
    console.log("the video response is", videopath.value);
  });
}

const saveFeature = async () => {
  errors.value = [];
  try {
    await axios
      .post("http://127.0.0.1:8000/api/addproductfeature", {
        title: feature.title,
        value: feature.value,
        product_id: route.params.id,
      })
      .then((response) => {
        console.log(response);
        getProductById();
        if (response) {
          feature.value = "";
          feature.title = "";
          Swal.fire({
            toast: true,
            icon: "success",
            title: "ProductFeature Saved successfuly",
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

const addMoreProductImage = async () => {
  try {
    const res = await axios.post(`${endpoint}/api/saveimage`, {
      imagepath: imagePath.value,
      product_id: route.params.id,
    });
    getProductById();
    imagePath.value = "";
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

const editMoreProductImage = async (id) => {
  try {
    const res = await axios.put(`${endpoint}/api/editmoreproductimage/` + id, {
      imagepath: imagePath.value,
    });

    getProductById();
    imagePath.value = "";
    console.log(res);
    Swal.fire({
      toast: true,
      icon: "success",
      title: "You Updated Image successfully ",
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

const updateImage = async (id) => {
  try {
    await axios.put("http://127.0.0.1:8000/api/updatemoreproductimage/" + id, {
      product_id: route.params.id,
      imagepath: image_url.value,
    });
  } catch (err) {
    console.log(err);
  }
};

const removefromMoreProductImage = async (id) => {
  Swal.fire({
    title: "Are you sure you want to delete this image?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete(`${endpoint}/api/removefrommoreproductimage/` + id);
        getProductById();
        Swal.fire("Deleted!", "Your image has been Deleted.", "success");
      } catch (err) {
        console.log(err);
      }
    }
  });
};

const removeProductFeature = async (id) => {
  Swal.fire({
    title: "Are you sure you want to delete this feature?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete(`${endpoint}/api/removeproductfeature/` + id);
        getProductById();
        Swal.fire("Deleted!", "Product Feature has been Deleted.", "success");
      } catch (err) {
        console.log(err);
      }
    }
  });
};

const getProductById = async () => {
  try {
    var page = `${endpoint}/api/product/` + route.params.id;
    let res = await axios.get(page);
    console.log(res.data.editproduct);
    name.value = res.data.editproduct.name;
    slug.value = res.data.editproduct.slug;
    description.value = res.data.editproduct.description;
    category.value = res.data.editproduct.category;
    subcategory.value = res.data.editproduct.subcategory;
    subcategory1.value = res.data.editproduct.subcategory1;
    price.value = res.data.editproduct.price;
    buying_price.value = res.data.editproduct.buying_price;

    sale_price.value = res.data.editproduct.sale_price;
    image_name.value = res.data.editproduct.image_name;
    videopath.value = res.data.editproduct.videopath;
    productquantity.value = res.data.editproduct.productquantity;
    images.value = res.data.editproduct.images;
    category_id.value = res.data.editproduct.category_id;
    product_feature.value = res.data.editproduct.product_feature;
  } catch (err) {
    console.log(err);
  }
};

function Save(ev) {
  ev.preventDefault();
  console.log("teh  lfjkdfj", videopath.value);

  try {
    var page = `${endpoint}/api/product/` + route.params.id;
    const res = axios.put(page, {
      name: name.value,
      slug: slug.value,
      category: category.value,
      subcategory: subcategory.value,
      subcategory1: subcategory1.value,
      description: description.value,
      buying_price: buying_price.value,
      price: price.value,
      image_name: imagePath.value,
      sale_price: sale_price.value,
      productquantity: productquantity.value,
      category_id: category_id.value,
      videopath: videopath.value,
    });

    fileInput.value.value = "";
    videoInput.value.value = "";
    imagePath.value = null;

    Swal.fire({
      toast: true,
      icon: "success",
      title: "You  updated  successfully ",
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
    // router.push({
    //     name:"AdminDashboard"
    // })
  } catch (err) {
    console.log(err);
  }
}

const getCategories = async () => {
  let res = await axios.get(`${endpoint}/api/getcategories`);
  console.log(res);
  categories.value = res.data.categories;
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
