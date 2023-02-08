<template>
  <div>
    <div class="my-5 grid grid-cols-3">
      <div class="lg:col-span-3 col-span-3 bg-indigo-200 space-y-8 px-12">
        <div
          class="border-4 border-gray-350 mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md"
        >
          <div
            class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0"
          >
            <div class="text-sm font-medium ml-3">Checkout</div>
          </div>
          <div
            class="text-sm tracking-wide z-1 text-gray-500 mt-4 sm:mt-0 sm:ml-4"
          >
            Complete your shipping and payment details below.
          </div>

          <div
            class="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>
        <div class="rounded-md">
          <form id="payment-form" method="POST" action="">
            <section>
              <h2
                class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2"
              >
                Shipping & Billing Information
              </h2>
              <fieldset
                class="mb-3 bg-white border-4 border-gray-350 shadow-lg rounded text-gray-600"
              >
                <label
                  class="flex border-t border-b border-gray-200 h-12 py-3 items-center select relative"
                >
                  <span class="text-right px-2 mr-3">SelectCity</span>
                  <div
                    id="country"
                    class="focus:outline-none px-3 w-full flex items-center"
                  >
                    <select
                      @change="showCountry(form.country)"
                      name="country"
                      v-model="form.country"
                      class="ml-2 bg-transparent flex-1 cursor-pointer focus:outline-red py-2"
                    >
                      <option value="bahirdar">Bahirdar</option>
                      <option value="gonder">Gonder</option>
                      <option value="debremarkos">DebreMarkos</option>
                      <option value="debretabor">Debretabor</option>
                      <option value="yeka">Yeka Kifleketema</option>
                      <option value="dilla">Dilla</option>
                      <option value="nazret">Nazret</option>
                      <option value="hawassa">Hawassa</option>
                      <option value="jimma">Jimma</option>
                      <option value="harar">Harar</option>
                      <option value="mekele">Mekele</option>
                      <option value="dangla">Dangla</option>
                      <option value="cosober">Cosober</option>
                      <option value="bure">Bure</option>
                      <option value="debark">Debark</option>
                      <option value="semera">Semera</option>
                      <option value="bole">Bole</option>
                      <option value="akaki">Akaki</option>
                      <option value="nfasslk">Nfas Slk kfle ketema</option>
                      <option value="addisketema">
                        Addis Ketema kfleketema
                      </option>
                      <option value="lideta">Lideta kfle ketema</option>
                      <option value="slulta">Slulta</option>
                      <option value="arada" selected="selected">
                        Arada Kfle ketema
                      </option>
                    </select>
                  </div>
                </label>
                <h1
                  v-if="form.country"
                  class="ml-2 text-lg text-green-600 font-italic"
                >
                  Shipping for {{ form.country }} is {{ shippingBirr }}
                </h1>

                <label
                  class="flex border-b border-gray-200 h-12 py-3 items-center"
                >
                  <span class="text-right px-2">First Name</span>
                  <input
                    name="first_name"
                    v-model="form.firstName"
                    class="focus:outline-none px-3"
                    placeholder="Try Odinsson"
                    required=""
                  />
                </label>
                <label
                  class="flex border-b border-gray-200 h-12 py-3 items-center"
                >
                  <span class="text-right px-2">Last Name</span>
                  <input
                    name="last_name"
                    v-model="form.lastName"
                    class="focus:outline-none px-3"
                    placeholder="Try Odinsson"
                    required=""
                  />
                </label>
                <label
                  class="flex border-b border-gray-200 h-12 py-3 items-center"
                >
                  <span class="text-right px-2">Address</span>
                  <input
                    name="address"
                    v-model="form.address"
                    class="focus:outline-none px-3"
                    placeholder="10 Street XYZ 654"
                  />
                </label>
                <label
                  class="flex border-b border-gray-200 h-12 py-3 items-center"
                >
                  <span class="text-right px-2">City</span>
                  <input
                    name="city"
                    v-model="form.city"
                    class="focus:outline-none px-3"
                    placeholder="San Francisco"
                  />
                </label>
                <label
                  class="flex border-b border-gray-200 h-12 py-3 items-center"
                >
                  <span class="text-right px-2">State</span>
                  <input
                    name="state"
                    v-model="form.state"
                    class="focus:outline-none px-3"
                    placeholder="Try CA"
                    required=""
                  />
                </label>

                <label
                  class="flex border-b border-gray-200 h-12 py-3 items-center"
                >
                  <span class="text-right px-2">Email</span>
                  <input
                    name="email"
                    v-model="form.email"
                    type="email"
                    class="focus:outline-none px-3"
                    placeholder="try@example.com"
                    required=""
                  />
                </label>
                <label>
                  <span class="text-right px-2">Phone</span>
                  <input
                    name="phone_number"
                    v-model="form.phone"
                    type="text"
                    class="focus:outline-none px-3"
                    placeholder="099054549"
                    required=""
                  />
                </label>

                <label
                  class="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3"
                >
                  <span class="text-right px-2 xl:px-0 xl:text-none">ZIP</span>
                  <input
                    name="zip_code"
                    v-model="form.zipCode"
                    class="focus:outline-none px-3"
                    placeholder="98603"
                  />
                </label>
              </fieldset>
            </section>
          </form>
        </div>
        <div class="rounded-md">
          <section>
            <h2
              class="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2"
            >
              Secure Payment
            </h2>
            <div>
              <button
                class="bg-green-500 px-5 py-2 text-3xl rounded"
                @click="showStripeForm = !showStripeForm"
              >
                Pay by Stripe 
              </button>
            </div>
             <div v-if="showStripeForm">
              <fieldset
              v-if="showStripeForm"
              class="mb-3 bg-white border-4 border-gray-400 shadow-lg rounded text-gray-600"
            >
              <label
                class="flex border-b border-gray-200 h-12 py-3 items-center"
              >
                <span class="text-right px-2">PaymentMethod</span>
                <select
                  id="cards"
                  name="CreditCardType"
                  v-model="form.cardType"
                  class="focus:outline-red py-2 px-3 w-full"
                >
                  <option selected></option>
                  <option value="5">Stripe</option>
                  <option value="6">Chapa</option>
                  <option value="7">Paypal</option>
                  <option value="8">YenePay</option>
                </select>
              </label>

              <label
                class="flex border-b border-gray-200 h-12 py-3 items-center"
              >
                <span class="text-right px-2">CardNo</span>
                <input
                  name="car_number"
                  v-model="form.cardNumber"
                  class="focus:outline-red px-3 py-2 w-full"
                  placeholder="Card number MM/YY CVC"
                  required=""
                />
              </label>
              <label
                class="flex border-b border-gray-200 h-12 py-3 items-center"
              >
                <span class="text-right px-2">CardCvv</span>
                <input
                  name="car_code"
                  v-model="form.cvv"
                  class="focus:outline-red px-3 py-2 w-full"
                  placeholder="022"
                  required=""
                />
              </label>
              <label>
                <span class="text-right px-2">
                  Select Expire Month
                  <select
                    id="months"
                    name="expirationMonth"
                    v-model="form.expirationMonth"
                    class="focus:outline-red py-2 px-3 w-full"
                  >
                    <option selected></option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </span>
              </label>

              <label>
                <span class="text-right px-2"> Select Expire Year </span>
                <select
                  id="months"
                  name="expirationYear"
                  v-model="form.expirationYear"
                  class="focus:outline-red py-2 px-3 w-full"
                >
                  <option selected></option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                  <option value="2033">2033</option>
                  <option value="2034">2034</option>
                  <option value="2035">2035</option>
                </select>
              </label>
            </fieldset>
            <div class="my-5">
              <button
                @click.prevent="getUserAddress()"
                class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-green-600 hover:bg-rose-600/80"
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
                  >Pay
                  {{ sumTotal(items.totalAmount, shippingBirr) }} Birr</span
                >
              </button>
            </div>
            <div>
              <button class="bg-green-500 px-5" @click="showStripeForm = false">
                Cancel Stripe
              </button>
            </div>
            </div>
          </section>
        </div>

        <div>
          <button  class="bg-green-500 px-5 py-2 text-3xl rounded" @click="showChapaForm = !showChapaForm">
            Pay By Chapa
          </button>
        </div>

       <div >
       

      


        <div class="my-5"  v-if="showChapaForm">
              <button
                @click.prevent="payChapa()"
                class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-green-600 hover:bg-rose-600/80"
              >
                <svg
                  v-show="isChapaLoading"
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
                <span :class="{ invisible: isChapaLoading }"
                  >Pay
                  {{ sumTotal(items.totalAmount, shippingBirr) }} Birr</span
                >
              </button>
            </div>

        <h1>Please click pament link to Pay </h1>
        <p v-if="paymentCheckout">
          <a class="hover:cursor-pointer" :href="paymentCheckout">{{
            paymentCheckout
          }}</a>
        </p>
        <div class="my-5">
          <button
            @click.prevent="getVerified()"
            class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-green-600 hover:bg-rose-600/80"
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
              >getVerified {{ referenceStore.paymentReference }}</span
            >
          </button>
        </div>

     
        <div>

          <button class="bg-gray-500 px-5" @click="showChapaForm = false">
            Cancel
          </button>
        </div>
       </div>
      </div>
    </div>
    <!-- 
       <button class="bg-green-600" @click="payChapa()">PayChapa {{ sumTotal(items.totalAmount,shippingBirr) }} Birr </button>
        </div>
        <h1>Please below link  to pay</h1>
        <p v-if="paymentCheckout">
        <a class="hover:cursor-pointer" :href="paymentCheckout">{{ paymentCheckout }}</a>
        </p>
      </div>
      <button class="bg-green-600" @click="getVerified()">getVerified {{ referenceStore.paymentReference}}</button> -->
  </div>
</template>

<script setup>
import Swal from "sweetalert2";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import NavigationVue from "../components/NavigationVue.vue";

import { useUserStore } from "../stores/user-store";
import { useCartStore } from "../stores/cart-store";
import { paymentReferenceStore } from "../stores/paymentReference-store";
import TopNavigation from "../components/structure/TopNavigation.vue";

const userStore = useUserStore();
const cartStore = useCartStore();
const referenceStore = paymentReferenceStore();
const showChapaForm = ref(false);
const showStripeForm = ref(false);
const showVerifyForm=ref(false);

const isLoading = ref(false);
const isChapaLoading=ref(false);
let items = ref([]);
let user = ref([]);
let shippingBirr = ref(0);
const router = useRouter();
const store = useStore();
const paymentCheckout = ref("");
const paymentReference = ref("");
let form = ref({
  country: "",
  firstName: "",
  lastName: "",
  state: "",
  email: "",
  zipCode: "",
  phone: "",
  address: "",
  city: "",
  cardType: "",
  expirationMonth: "",
  expirationYear: "",
  cvv: "",
  cardNumber: "",
});

onMounted(async () => {
  getCartItemsOnPageLoad();
  user.value = store.state.user.data;
  console.log("Belewu");
  console.log(user.value.id);
  console.log("hiiiii");
  paymentReference.value = referenceStore.paymentReference;
});

const sumTotal = (total, shipping) => {
  return parseInt(total) + parseInt(shipping);
};

const showCountry = (country) => {
  if (country == "bahirdar") {
    shippingBirr.value = 2000;
    alert(country);
  } else if (country == "gonder") {
    shippingBirr.value = 3000;
  } else if (country == "debremarkos") {
    shippingBirr.value = 1500;
  } else if (country == "debretabor") {
    shippingBirr.value = 2000;
  } else if (country == "dilla") {
    shippingBirr.value = 1000;
  } else if (country == "bahirdar") {
    shippingBirr.value = 2000;
  } else if (country == "yeka") {
    shippingBirr.value = 50;
  } else if (country == "akaki") {
    shippingBirr.value = 80;
  } else if (country == "slulta") {
    shippingBirr.value = 2000;
  } else if (country == "harar") {
    shippingBirr.value = 2000;
  } else if (country == "bole") {
    shippingBirr.value = 30;
  } else if (country == "nfasslk") {
    shippingBirr.value = 20;
  } else if (country == "semera") {
    shippingBirr.value = 4000;
  } else if (country == "slulta") {
    shippingBirr.value = 2000;
  } else if (country == "arada") {
    shippingBirr.value = 70;
  } else if (country == "lideta") {
    shippingBirr.value = 55;
  } else if (country == "bure") {
    shippingBirr.value = 1600;
  } else if (country == "nazret") {
    shippingBirr.value = 150;
  } else if (country == "hawassa") {
    shippingBirr.value = 1100;
  } else if (country == "jimma") {
    shippingBirr.value = 150;
  } else if (country == "mekele") {
    shippingBirr.value = 3000;
  } else if (country == "dangla") {
    shippingBirr.value = 1850;
  } else if (country == "cosober") {
    shippingBirr.value = 1900;
  } else if (country == "debark") {
    shippingBirr.value = 2400;
  } else {
    if (country == "addisketema") {
      shippingBirr.value = 40;
    }
  }
};

const getCartItemsOnPageLoad = async () => {
  user.value = store.state.user.data;
  console.log("hi");
  console.log("Bahir dar");
  console.log(user.value.id);
  let response = await axios.get(
    "http://127.0.0.1:8000/api/checkout/" + userStore.id
  );
  console.log("response", response);
  items.value = response.data.resdata;
  console.log("alemufad");
  console.log(items.value);
  console.log("Brazers");
  console.log(items.value.totalAmount);
};

const getUserAddress = async () => {
  isLoading.value = true;
  user.value = store.state.user.data;
  console.log(user.value.id);
  if (
    form.value.firstName == "" ||
    form.value.address == "" ||
    form.value.cardNumber == "" ||
    form.value.cvv == ""
  ) {
    Swal.fire({
      toast: true,
      icon: "error",
      title: "Please complete the form correctly",
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
  } else if (
    form.firstName != "" &&
    form.address != "" &&
    form.cardNumber != "" &&
    form.cvv != ""
  ) {
    // alert(`expiration Year is ${this.expirationYear} and expiration Month is ${this.expirationMonth} and the country is ${this.country} and card Type is ${this.cardType}`)
    let response = await axios.post("http://127.0.0.1:8000/api/payment", {
      user_id: userStore.id,
      country: form.value.country,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      state: form.value.state,
      email: form.value.email,
      zipCode: form.value.zipCode,
      phone: form.value.phone,
      address: form.value.address,
      city: form.value.city,
      cardType: form.value.cardType,
      expirationMonth: form.value.expirationMonth,
      expirationYear: form.value.expirationYear,
      cvv: form.value.cvv,
      cardNumber: form.value.cardNumber,
      amount: items.value.totalAmount + shippingBirr.value,
      order: items.value,
    });
    console.log(response);
    if (response.data.success) {
      cartStore.clearCarts();
      isLoading.value = false;
      Swal.fire({
        toast: true,
        icon: "success",
        title: response.data.success,
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

      setTimeout(() => {
        router.push("/userorderhistory");
      }, 3000);
    }
  } else {
    alert("bro");
    isLoading.value = false;
  }
};

const payChapa = async () => {
  isChapaLoading.value=true
 try {
  let response = await axios.post("http://127.0.0.1:8000/api/pay", {
    amount: items.value.totalAmount + shippingBirr.value,
  });
  console.log("chapa checkout url", response.data.payment.data.checkout_url);
  console.log("chapa referce url", response.data.data.tx_ref);
  console.log(response.data.payment.status)
  if(response.data.payment.status=='success'){
    showVerifyForm.value=true;
  }
   
  // console.log(response.data.payment.data.checkout_url);
  paymentCheckout.value = response.data.payment.data.checkout_url;
  paymentReference.value = response.data.data.tx_ref;
  referenceStore.setPaymentReference(paymentReference.value);
  isChapaLoading.value=false;

 } catch (error) {
  alert("Errorrrrrr")
  isChapaLoading.value=false
 }
};
const getVerified = async () => {
  try {
    isLoading.value = true;
  alert(`Your chapa reference is ${referenceStore.paymentReference}`);
  let response = await axios.get(
    "http://127.0.0.1:8000/api/callback/" + referenceStore.paymentReference
  );

  console.log(response.data.data.data);
  if (response.data.data.status == "success") {
    
    let res = await axios.post(
      "http://127.0.0.1:8000/api/paymentchapatotable",
      {
        user_id: userStore.id,
        country: form.value.country,
        firstName: response.data.data.data.first_name,
        lastName: response.data.data.data.last_name,
        state: form.value.state,
        email: response.data.data.data.email,
        zipCode: form.value.zipCode,
        phone: form.value.phone,
        address: form.value.address,
        city: form.value.city,
        cardType: "chapa",
        expirationMonth: "12",
        expirationYear: "2034",
        cvv: "1234",
        cardNumber: "3700000000",
        amount: response.data.data.data.amount,
        order: items.value,
      }
    );
    Swal.fire({
        toast: true,
        icon: "success",
        title: "Thank you , We are annouce you",
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
    cartStore.clearCarts();
    console.log(res);
    isLoading.value = false;
  }
  } catch (error) {
    Swal.fire({
        toast: true,
        icon: "error",
        title: 'please try again',
        animation: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    isLoading.value=false
  }

  // console.log(response.data.payment.data.checkout_url);
  // paymentCheckout.value=response.data.payment.data.checkout_url;
};

//  import Swal from 'sweetalert2';
// import axios from "axios";
// import NavigationVue from "../components/NavigationVue.vue";

// export default {
//   components: { NavigationVue },
//   data() {
//     return {
//       items: [],
//       country: "",
//       firstName: "",
//       lastName: "",
//       state: "",
//       email: "",
//       zipCode: "",
//       phone: "",
//       address: "",
//       city: "",
//       cardType: "",
//       expirationMonth: "",
//       expirationYear: "",
//       cvv: "",
//       cardNumber: "",
//     };
//   },

//   created() {
//     this.getCartItemsOnPageLoad();
//   },

//   methods: {
//     async getCartItemsOnPageLoad() {
//       console.log("hi");
//       let response = await axios.get("http://127.0.0.1:8000/api/checkout");
//       this.items = response.data;
//       console.log(this.items);
//     },
//     async getUserAddress() {
//       if (
//         this.firstName != "" &&
//         this.address != "" &&
//         this.cardNumber != "" &&
//         this.cvv != ""
//       ) {
//         // alert(`expiration Year is ${this.expirationYear} and expiration Month is ${this.expirationMonth} and the country is ${this.country} and card Type is ${this.cardType}`)
//         let response = await axios.post("http://127.0.0.1:8000/api/payment", {
//           'country': this.country,
//           'firstName': this.firstName,
//           'lastName': this.lastName,
//           'state': this.state,
//           'email': this.email,
//           'zipCode':this.zipCode,
//           'phone': this.phone,
//           'address': this.address,
//           'city': this.city,
//           'cardType': this.cardType,
//           'expirationMonth': this.expirationMonth,
//           'expirationYear': this.expirationYear,
//           'cvv': this.cvv,
//           'cardNumber': this.cardNumber,
//           'amount':this.items.totalAmount,
//           'order':this.items,
//         })
//         if(response.data.success){
//           Swal.fire({
//               toast: true,
//               icon: "success",
//               title: response.data.success,
//               animation: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 6500,
//               timerProgressBar: true,
//               didOpen: (toast) => {
//                   toast.addEventListener("mouseenter", Swal.stopTimer);
//                   toast.addEventListener("mouseleave", Swal.resumeTimer);
//               }

//           });

//       setTimeout(()=>{
//         this.$router.push('/');
//       },3000)
//         }
//     else if(response.data.error){
//           Swal.fire({
//               toast: true,
//               icon: "error",
//               title: "The transaction is failed",
//               animation: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 6500,
//               timerProgressBar: true,
//               didOpen: (toast) => {
//                   toast.addEventListener("mouseenter", Swal.stopTimer);
//                   toast.addEventListener("mouseleave", Swal.resumeTimer);
//               }
//           });
//         }

//       } else {
//         Swal.fire({
//               toast: true,
//               icon: "error",
//               title: "Please complete the form",
//               animation: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 6500,
//               timerProgressBar: true,
//               didOpen: (toast) => {
//                   toast.addEventListener("mouseenter", Swal.stopTimer);
//                   toast.addEventListener("mouseleave", Swal.resumeTimer);
//               }
//           });

//       }

//     },
//   },
// };
</script>

<style scoped></style>
