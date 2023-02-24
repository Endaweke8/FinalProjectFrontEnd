<template>
  <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
    <div class="text-gray-900 text-xl mb-3">Stock Store details</div>
    <div class="bg-gray-500 w-full h-1"></div>

    <!-- <CropperModal
        
        v-if="showModal"
            :minAspectRatioProp="{width: 8, height: 8}"
            :maxAspectRatioProp="{width: 8, height: 8}"
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        /> -->

    <div class="flex flex-wrap mt-4 mb-6">
      <img :src="image_name" alt="image" height="200" width="300" />

  <div class="flex  justify-center ml-12 mb-6">
    <div class="w-full px-3 py-3">
      
        <button class="bg-gray-500 rounded py-2 px-4 text-white"><router-link
                :to="`/editstock/${route.params.id}`"
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
              </router-link> Edit Stock</button>
    </div>
  </div>
    </div>

    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <span class="text-2xl underline mb-3">Stock Name</span>
        <h1>{{ name }}</h1>
      </div>
    </div>


     
    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <span class="text-2xl underline mb-3">Stock Amount</span>
        <h1>{{ amount }}</h1>
      </div>
    </div>


    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <span class="text-2xl underline mb-3">Stock Sale_Price</span>
        <h1>{{ sale_price }}</h1>
      </div>
    </div>


    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <span class="text-2xl underline mb-3">Stock slug</span>
        <h1>{{ slug }}</h1>
      </div>
    </div>


    <div class="flex flex-wrap mt-4 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <span class="text-2xl underline mb-3">Stock description</span>
        <h1>{{ description }}</h1>
      </div>
    </div>


    

    
  </div>

</template>

<script setup>
import SubmitFormButton from "../components/global/SubmitFormButton.vue";
import axios from "axios";
import Swal from "sweetalert2";

import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const name = ref(null);
const slug = ref(null);
const description = ref(null);

const amount = ref(null);
const sale_price = ref(null);
const image_name = ref(null);

onMounted(() => {
  getStockById();
});

const getStockById = () => {
  try {
    var page = "http://127.0.0.1:8000/api/stock/" + route.params.id;
    axios.get(page).then(({ data }) => {
      console.log(data.name);
      name.value = data.name;
      slug.value = data.slug;
      description.value = data.description;
      amount.value = data.amount;
      image_name.value = data.image_name;
      sale_price.value = data.sale_price;
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
    var page = "http://127.0.0.1:8000/api/stock/" + route.params.id;
    const res = axios.put(page, {
      name: name.value,
      slug: slug.value,
      description: description.value,
      amount: amount.value,
      image_name: image_name.value,
      sale_price: sale_price.value,
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
