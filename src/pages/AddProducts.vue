<template>
  <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
    <div class="text-gray-900 text-xl">Add Product</div>
    <div class="bg-gray-500 w-full h-1"></div>

    <!-- <CropperModal
        
        v-if="showModal"
            :minAspectRatioProp="{width: 8, height: 8}"
            :maxAspectRatioProp="{width: 8, height: 8}"
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        /> -->
    <div class="shadow-2xl border-4 border-gray-600">
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
            v-model="product.name"
            id=""
            placeholder="Enter the product name"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.name">* {{ errors.name[0] }}</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product Category
          </label>
          <input
            type="text"
            v-model="product.category"
            placeholder="Enter the product category"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.category">
            * {{ errors.category[0] }}
          </p>
        </div>
      </div>

      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
        >
          Category Id
        </label>
        <select
          v-model="product.category_id"
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

        <p class="text-red-600" v-if="errors.category_id">
          * {{ errors.category_id[0] }}
        </p>
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
            v-model="product.subcategory"
            id=""
            placeholder="Enter the product subcategory"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.subcategory">
            * {{ errors.subcategory[0] }}
          </p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product subcategory1
          </label>
          <input
            type="text"
            v-model="product.subcategory1"
            placeholder="Enter the product subcategory1"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.subcategory1">
            * {{ errors.subcategory1[0] }}
          </p>
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product buying_price
          </label>
          <input
            type="text"
            name=""
            v-model="product.buying_price"
            id=""
            placeholder="Enter the product buying_price"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.buying_price">
            * {{ errors.buying_price[0] }}
          </p>
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product Slug
          </label>
          <input
            type="text"
            name=""
            v-model="product.slug"
            id=""
            placeholder="Enter the product slug"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.slug">* {{ errors.slug[0] }}</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product Price
          </label>
          <input
            type="text"
            v-model="product.price"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Enter the product price"
          />
          <p class="text-red-600" v-if="errors.price">
            * {{ errors.price[0] }}
          </p>
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Product sale_price
          </label>
          <input
            type="text"
            name=""
            v-model="product.sale_price"
            id=""
            placeholder="Enter the product sale Price"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.sale_price">
            * {{ errors.sale_price[0] }}
          </p>
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
            v-model="product.productquantity"
            id=""
            placeholder="Enter the product quantity"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.productquantity">
            * {{ errors.productquantity[0] }}
          </p>
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
            v-model="product.description"
          ></textarea>
          <p class="text-red-600" v-if="errors.description">
            * {{ errors.description[0] }}
          </p>
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full md:w-1/2 px-3">
          <input
            type="file"
            name=""
            @change="getImagePath"
            id=""
            placeholder="Enter the product image"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <br />
        <p class="text-red-600" v-if="errors.image_name">
          * {{ errors.image_name[0] }}
        </p>
        <img
          :src="`${endpoint}/images/productprofiles/` + imagePath"
          alt="image"
          height="200"
          width="300"
        />
      </div>

      <div class="flex flex-wrap mt-4 mb-2">
        <div class="w-full md:w-1/2 px-3">
          <input
            type="file"
            name=""
            @change="getVideoPath"
            id=""
            placeholder="Enter the product video"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <br />
        <!-- <p class="text-red-600" v-if="errors.image_name">* {{ errors.image_name[0] }}</p> -->
        <iframe
          :src="`${endpoint}/images/productprofiles/` + vidoPath"
          alt="image"
          height="200"
          width="300"
        ></iframe>
      </div>
    </div>
  </div>

  <div class="flex flex-wrap mt-2 mb-2">
    <div class="w-full px-3">
      <SubmitFormButton btnText="Add Product" @click="save" />
    </div>
  </div>
</template>

<script setup>
import TextArea from "../components/global/TextArea.vue";
import SubmitFormButton from "../components/global/SubmitFormButton.vue";
import axios from "axios";
import Swal from "sweetalert2";
import store from "../store";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const endpoint = import.meta.env.VITE_APP_API_URL;

const router = useRouter();
const name = ref("");
let errors = ref([]);
const category = ref("");
const categories = ref([]);
const product = {
  name: "",
  category: "",
  subcategory: "",
  subcategory1: "",
  slug: "",
  description: "",
  image_name: "",
  buying_price: "",
  price: "",
  sale_price: "",
  productquantity: "",
  category_id: "",
  videopath: "",
};

onMounted(() => {
  getCategories();
});

const imagePath = ref("");

function getImagePath(e) {
  const file = e.target.files[0];
  imagePath.value = file;
  console.log(imagePath.value);

  var form = new FormData();
  form.append("image", file);

  axios.post("http://127.0.0.1:8000/api/getImagePath", form).then((res) => {
    imagePath.value = res.data;
    product.image_name = imagePath.value;
  });
}

function getVideoPath(e) {
  const file = e.target.files[0];
  product.videopath = file;
  console.log(product.videopath);
  var form = new FormData();
  form.append("video", file);

  axios.post("http://127.0.0.1:8000/api/getvideopath", form).then((res) => {
    product.videopath = res.data;
    console.log("the video response is", product.videopath);
  });
}

const save = async (ev) => {
  errors.value = [];

  await ev.preventDefault();
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/saveproduct",
      product
    );
    console.log(res);
    Swal.fire({
      toast: true,
      icon: "success",
      title: "You added product successfully ",
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
    errors.value = err.response.data.errors;
    console.log(errors.value);
  }
};

const getCategories = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/getcategories");
  console.log(res);
  categories.value = res.data.categories;
};
</script>

<style scoped></style>
