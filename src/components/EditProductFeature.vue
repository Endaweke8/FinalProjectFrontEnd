<template>
  <!-- Modal toggle -->
  <div class="">
    <button
      @click="(showEditProductFeature = true), getproductfeature(id)"
      class="font-medium bg-gray-600 hover:bg-gray-400 border-2 hover:border-gray-800 text-white rounded-lg mt-2 p-3 dark:text-red-500e"
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
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    </button>
  </div>

  <!-- Main modal -->
  <div
    v-if="showEditProductFeature"
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed bg-gray-300 flex items-center justify-center bg-opacity-50 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-3rem)] md:h-full"
  >
    <div
      class="relative w-full h-full max-w-md md:h-auto border border-gray-700 shadow-2xl shadow-gray-700"
    >
      <!-- Modal content -->
      <div class="relative bg-gray-300 rounded-lg shadow dark:bg-gray-700">
        <button
          @click="showEditProductFeature = false"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="black"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Edit Product Feature
          </h3>
          <div class="rounded-md">
            <form id="payment-form" method="POST" action="">
              <section>
                <fieldset
                  class="mb-3 bg-white border-4 border-gray-350 shadow-lg rounded text-gray-600"
                >
                  <label
                    class="flex border-b border-gray-200 h-12 py-3 items-center"
                  >
                    <span class="text-right px-2">Product Feature title</span>
                    <input
                      name="feature_title"
                      v-model="feature.title"
                      class="focus:outline-none px-3"
                      placeholder="Ram Size"
                    />
                  </label>
                  <p class="text-red-600" v-if="errors.title">
                    * {{ errors.title[0] }}
                  </p>
                  <label
                    class="flex border-b border-gray-200 h-12 py-3 items-center"
                  >
                    <span class="text-right px-2">Value</span>

                    <input
                      name="feature value"
                      v-model="feature.value"
                      class="focus:outline-none px-3"
                      placeholder="8 gb ram"
                    />
                  </label>
                  <p class="text-red-600" v-if="errors.value">
                    * {{ errors.value[0] }}
                  </p>
                </fieldset>
              </section>
            </form>

            <div class="relative mb-[20px]">
              <button
                @click.prevent="updateProductFeature(id)"
                class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-gray-500 hover:bg-reen-400 z-1 mt-8"
              >
                <svg
                  v-show="isLoading"
                  class="w-8 h-7 text-white animate-spin absolute left-1/2 -ml-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="11"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span :class="{ invisible: isLoading }"
                  ><span class="text-2xl">Save</span></span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, defineProps, toRefs, defineEmits } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useRoute } from "vue-router";

const route = useRoute();
const showEditProductFeature = ref(false);
const endpoint = import.meta.env.VITE_APP_API_URL;

const isLoading = ref(false);
let errors = ref([]);
let feature_id = ref();
const feature = reactive({
  title: "",
  value: "",
});

const emit = defineEmits(["getProduct"]);

const props = defineProps({ id: String });
const { id } = toRefs(props);

const getproductfeature = async (id) => {
  try {
    var page = `${endpoint}/api/getproductfeature/` + id;
    let res = await axios.get(page);

    feature.title = res.data.product_feature.title;
    feature.value = res.data.product_feature.value;
  } catch (err) {
    console.log(err);
  }
};

const updateProductFeature = async (id) => {
  try {
    isLoading.value = true;
    errors.value = [];

    // alert(`expiration Year is ${this.expirationYear} and expiration Month is ${this.expirationMonth} and the city is ${this.city} and card Type is ${this.cardType}`)
    var page = `${endpoint}/api/updateproductfeature/` + id;
    await axios.put(page, {
      title: feature.title,
      value: feature.value,
    });
    emit("getProduct");
    isLoading.value = false;
    Swal.fire({
      toast: true,
      icon: "success",
      title: "You  updated product feature  successfully ",
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
    showEditProductFeature.value = false;
  } catch (error) {
    isLoading.value = false;
    // errors.value = error.response.data.errors;
  }
};
</script>
