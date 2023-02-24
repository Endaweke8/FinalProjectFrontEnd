<template>

  <div class="bg-gray-200">
    <div id="stockorderus" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
      <div class="text-gray-900 text-xl">Stock Order</div>
      <div class="bg-gray-500 w-full md:w-1/2  h-1"></div>
      <div class="border border-gray-500 w-full md:w-1/2 px-3">
        <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full ">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Enter you first Name
          </label>
          <input
            type="text"
            name="first name"
            v-model="firstName"
            id=""
            placeholder="Abebe"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.firstName">* {{ errors.firstName[0] }}</p>
        </div>
      </div>
      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full ">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Enter your last Name
          </label>
          <input
            type="text"
            name="first name"
            v-model="lastName"
            id=""
            placeholder="Abebe"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.lastName">* {{ errors.lastName[0] }}</p>
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full ">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Enter Your email
          </label>
          <input
            type="email"
            name=""
            v-model="email"
            id=""
            placeholder="abebe123@gmail.com"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
         
        </div>
      </div>

      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Enter Your Phone Nuber
          </label>
          <input
            type="text"
            name=""
            v-model="phone"
            id=""
            placeholder="0938943835"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <p class="text-red-600" v-if="errors.phone">
            * {{ errors.phone[0] }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap mt-4 mb-6">
        <div class="w-full ">
          <label
            class="block uppercase tracking-wide text-xs font-bold text-gray-900 mb-2"
          >
            Enter Your Address
          </label>
          <input
            type="text"
            name=""
            v-model="address"
            id=""
            placeholder="Addis Ababa, kebele 5"
            class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
         
        </div>
      </div>


      <div class="flex flex-wrap mb-6">
        <div class="w-full ">
          <button
            @click.prevent="Submit()"
            class="px-4 py-4 mb-10 text-sm relative font-medium w-full   text-center item-center rounded text-white bg-green-600 hover:bg-green-600/80"
          >
            <svg
              v-show="isLoading"
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
            <span :class="{ invisible: isLoading }">
              <span v-if="showCorrect">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="4.5"
                  stroke="currentColor"
                  class="w-8 h-10 text-white  relative left-1/2 -ml-2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </span>
              <span v-if="!showCorrect"> Submit </span></span
            >
          </button>
        </div>
      </div>
      </div>
     
    </div>
  </div>

</template>

<script setup>

import axios from "axios";
import Swal from "sweetalert2";

import { ref } from "vue";
import { useRouter ,useRoute} from "vue-router";

import { useUserStore } from "../stores/user-store";

const router = useRouter();
const route=useRoute();

let errors = ref([]);
let isLoading = ref(false);
let showCorrect = ref(false);
const userStore=useUserStore();


let  firstName=ref("")
let  lastName=ref("")
 let email =ref("")
 let phone =ref("")
 let address =ref("")

 


const Submit = async () => {
  isLoading.value = true;
  errors.value = [];
  alert(stocks.selling_price)

  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/savestockorder",{
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        phone:phone.value,
        address:address.value,
        user_id:userStore.id,
        stock_id:route.params.id,
        amount:stocks.value.amount,
        buying_price:stocks.value.selling_price,
      }
   
    );
    console.log(res.data.success);
    if (res.data.success == "true") {
      Swal.fire({
        toast: true,
        icon: "success",
        title: "You Sent stockorder successfully ",
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
      isLoading.value = false;
      showCorrect.value = true;
    }
  } catch (err) {
    errors.value = err.response.data.errors;
    isLoading.value = false;
    console.log(errors.value);
  }
};
</script>

<style scoped></style>
