<!-- <template>
    <div>
hjd
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
      return {
          itemCount:0,  
         }
    },


    created(){
        this.getCartItemsOnPageLoad()
    },

  methods:{
     async getCartItemsOnPageLoad(){
          console.log('hi')
          let response=await axios.get('http://127.0.0.1:8000/api/checkout')
          
          console.log(response)
        }

  },

    }
</script>

<style scoped>

</style> -->

<template>
  <TopNavigation />
  <NavigationVue />
  
  {{ user }}
  <div>
    <div class="h-screen my-5 grid grid-cols-3">
      <div class="lg:col-span-1 w-full bg-white lg:block">
        <h1 class="py-6 border-b-2 text-xl text-gray-600 px-8">
          Order Summary
        </h1>
        <ul class="py-6 border-b space-y-6 px-8">
          <li
            v-for="item in items"
            :key="item.id"
            class="grid grid-cols-12 gap-2 border-b-1"
          >
            <div class="col-span-1 self-center">
              <img
                src="https://bit.ly/3oW8yej"
                alt="Product"
                class="rounded w-full"
              />
            </div>
            <div class="flex flex-col col-span-3 pt-2">
              <span class="text-gray-600 space-x-15 text-md font-semi-bold">{{
                item.name
              }}</span>
              <span
                class="text-gray-400 space-x-15 text-sm inline-block pt-2"
                >{{ item.quntity }}</span
              >
            </div>
            <div class="col-span-2 pt-3">
              <div class="flex items-center space-x-15 text-sm justify-between">
                <span class="text-gray-400"
                  >{{ item.quantity }} * {{ item.sale_price }} birr</span
                >
                <span class="text-pink-400 font-semibold inline-block">{{
                  item.total
                }}</span>
              </div>
            </div>
          </li>
        </ul>
        <div class="px-8 border-b">
          <div class="flex justify-between py-4 text-gray-600">
            <span>Shipping</span>
            <span class="font-semibold text-pink-500">Free</span>
          </div>
        </div>
        <div
          class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600"
        >
          <span>Total</span>
          <span>{{ items.totalAmount }}</span>
        </div>
      </div>
      <div class="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
        <div
          class="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md"
        >
          <div
            class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0"
          >
            <div class="text-sm font-medium ml-3">Checkout</div>
          </div>
          <div class="text-sm tracking-wide z-1 text-gray-500 mt-4 sm:mt-0 sm:ml-4">
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
              <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
                <label
                  class="flex border-t border-gray-200 h-12 py-3 items-center select relative"
                >
                  <span class="text-right px-2">Country</span>
                  <div
                    id="country"
                    class="focus:outline-none px-3 w-full flex items-center"
                  >
                    <select
                      name="country"
                      v-model="form.country"
                      class="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none"
                    >
                      <option value="AU">Australia</option>
                      <option value="BE">Belgium</option>
                      <option value="BR">Brazil</option>
                      <option value="CA">Canada</option>
                      <option value="CN">China</option>
                      <option value="DK">Denmark</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="HK">Hong Kong</option>
                      <option value="IE">Ireland</option>
                      <option value="IT">Italy</option>
                      <option value="JP">Japan</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MX">Mexico</option>
                      <option value="NL">Netherlands</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="SG">Singapore</option>
                      <option value="ES">Spain</option>
                      <option value="TN">Tunisia</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US" selected="selected">
                        United States
                      </option>
                    </select>
                  </div>
                </label>

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
            <fieldset class="mb-3 bg-white shadow-lg rounded text-gray-600">
              <label
                class="flex border-b border-gray-200 h-12 py-3 items-center"
              >
                <span class="text-right px-2">ChooseCard</span>
                <select
                  id="cards"
                  name="CreditCardType"
                  v-model="form.cardType"
                  class="focus:outline-none px-3 w-full"
                >
                  <option selected></option>
                  <option value="5">Visa</option>
                  <option value="6">MasterCard</option>
                  <option value="7">AmericanExpress</option>
                  <option value="8">Discover</option>
                </select>
              </label>

              <label
                class="flex border-b border-gray-200 h-12 py-3 items-center"
              >
                <span class="text-right px-2">CardNo</span>
                <input
                  name="car_number"
                  v-model="form.cardNumber"
                  class="focus:outline-none px-3 w-full"
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
                  class="focus:outline-none px-3 w-full"
                  placeholder="022"
                  required=""
                />
              </label>
              <label>
                <select
                  id="months"
                  name="expirationMonth"
                  v-model="form.expirationMonth"
                  class="focus:outline-none px-3 w-full"
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
              </label>

              <label>
                <select
                  id="months"
                  name="expirationYear"
                  v-model="form.expirationYear"
                  class="focus:outline-none px-3 w-full"
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
          </section>
        </div>
     <div class="my-5">
      <button
          @click.prevent="getUserAddress()"
          class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-rose-600 hover:bg-rose-600/80"
        >
        <svg v-show="isLoading" class="w-8 h-7 text-white animate-spin absolute  left-1/2 -ml-2.5" fill="none"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg">
      <circle class="opacity-25" cx="12" cy="12" r="11" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"></path>
    </svg>
          <span :class="{'invisible': isLoading}">Pay {{ items.totalAmount }} Birr</span>
        </button>
     </div>
      </div>
    </div>
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
import TopNavigation from "../components/structure/TopNavigation.vue";


const userStore=useUserStore();
const cartStore=useCartStore();

const isLoading = ref(false);
let items = ref([]);
let user = ref([]);
const router = useRouter();
const store = useStore();

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
});

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
  isLoading.value=true;
  user.value = store.state.user.data;
  console.log(user.value.id);
  if (
    form.value.firstName == "" &&
    form.value.address == "" &&
    form.value.cardNumber == "" &&
    form.value.cvv == ""
  ){
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
    isLoading.value=false
  }
  else if (
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
      amount: items.value.totalAmount,
      order: items.value,
    });
    console.log(response);
    if (response.data.success) {
      cartStore.clearCarts()
      isLoading.value=false;
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
        router.push("/");
      }, 3000);
    } 
  }
  else{
    alert('bro')
    isLoading.value=false
  }
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
