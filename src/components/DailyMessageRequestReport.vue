<template>
  <div class="relative my-[40px] mb-12">
    <button
      @click="saveAsPdf"
      class="px-3 py-3 rounded-xl z-0 bg-gray-500 text-white hover:bg-gray-400 border-4 hover:border-white absolute top-0 right-0 mr-5"
    >
      Save as PDF
    </button>
  </div>
  <div id="myVueComponent" class="my-componentttttttt">
    <div class="italic mb-3">
      <div class="text-3xl font-bold">
        Today's Messsages Request({{ format }})
      </div>
    </div>
    <div class="overflow-x-auto relative shadow-2xl sm:rounded-lg shadow-md">
      <div
        class="flex justify-between items-center pb-4 bg-white dark:bg-gray-900"
      >
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
          <div
            @click="searchmessage(querymessage)"
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
            v-model="querymessage"
            @keyup="searchmessage(querymessage)"
            type="text"
            id="table-search-messages"
            class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for messages"
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
      <div v-if="nomessageDisplay">
        <div
          v-if="messages.length < 1"
          class="flex items-center mt-12 h-48 mb-12 justify-center"
        >
          <div class="text-3xl">Sorry searched message not found</div>
        </div>
      </div>
      <table
        class="w-full border-collapse border border-slate-400 text-sm text-left text-gray-500 dark:text-gray-400"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-2 border border-slate-400">Id</th>

            <th scope="col" class="py-3 px-2 border border-slate-400">Name</th>
            <th scope="col" class="py-3 px-2 border border-slate-400">Email</th>
            <th scope="col" class="py-3 px-2 border border-slate-400">phone</th>
            <th scope="col" class="py-3 px-2 border border-slate-400">
              message
            </th>
            <!-- <th scope="col" class="py-3 px-2 border border-slate-400">
                  status
              </th> -->
            <th scope="col" class="py-3 px-2 border border-slate-400">
              Sent at
            </th>
            <th scope="col" class="py-3 px-2 border border-slate-400" v-if="userStore.role=='customerserviceofficor'">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="message in messages"
            :key="message.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="py-4 px-2 border border-slate-400">
              {{ message.id }}
            </td>
            <td class="py-4 px-2 border border-slate-400">
              {{ message.name }}
            </td>
            <td class="py-4 px-2 border border-slate-400">
              {{ message.email }}
            </td>
            <td class="py-4 px-2 border border-slate-400">
              {{ message.phone }}
            </td>
            <td class="py-4 px-2 border border-slate-400">
              {{ message.message }}
            </td>
            <!-- <td class="py-4 px-2 border border-slate-400">
                  <div class="flex items-center">
                      <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                  </div>
              </td> -->
            <td class="py-4 px-2 border border-slate-400">
              {{ filterTime(message.created_at) }}
            </td>
            <!-- <td class="py-4 px-2 border border-slate-400">
                  <button @click="deletemessage(message.id)"  class="font-medium text-white dark:text-blue-500 bg-red-500 rounded p-2">
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
              </td> -->
            <td class="py-4 px-2 border border-slate-400" v-if="userStore.role=='customerserviceofficor'">
              <button
                class="font-medium text-white dark:text-blue-500 bg-gray-500 rounded p-2"
              >
                <a :href="`mailto:${message.email}`">Replay</a>
              </button>
            </td>
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
        @update:modelValue="getmessages"
      />
    </div>
  </div>
</template>

<script setup>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { onMounted, ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import html2pdf from "html2pdf.js";
import { useUserStore } from "../stores/user-store";


const userStore=useUserStore();


let messages = ref([]);
let page = ref(1);
let pageCount = ref(null);
let querymessage = ref(null);
const isLoading = ref(false);
const findTime = ref(0);
const nomessageDisplay = ref(false);
const date = ref();
const month = ref();
const year = ref();
const format = ref();

onMounted(async () => {
  isLoading.value = true;
  getmessages();
  findToday();
});

const findToday = () => {
  const d = new Date();
  date.value = d.getDate();
  month.value = d.getMonth();
  year.value = d.getFullYear();
  format.value = date.value + "/" + month.value + "/" + year.value;
};

const getmessages = async () => {
  let res = await axios.get(
    "http://127.0.0.1:8000/api/get_all_todaysmessagesreport?page=" + page.value
  );

  pageCount.value = res.data.page_count;
  messages.value = res.data.messages.data;
  console.log("response", res);
  isLoading.value = false;

  // if(res.data.products.data){
  //   isLoading.value=false;
  // }
};

const searchmessage = async (query) => {
  nomessageDisplay.value = true;
  isLoading.value = true;
  let res = await axios.post(
    "http://127.0.0.1:8000/api/searchmessage?page=" + page.value,
    {
      searchData: query,
    }
  );
  isLoading.value = false;
  pageCount.value = res.data.page_count;
  messages.value = res.data.messages.data;
  console.log("response", res);
};

const deletemessage = async (id) => {
  Swal.fire({
    title: "Are you sure you want to delete this message?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete("http://127.0.0.1:8000/api/message/" + id);
        getmessages();
        Swal.fire("Deleted!", "Your customer has been deleted.", "success");
      } catch (err) {
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

  const element = document.querySelector(".my-componentttttttt");

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
</script>

<style scoped></style>
