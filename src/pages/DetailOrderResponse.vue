<template>
  <TopNavigation />
  <NavigaionVue />
  <div class="relative my-[30px]">
    <button
      @click="saveAsPdf"
      class="px-3 py-3 rounded-xl z-0 bg-gray-500 text-white absolute top-0 right-0 mr-5"
    >
      Save as PDF
    </button>
  </div>
  <div
    id="myVueComponent"
    class="my-component sm:rounded-lg border border-gray-600 my-[80px]"
  >
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Order Details</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Details for Order {{ route.params.id }}
      </p>
    </div>
    <div class="border border-gray-400">
      <dl>
        <div
          class="px-4 py-5 sm:grid border border-gray-200 sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Customer Name</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ customerInfo.client_name }}<br />
          </dd>
        </div>
        <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Shipping Address</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            Line 1: {{ client_address.line1 }}<br />
            postal code :{{ client_address.postal_code }}<br />
            city :{{ client_address.city }} <br />
            kebele: {{ client_address.state }} <br />
            Main City: {{ client_address.country }} <br />
          </dd>
        </div>
        <div
          class="bg-white px-4 py-5 border border-gray-300 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Payment Method</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ customerInfo.payment_method }}
            <span
              >{{ customerInfo.card_no?.substring(0, 2) }}****
              {{ customerInfo.card_no?.substring(7, 10) }} </span
            ><br />
          </dd>
        </div>
        <div
          class="bg-white px-4 py-5 border border-gray-300 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Order Status</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ customerInfo.status }}
          </dd>
        </div>

        <div
          class="bg-white px-4 py-5 border border-gray-300 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">
            payment for shipping
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ customerInfo.shipping_birr }} birr
          </dd>
        </div>
        <div
          class="px-4 py-5 border border-gray-300 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Order Total</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ orderResponse.totalAmount }} birr
          </dd>
        </div>
        <div
          class="px-4 py-5 border border-gray-300 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
        >
          <dt class="text-sm font-medium text-gray-500">Order at</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ filterTime(customerInfo.created_at) }}
          </dd>
        </div>
        <div class="">
          <h1 class="text-sm px-4 py-5 font-medium text-gray-500">
            Order details
          </h1>
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg m-10">
            <table
              class="w-full border- border-gray-300 text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="py-3 px-6">Id</th>
                  <th scope="col" class="py-3 px-6">
                    Image<span class="sr-only">Image</span>
                  </th>
                  <th scope="col" class="py-3 px-6">Name</th>
                  <th scope="col" class="py-3 px-6">quantity</th>
                  <th scope="col" class="py-3 px-6">subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(product, index) in orderResponse"
                  :key="index"
                  class="bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td
                    v-if="product.id"
                    class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
                  >
                    {{ product.id }}
                  </td>

                  <td
                    v-if="product.image_name"
                    class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
                  >
                    <a
                      :href="
                        `${endpoint}/images/productprofiles/` +
                        product.image_name
                      "
                      target="_blank"
                    >
                      <img
                        id="myImage"
                        class="h-20 w-20"
                        :src="
                          `${endpoint}/images/productprofiles/` +
                          product.image_name
                        "
                      />
                    </a>
                  </td>

                  <td
                    v-if="product.name"
                    class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
                  >
                    {{ product.name }}
                  </td>
                  <td
                    v-if="product.quantity"
                    class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
                  >
                    {{ product.quantity }}
                  </td>
                  <td
                    v-if="product.total"
                    class="py-4 px-6 font-semibold text-gray-900 dark:text-white"
                  >
                    {{ product.total }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </dl>
    </div>
  </div>

  <FooterSection />
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import html2pdf from "html2pdf.js";
import TopNavigation from "../components/structure/TopNavigation.vue";
import NavigaionVue from "../components/NavigationVue.vue";
import FooterSection from "../components/structure/FooterSection.vue";

const endpoint = import.meta.env.VITE_APP_API_URL;

const route = useRoute();

const findTime = ref(0);

const orderResponse = ref([]);
const client_address = ref([]);
const customerInfo = ref([]);

function saveAsPdf() {
  const options = {
    filename: "myVueComponent.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    fullPage: true,
  };

  const element = document.querySelector(".my-component");
  const image = document.getElementById("myImage");

  // Wait for the image to load before generating the PDF
  image.onload = function () {
    html2pdf().from(element).set(options).save();
  };

  html2pdf().from(element).set(options).save();
}

onMounted(async () => {
  getDetailOrderResponse();
});

const getDetailOrderResponse = async () => {
  let response = await axios.get(
    "http://127.0.0.1:8000/api/getdetailorderresponse/" + route.params.id
  );
  // console.log("response", response);
  // // if (response.data) {
  // //   isLoading.value = false;
  // // }
  orderResponse.value = JSON.parse(response.data.orderResponse.order_details);
  client_address.value = JSON.parse(response.data.orderResponse.client_address);
  console.log(JSON.parse(response.data.orderResponse.order_details));
  console.log("the detail is ", response.data.orderResponse);
  customerInfo.value = response.data.orderResponse;
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
