<template>
  <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
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
        v-for="stock in stocks"
        :key="stock.id"
        class="hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <router-link
          :to="`/detailstockview/${stock.id}`"
          class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <img
            class="h-60 w-full rounded-t-lg"
            :src="`${endpoint}/images/stockprofiles/` + stock.image_name"
            :alt="stock.name"
          />

          <div class="p-4">
            <h2 class="font-bold">{{ stock.name }}</h2>
            <div class="flex items-center">
              Amount :<span class="text-sm font-semibold">Et</span>&nbsp;<span
                class="font-bold text-xl"
                >{{ stock.amount }}</span
              >&nbsp;<span class="text-sm font-semibold">birr</span>
            </div>
            <div class="flex items-center">
              Sale_Price
              <span class="text-sm font-semibold">Et</span>&nbsp;<span
                class="font-bold text-xl"
                >{{ stock.sale_price }}</span
              >&nbsp;<span class="text-sm font-semibold">birr</span>
            </div>
          </div>
          <div class="p-4 border-t border-b text-xs text-gray-700">
            <span class="flex items-center mb-1">
              <i class="far fa-clock fa-fw mr-2 text-gray-900"></i>posted
              {{ filterTime(stock.created_at) }}
            </span>
            <!-- <span class="flex items-center mb-1" >
            <i class="fa fa-users mr-2" aria-hidden="true"></i> reviewed by {{ stock.stars.length}} person
          </span> -->
          </div>
          <div class="py-2 flex items-center text-sm text-gray-600">
            <div
              class="text-white bg-gray-600 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Contact Us Now
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div class="flex items-center justify-center p-2">
      <v-pagination
        class="p-10"
        v-model="page"
        :pages="pageCount"
        :range-size="1"
        active-color="#337aff"
        @update:modelValue="getStocks"
      />
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { computed, onMounted, ref, watch } from "vue";

import axios from "axios";

const endpoint = import.meta.env.VITE_APP_API_URL;

let page = ref(1);
let posts = ref(null);
let pageCount = ref(null);
const route = useRoute();
const stocks = ref([]);
var sum = ref(0);
const isLoading = ref(false);
const findTime = ref(0);
const rateCount = ref(0);

onMounted(async () => {
  isLoading.value = true;
  getStocks();
});

const addStar = (star, length) => {
  sum.value = 2;
  sum.value += star;
  sum.value = eval(parseInt(sum.value));
  return sum.value;
};

const getStocks = async () => {
  let res = await axios.get(
    "http://127.0.0.1:8000/api/stocks?page=" + page.value
  );

  pageCount.value = res.data.page_count;
  stocks.value = res.data.stocks.data;
  count.value = 0;
  console.log("response", res);
  if (res.data.stocks.data) {
    isLoading.value = false;
  }
};

const count = ref(0);
const getStars = (id) => {
  count.value = count.value + 1;

  alert(id);

  // let response = await axios.get("http://127.0.0.1:8000/api/rates/"+id);
  // console.log("totalstockrate", response.data.totalRateGiven);

  // return Math.ceil(response.data.totalRateGiven)
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
//  res = filterByLastMins(60, a);
//  console.log(res);
//   // stocks.value=response.data.stocks
//   // console.log(stocks.value)

//  }
</script>

<style scoped></style>
