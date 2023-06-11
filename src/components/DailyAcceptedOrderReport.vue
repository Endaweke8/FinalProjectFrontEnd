<template>
  <div class="relative my-[40px] mb-12">
    <button
      @click="saveAsPdf"
      class="px-3 py-3 rounded-xl z-0 bg-gray-500 text-white hover:bg-gray-400 border-4 hover:border-white absolute top-0 right-0 mr-5"
    >
      Save as PDF
    </button>
  </div>
  <div id="myVueComponent" class="my-componentttttt">
    <div class="italic mb-3">
      <div v-if="!orders">
        <h1>No today's order</h1>
      </div>
      <div class="text-3xl mt-5 font-bold">
        Today's Accepted Orders Report({{ format }})
      </div>
    </div>

    <div>
      <div class="overflow-x-auto relative shadow-2xl sm:rounded-lg">
        <div
          class="flex justify-between items-center pb-4 bg-white dark:bg-gray-900"
        >
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative">
            <div
              @click="searchOrder(queryOrder)"
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
              v-model="queryOrder"
              @keyup="searchOrder(queryOrder)"
              type="text"
              id="table-search-users"
              class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for orders"
            />
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
        <div v-if="noOrderDisplay">
          <div
            v-if="orders.length < 1"
            class="flex items-center mt-12 h-48 mb-12 justify-center"
          >
            <div class="text-3xl">Sorry searched Order not found</div>
          </div>
        </div>

        <table
          class="w-full border-collapse border border-slate-400 text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                Trn Id
              </th>

              <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                CLient Name
              </th>
              <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                Client Id
              </th>
              <!-- <th scope="col" class="py-3 border border-slate-300 px-1 border border-slate-300">Client Address</th>
            <th scope="col" class="py-3 border border-slate-300 px-1 border border-slate-300">Orders Details</th> -->
              <!-- <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                Currency
              </th> -->
              <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                Payment Method
              </th>
              <th
                scope="col"
                class="py-3 border border-slate-300 border border-slate-300"
              >
                Payment for shipping
              </th>
              <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                Total Pyment Amount
              </th>
              <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                Total Buying Price
              </th>
              <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                Profit
              </th>
              <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                Ordered At
              </th>
              <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                Status
              </th>
              <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                Notified to delivery man
              </th>
              <th
                scope="col"
                class="py-3 border border-slate-300 px-1 border border-slate-300"
              >
                Accepted By Customer
              </th>
              <!-- <th scope="col" class="py-3 px-1 border border-slate-300">
                    Action
                </th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="order in orders"
              :key="order.id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td class="py-4 px-1 border border-slate-300">
                {{ order.id }}
              </td>
              <td class="py-4 px-1 border border-slate-300">
                {{ order.client_name }}
              </td>
              <td class="py-4 px-1 border border-slate-300">
                {{ order.client_id }}
              </td>
              <!-- <td class="py-4 px-1 border border-slate-300">
              {{ order.client_address }}
            </td>
            <td class="py-4 px-1 border border-slate-300">
              {{ order.order_details }}
            </td> -->
              <!-- <td class="py-4 px-1 border border-slate-300">
                {{ order.currency }}
              </td> -->
              <td class="py-4 px-1 border border-slate-300">
                {{ order.payment_method }}
              </td>
              <td class="py-4 px-1 border border-slate-300">
                {{ order.shipping_birr }}
              </td>
              <td class="py-4 px-1 border border-slate-300">
                {{ order.amount }}
              </td>
              <td class="py-4 px-1 border border-slate-300">
                {{ order.total_buying_price }}
              </td>
              <td class="py-4 px-1 border border-slate-300">
                {{ order.profit }}
              </td>

              <td class="py-4 px-1 border border-slate-300">
                {{ filterTime(order.created_at) }}
              </td>

              <td class="py-4 px-1 border border-slate-300">
                <p
                  :class="
                    order.status == 'delivered'
                      ? 'text-green-500'
                      : 'text-black'
                  "
                >
                  {{ order.status }}
                </p>

                
              </td>

              <td class="py-4 px-1 border border-slate-300">
                <p
                  :class="
                    order.notified == 'notified'
                      ? 'text-blue-500'
                      : 'text-black'
                  "
                >
                  {{ order.notified }}
                </p>

                <div>
                  <div
                    v-if="
                      userStore.role == 'customerserviceofficor' &&
                      order.notified != 'notified' &&
                      order.status != 'delivered'
                    "
                  >
                    <button
                      @click="notifyDeliveryMan(order.id)"
                      class="font-medium text-white dark:text-blue-500 bg-gray-500 rounded p-2"
                    >
                      Notify Delivery man
                    </button>
                  </div>
                </div>
              </td>

              <td class="py-4 px-1 border border-slate-300">
                <p
                  :class="
                    order.accepted == 'accepted'
                      ? 'text-blue-500'
                      : 'text-black'
                  "
                >
                  {{ order.accepted }}
                </p>

                <div>
                  <div
                    v-if="
                      userStore.id == order.client_id &&
                      order.accepted != 'accepted'
                    "
                  >

                    <button
                      @click="notifyAsAccepted(order.id)"
                      class="px-2 py-2 mb-10 text-sm relative font-medium w-full text-center item-center rounded text-white bg-gray-600 hover:bg-green-600/80"
                    >
                      <svg
                        v-show="isAcceptedLoading"
                        class="w-8 h-7 text-white animate-spin relative left-1/2 -ml-2.5"
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
                      <span :class="{ invisible: isAcceptedLoading }">
                        <span>Mark as Accepted</span></span
                      >
                    </button>
                  </div>
                </div>
              </td>
              <!-- <td class="py-4 px-1 border border-slate-300" >
                      <div v-if="userStore.role=='manager'">
                        <button @click="deleteOrder(order.id)"  class="font-medium text-white dark:text-blue-500 bg-red-500 rounded p-2">Delete order</button>
                      </div>
                      
                </td> -->
            </tr>
            <tr class="bg-white">
              <td
                class="py-4 px-1 border border-slate-300 text-xl text-black font-bold"
              >
                Total
              </td>
              <td class="py-4 px-1 border border-slate-300"></td>
              <td class="py-4 px-1 border border-slate-300"></td>
              <td class="py-4 px-1 border border-slate-300"></td>
              <td class="py-4 px-1 border border-slate-300"></td>
              <!-- <td class="py-4 px-1 border border-slate-300"></td> -->
              <!-- <td class="py-4 px-1 border border-slate-300"></td>
            <td class="py-4 px-1 border border-slate-300"></td> -->
              <td
                class="py-4 px-1 border border-slate-300 text-xl text-black font-bold"
              >
               {{Math.floor(totalDailyAcceptedSaleAmount) }}
              </td>
              <td
                class="py-4 px-1 border border-slate-300 text-xl text-black font-bold"
              >
                {{Math.floor(totalDailyAcceptedBuyingPrice) }}
              </td>
              <td
                class="py-4 px-1 border border-slate-300 text-xl text-black font-bold"
              >
                {{Math.floor(totalProfit) }}
              </td>
              <td class="py-4 px-1 border border-slate-300"></td>
              <td class="py-4 px-1 border border-slate-300"></td>
              <td class="py-4 px-1 border border-slate-300"></td>
              <td class="py-4 px-1 border border-slate-300"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-center p-2">
        <v-pagination
          class="p-10"
          v-model="page"
          :pages="pageCount"
          :range-size="1"
          active-color="#337aff"
          @update:modelValue="getOrders"
        />
      </div>
    </div>
  </div>
  {{dailyacceptedorderreport}}
</template>

<script setup>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { onMounted, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useUserStore } from "../stores/user-store";
import html2pdf from "html2pdf.js";
const userStore = useUserStore();

const name = ref("");
const email = ref("");
const subject = ref("");
const message = ref("");
var isAcceptedLoading = ref(false);

let orders = ref([]);
let page = ref(1);
let pageCount = ref(null);
const isLoading = ref(false);
const findTime = ref(0);
const findTodayTime = ref(0);
const noOrderDisplay = ref(false);
const dailyacceptedorderreport = ref();
const totalDailyAcceptedBuyingPrice=ref();
const totalDailyAcceptedSaleAmount=ref();
const totalProfit=ref();
const date = ref();
const month = ref();
const year = ref();
const format = ref();

onMounted(async () => {
  isLoading.value = true;
  getOrders();
  findToday();
});

const findToday = () => {
  const d = new Date();
  date.value = d.getDate();
  month.value = d.getMonth();
  year.value = d.getFullYear();
  format.value = date.value + "/" + month.value + "/" + year.value;
};
const getOrders = async () => {
  let res = await axios.get(
    "http://127.0.0.1:8000/api/getdailyacceptedreportorders?page=" + page.value
  );

  pageCount.value = res.data.page_count;
  orders.value = res.data.orders.data;
  dailyacceptedorderreport.value = res.data.totalDailyAcceptedBuyingPrice;
  totalDailyAcceptedBuyingPrice.value=res.data.totalDailyAcceptedBuyingPrice;
  totalDailyAcceptedSaleAmount.value=res.data.totalDailyAcceptedSaleAmount;
  totalProfit.value=res.data.totalProfit;



  console.log("response", res);
  isLoading.value = false;
  // if(res.data.products.data){
  //   isLoading.value=false;
  // }
};

const searchOrder = async (query) => {
  noOrderDisplay.value = true;
  isLoading.value = true;
  let res = await axios.post(
    "http://127.0.0.1:8000/api/searchorder?page=" + page.value,
    {
      searchData: query,
    }
  );
  isLoading.value = false;
  pageCount.value = res.data.page_count;
  orders.value = res.data.orders.data;
  console.log("response", res);
};

const deleteOrder = async (id) => {
  Swal.fire({
    title: "Are you sure you want to delete this orders?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete("http://127.0.0.1:8000/api/order/" + id);
        getOrders();
        Swal.fire("Deleted!", "customer order has been deleted.", "success");
      } catch (err) {
        console.log(err);
      }
    }
  });
};

const markAsDelivered = async (id) => {
  Swal.fire({
    title: "Are you sure you want to mark this as delivered?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, mark it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.put("http://127.0.0.1:8000/api/markasdelivered/" + id, {
          status: "delivered",
        });
        getOrders();
        Swal.fire(
          "Mark as Delivered!",
          "customer order has been delivered.",
          "success"
        );
      } catch (err) {
        console.log(err);
      }
    }
  });
};

const notifyDeliveryMan = async (id) => {
  Swal.fire({
    title: "Are you sure you want to notify this to delivery man?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, mark it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.put("http://127.0.0.1:8000/api/notifydeliveryman/" + id, {
          notified: "notified",
        });
        getOrders();
        Swal.fire(
          "Notifed Delivery man!",
          "Delivery man   has been notified.",
          "success"
        );
      } catch (err) {
        console.log(err);
      }
    }
  });
};

const notifyAsAccepted = async (id) => {
  isAcceptedLoading.value = true;
  Swal.fire({
    title: "Are you sure ,you recived your order?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, mark it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.put("http://127.0.0.1:8000/api/notifyasaccepted/" + id, {
          accepted: "accepted",
          email: userStore.email,
          name: userStore.firstName,
          userid: userStore.id,
        });
        getOrders();
        isAcceptedLoading.value = false;
        Swal.fire("Mark as Accepted", "You notified as Accepted.", "success");
      } catch (err) {
        isAcceptedLoading.value = false;
        console.log(err);
      }
    }
  });
};

function saveAsPdf() {
  const options = {
    filename: "myVueComponent.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    fullPage: true,
  };

  const element = document.querySelector(".my-componentttttt");

  html2pdf().from(element).set(options).save();
}

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

const filterTodayTime = (created_at) => {
  const currentTime = new Date();

  findTodayTime.value = parseInt((currentTime - Date.parse(created_at)) / 1000);
  if (findTodayTime.value > 60) {
    findTodayTime.value = parseInt(
      (currentTime - Date.parse(created_at)) / (1000 * 60)
    );
    if (findTodayTime.value > 60) {
      findTodayTime.value = parseInt(
        (currentTime - Date.parse(created_at)) / (1000 * 60 * 60)
      );

      if (findTodayTime.value < 24) {
        return `${findTodayTime.value} hoursss ago`;
      } else {
        return;
      }
    }

    return `${findTodayTime.value} minutes ago`;
  }

  return `${findTodayTime.value} seconds ago`;
};
</script>

<style scoped></style>
