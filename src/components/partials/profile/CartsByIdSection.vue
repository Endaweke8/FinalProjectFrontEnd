<template>
  <div v-if="cartStore.carts" class="mx-auto mt-12">
    <div class="text-gray-900 text-xl">Carts</div>
    <div class="bg-green-500 w-full h-1 mb-4"></div>

    <div v-if="cartStore.carts" class="bg-white rounded px-8 pt-6 pb-8">
      <div
        v-for="(cart, index) in cartStore.carts.cart"
        :key="index"
        class="flex flex-wrap items-center"
      >
        <div
          v-if="cart.quantity > 0"
          class="w-1/4 flex flex-wrap mr-auto mt-2 text-lg p-1 text-gray-900"
        >
          {{ ++index }}
        </div>
        <div
          v-if="cart.quantity > 0"
          v-for="cartwproduct in cartStore.carts.cartwithproduct"
          :key="cartwproduct"
        >
          <div v-if="cart.product_id == cartwproduct.id">
            <a
              :href="
                `${endpoint}/images/productprofiles/` + cartwproduct.image_name
              "
              target="_blank"
            >
              <img
                :src="
                  `${endpoint}/images/productprofiles/` +
                  cartwproduct.image_name
                "
                class="rounded-full"
                width="60"
              />
            </a>
          </div>
          <div v-if="cart.product_id == cartwproduct.id">
            product id {{ cart.product_id }}
          </div>

          <div v-if="cart.product_id == cartwproduct.id">
            Name : {{ cartwproduct.name }}
          </div>

          <div v-if="cart.product_id == cartwproduct.id">
            Sale_price : {{ cartwproduct.sale_price }} birr
          </div>
          <div v-if="cart.product_id == cartwproduct.id">
            Subtotal : {{ cartwproduct.total }} birr
          </div>
          <div v-if="cart.product_id == cartwproduct.id"></div>
        </div>
        <span v-if="cart.quantity > 0">
          <button
            @click="addToCart(cart.product_id)"
            class="bg-transparent hover:bg-green-400 text-gray-900 font-semibold hover:text-white py-2 px-4 mx-2 border border-green-400 hover:border-transparent rounded"
          >
            +
          </button>
          <span class="items-center justify-center"> {{ cart.quantity }}</span>
          <button
            @click="removeFromCart(cart.product_id, cart.quantity)"
            class="bg-transparent hover:bg-yellow-400 text-gray-900 font-semibold hover:text-white py-2 px-4 mx-2 border border-green-300 hover:border-transparent rounded"
          >
            -
          </button>
        </span>
        <div
          v-if="cart.quantity > 0"
          class="w-1/4 mr-auto mt-2 mx-4 items-center text-lg p-1 text-gray-900"
        >
          quantity {{ cart.quantity }}

          <!-- <iframe class="w-full h-20" :src="video.url"></iframe> -->
        </div>

        <div v-if="cart.quantity > 0" class="w-1/4 flex flex-wrap ml-auto p-1">
          <button
            @click="deleteCart(cart)"
            class="float-right bg-transparent hover:bg-red-500 text-gray-900 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            Remove
          </button>
        </div>
        <br />
        <br />
        <div
          v-if="cart.quantity > 0"
          class="bg-black w-full h-0.5 rounded mb-4"
        ></div>
      </div>
    </div>

    <div class="mb-10">
      <span v-if="cartStore.carts"
        ><span
          class="text-3xl text-bold"
          v-if="cartStore.carts.cartwithproduct.totalAmount > 0"
          >Total Amount :
          {{ cartStore.carts.cartwithproduct.totalAmount }} birr</span
        ></span
      >

      <span v-if="cartStore.carts.cartwithproduct.totalAmount > 0">
        <button
          class="bg-green-500 mt-3 mx-5 px-4 py-4 text-2xl rounded text-white p-1"
          @click="showPayForm = !showPayForm"
        >
          Pay Now
        </button>
      </span>
      <div>
        <div>
          <div class="my-5 grid grid-cols-3">
            <div class="lg:col-span-3 col-span-3 bg-indigo-200 space-y-8 px-12">
              <div
                v-if="!clientAddressStore.id"
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
              <div class="rounded-md" v-if="!clientAddressStore.id">
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
                          id="city"
                          class="focus:outline-none px-3 w-full flex items-center"
                        >
                          <select
                            name="city"
                            v-model="addressform.city"
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
                            <option value="nfasslk">
                              Nfas Slk kfle ketema
                            </option>
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
                      <p class="text-red-600" v-if="errors.city">
                        * {{ errors.city[0] }}
                      </p>
                      <!-- <h1
                        v-if="addressform.city"
                        class="ml-2 text-lg text-green-600 font-italic"
                      >
                        Shipping for {{ addressform.city }} is
                        {{ shippingBirr }}
                      </h1> -->

                      <label
                        class="flex border-b border-gray-200 h-12 py-3 items-center"
                      >
                        <span class="text-right px-2">Subcity</span>
                        <input
                          name="subcity"
                          v-model="addressform.subcity"
                          class="focus:outline-none px-3"
                          placeholder="Arada"
                        />
                      </label>
                      <p class="text-red-600" v-if="errors.subcity">
                        * {{ errors.subcity[0] }}
                      </p>
                      <label
                        class="flex border-b border-gray-200 h-12 py-3 items-center"
                      >
                        <span class="text-right px-2">Kebele</span>
                        <input
                          name="kebele"
                          v-model="addressform.kebele"
                          class="focus:outline-none px-3"
                          placeholder="14"
                        />
                      </label>
                      <p class="text-red-600" v-if="errors.kebele">
                        * {{ errors.kebele[0] }}
                      </p>
                      <label
                        class="flex border-b border-gray-200 h-12 py-3 items-center"
                      >
                        <span class="text-right px-2">address</span>
                        <input
                          name="address"
                          v-model="addressform.address"
                          class="focus:outline-none px-3"
                          placeholder="Medhanialem Betekrstian geba blo"
                        />
                      </label>
                      <p class="text-red-600" v-if="errors.address">
                        * {{ errors.address[0] }}
                      </p>
                      <label>
                        <span class="text-right px-2">Phone</span>
                        <input
                          name="phone_number"
                          v-model="addressform.phone"
                          type="text"
                          class="focus:outline-none px-3"
                          placeholder="099054549"
                        />
                      </label>
                      <p class="text-red-600" v-if="errors.phone">
                        * {{ errors.phone[0] }}
                      </p>
                      <label
                        class="xl:w-1/4 xl:inline-flex py-3 items-center flex xl:border-none border-t border-gray-200 py-3"
                      >
                        <span class="text-right px-2 xl:px-0 xl:text-none"
                          >PostalCode/ZIP</span
                        >
                        <input
                          name="zip_code"
                          v-model="addressform.postal_code"
                          class="focus:outline-none px-3"
                          placeholder="98603"
                        />
                      </label>
                    </fieldset>
                  </section>
                </form>

                <div class="relative mb-[100px]">
                  <button
                    @click.prevent="saveAddress()"
                    class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-green-500 hover:bg-reen-400 z-1 mt-8"
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
                          v-model="paymentinfo.cardType"
                          class="focus:outline-red py-2 px-3 w-full"
                        >
                          <option selected></option>
                          <option value="5">Visa</option>
                          <option value="6">Master Card</option>
                          <option value="7">American Impress</option>
                        </select>
                      </label>

                      <label
                        class="flex border-b border-gray-200 h-12 py-3 items-center"
                      >
                        <span class="text-right px-2">CardNo</span>
                        <input
                          name="car_number"
                          v-model="paymentinfo.cardNumber"
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
                          v-model="paymentinfo.cvv"
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
                            v-model="paymentinfo.expirationMonth"
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
                        <span class="text-right px-2">
                          Select Expire Year
                        </span>
                        <select
                          id="months"
                          name="expirationYear"
                          v-model="paymentinfo.expirationYear"
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
                        class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-green-600 hover:bg-green-400/90"
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
                          {{ sumTotal(items.totalAmount, shippingBirr) }}
                          Birr
                          <span class="pl-3" v-if="clientAddressStore.id">
                            = {{ items.totalAmount }} for total Items and
                            {{ shippingBirr }} for Shipping</span
                          >
                        </span>
                      </button>
                    </div>
                  </div>
                </section>
              </div>

              <div>
                <button
                  class="bg-green-500 px-5 py-2 text-3xl rounded"
                  @click="showChapaForm = !showChapaForm"
                >
                  Pay By Chapa
                </button>
              </div>

              <div>
                <div class="my-5" v-if="showChapaForm">
                  <button
                    @click.prevent="payChapa()"
                    class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-green-600 hover:bg-green-400/90"
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
                      >Pay {{ sumTotal(items.totalAmount, shippingBirr) }} Birr
                      <span class="pl-3" v-if="clientAddressStore.id">
                        = {{ items.totalAmount }} for total Items and
                        {{ shippingBirr }} for Shipping</span
                      >
                    </span>
                  </button>
                </div>

                <h1 v-if="paymentCheckout">Please click payment link to Pay</h1>
                <p v-if="paymentCheckout">
                  <a class="hover:cursor-pointer" :href="paymentCheckout">{{
                    paymentCheckout
                  }}</a>
                </p>
                <div class="my-5" v-if="referenceStore.paymentReference">
                  <button
                    @click.prevent="getVerified()"
                    class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-green-500 hover:bg-green-400"
                  >
                    <svg
                      v-show="isVerifiedLoading"
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
                    <span :class="{ invisible: isVerifiedLoading }"
                      >getVerified {{ referenceStore.paymentReference }}</span
                    >
                  </button>
                </div>

                <div></div>
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
        <div v-if="removeFromDisplay">
          <div v-for="item in items" :key="item.id">
            {{ item.id }} {{ item.quantity }}
            {{ decreseQuantity(item.id, item.quantity) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

import Swal from "sweetalert2";
import { useCartStore } from "../../../stores/cart-store";
import { useUserStore } from "../../../stores/user-store";
import { useClinetAddressStore } from "../../../stores/client-address-store";

import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

import { paymentReferenceStore } from "../../../stores/paymentReference-store";
const endpoint = import.meta.env.VITE_APP_API_URL;

const cartQuantity = ref(0);
const showPayForm = ref(false);
const productQuantity = ref(0);
const totalPayment = ref(0);

const userStore = useUserStore();
const clientAddressStore = useClinetAddressStore();
const cartStore = useCartStore();
const referenceStore = paymentReferenceStore();
const showChapaForm = ref(false);
const showStripeForm = ref(false);
const showVerifyForm = ref(false);
const stripeError = ref("");
const isVerifiedLoading = ref(false);

const isLoading = ref(false);

let errors = ref([]);
const isChapaLoading = ref(false);
let items = ref([]);
let user = ref([]);
let shippingBirr = ref(0);
const router = useRouter();
const store = useStore();
const paymentCheckout = ref("");
const paymentReference = ref("");
const removeFromDisplay = ref(false);

let addressform = ref({
  city: "",
  subcity: "",
  kebele: "",
  address: "",
  phone: "",
  postal_code: "",
});

let paymentinfo = ref({
  cardType: "",
  expirationMonth: "",
  expirationYear: "",
  cvv: "",
  cardNumber: "",
});

onMounted(async () => {
  getCartItemsOnPageLoad();
  paymentReference.value = referenceStore.paymentReference;
});

const deleteCart = async (cart) => {
  Swal.fire({
    title: "Are you sure you want to remove this from cart?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete("http://127.0.0.1:8000/api/cart/" + cart.id);
        cartStore.fetchCartsByUserId(userStore.id);
        getCartItemsOnPageLoad();
        Swal.fire("Deleted!", "Your video has been deleted.", "success");
      } catch (err) {
        console.log(err);
      }
    }
  });
};

const addToCart = async (product_id) => {
  let res = await axios.get("http://127.0.0.1:8000/api/getcart/" + product_id);
  cartQuantity.value = res.data.cartQuantity;
  console.log(cartQuantity.value);
  let ress = await axios.get(
    "http://127.0.0.1:8000/api/getsingleproduct/" + product_id
  );
  productQuantity.value = ress.data[0].productquantity;
  console.log(ress.data[0].productquantity);
  if (cartQuantity.value >= productQuantity.value) {
    Swal.fire({
      toast: true,
      icon: "error",
      title:
        "Sorry,You are ordering " +
        cartQuantity.value +
        " currently the available quantity of this product is " +
        productQuantity.value,
      animation: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    return;
  }
  await axios
    .post("http://127.0.0.1:8000/api/cart/" + userStore.id, {
      product_id: product_id,
      user_id: userStore.id,
    })
    .then((response) => {
      cartStore.fetchCartsByUserId(userStore.id);
      getCartItemsOnPageLoad();
      sumTotal();

      Swal.fire({
        toast: true,
        icon: "success",
        title: "You added to cart successfuly",
        animation: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    });
};

const removeFromCart = async (product_id, quantity) => {
  if (quantity < 1) {
    Swal.fire({
      toast: true,
      icon: "error",
      title: "The item is empty",
      animation: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  } else {
    var url = "http://127.0.0.1:8000/api/removeFromCart";
    await axios
      .post(url, {
        product_id: product_id,
        // 'user_id':user.value.id
      })
      .then((response) => {
        cartStore.fetchCartsByUserId(userStore.id);
        getCartItemsOnPageLoad();

        sumTotal();

        Swal.fire({
          toast: true,
          icon: "warning",
          title: "You removed from cart succesfuly",
          animation: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        console.log(response.data);
      });
  }
};

const sumTotal = (total, shipping) => {
  console.log("The total Price is ", total);
  return parseInt(total) + parseInt(shipping);
};

const decreseQuantity = async (id, productQuantity) => {
  if (id) {
    try {
      var page = "http://127.0.0.1:8000/api/decreaseproduct/" + id;
      const res = await axios.put(page, {
        productquantity: productQuantity,
        status: "requested",
      });
    } catch (err) {
      console.log(err);
    }
  } else {
    cartStore.clearCarts();
    await axios.delete(
      "http://127.0.0.1:8000/api/cartafterpayment/" + userStore.id
    );
    router.push("/userorderhistory");
  }
};

if (clientAddressStore.city == "bahirdar") {
  shippingBirr.value = 2000;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "gonder") {
  shippingBirr.value = 3000;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "debremarkos") {
  shippingBirr.value = 1500;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "debretabor") {
  shippingBirr.value = 2000;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "dilla") {
  shippingBirr.value = 1000;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "bahirdar") {
  shippingBirr.value = 2000;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "yeka") {
  shippingBirr.value = 50;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "akaki") {
  shippingBirr.value = 80;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "slulta") {
  shippingBirr.value = 2000;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "harar") {
  shippingBirr.value = 2000;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "bole") {
  shippingBirr.value = 30;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "nfasslk") {
  shippingBirr.value = 20;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "semera") {
  shippingBirr.value = 4000;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "slulta") {
  shippingBirr.value = 2000;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "arada") {
  shippingBirr.value = 70;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "lideta") {
  shippingBirr.value = 55;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "bure") {
  shippingBirr.value = 1600;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "nazret") {
  alert(clientAddressStore.city);
  shippingBirr.value = 150;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "hawassa") {
  shippingBirr.value = 1100;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "jimma") {
  shippingBirr.value = 150;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "mekele") {
  shippingBirr.value = 3000;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "dangla") {
  shippingBirr.value = 1850;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "cosober") {
  shippingBirr.value = 1900;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else if (clientAddressStore.city == "debark") {
  shippingBirr.value = 2400;
  totalPayment.value = totalPayment.value + shippingBirr.value;
} else {
  if (clientAddressStore.city == "addisketema") {
    shippingBirr.value = 40;
    totalPayment.value = totalPayment.value + shippingBirr.value;
  }
}

const getCartItemsOnPageLoad = async () => {
  //   user.value = store.state.user.data;
  //   console.log("hi");
  //   console.log("Bahir dar");
  //   console.log(user.value.id);
  let response = await axios.get(
    "http://127.0.0.1:8000/api/checkout/" + userStore.id
  );
  console.log("response", response.data.resdata);

  items.value = response.data.resdata;
  totalPayment.value = items.value.totalAmount;
  //   alert(items.value.totalAmount)
  console.log("alemufad");
  console.log(items.value);
  console.log("Brazers");
  console.log(items.value.totalAmount);
};

const getUserAddress = async () => {
  isLoading.value = true;
  if (!clientAddressStore.id) {
    Swal.fire({
      toast: true,
      icon: "error",
      title: "Please complete the Address form correctly",
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
    paymentinfo.cardNumber != "" &&
    paymentinfo.cvv != "" &&
    paymentinfo.expirationMonth != "" &&
    paymentinfo.expirationYear != ""
  )
    try {
      // alert(`expiration Year is ${this.expirationYear} and expiration Month is ${this.expirationMonth} and the city is ${this.city} and card Type is ${this.cardType}`)
      let response = await axios.post("http://127.0.0.1:8000/api/payment", {
        user_id: userStore.id,
        city: clientAddressStore.city,
        firstName: userStore.firstName,
        lastName: userStore.lastName,
        state: clientAddressStore.kebele,
        email: userStore.email,
        zipCode: clientAddressStore.postal_code,
        phone: clientAddressStore.phone,
        address: clientAddressStore.address,
        city: clientAddressStore.city,
        cardType: paymentinfo.value.cardType,
        expirationMonth: paymentinfo.value.expirationMonth,
        expirationYear: paymentinfo.value.expirationYear,
        cvv: paymentinfo.value.cvv,
        cardNumber: paymentinfo.value.cardNumber,
        amount: items.value.totalAmount + shippingBirr.value,
        total_buying_price: items.value.totalBuyingPrice,
        payment_method: "stripe",
        card_no: paymentinfo.value.cardNumber,
        shipping_birr: shippingBirr.value,
        order: items.value,
      });
      console.log(response.data.errors);
      if (response.data.success) {
        removeFromDisplay.value = true;
        // cartStore.clearCarts();
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
          // router.push("/userorderhistory");
        }, 3000);
      }
    } catch (error) {
      console.log(error.response.data.errors);
      isLoading.value = false;
      Swal.fire({
        toast: true,
        icon: "error",
        title: "Failed to pay because, " + error.response.data.errors,
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
    }
};

const saveAddress = async () => {
  // isLoading.value = true;
  try {
    isLoading.value = true;
    errors.value = [];

    // alert(`expiration Year is ${this.expirationYear} and expiration Month is ${this.expirationMonth} and the city is ${this.city} and card Type is ${this.cardType}`)
    let response = await axios.post("http://127.0.0.1:8000/api/saveaddress", {
      user_id: userStore.id,
      city: addressform.value.city,
      subcity: addressform.value.subcity,
      kebele: addressform.value.kebele,
      address: addressform.value.address,
      postal_code: addressform.value.postal_code,
      phone: addressform.value.phone,
      email: userStore.email,
    });
    // console.log(response);
    await clientAddressStore.setClientAddress(response.data);
    await clientAddressStore.fetchClientAddressByUserId(userStore.id);
  } catch (error) {
    errors.value = error.response.data.errors;
    isLoading.value = false;
  }
};

const payChapa = async () => {
  isChapaLoading.value = true;
  try {
    let response = await axios.post("http://127.0.0.1:8000/api/pay", {
      amount: items.value.totalAmount + shippingBirr.value,
    });
    console.log("chapa checkout url", response.data.payment.data.checkout_url);
    console.log("chapa referce url", response.data.data.tx_ref);
    console.log(response.data.payment.status);
    if (response.data.payment.status == "success") {
      showVerifyForm.value = true;
    }

    // console.log(response.data.payment.data.checkout_url);
    paymentCheckout.value = response.data.payment.data.checkout_url;
    window.location.href = paymentCheckout.value;
    paymentReference.value = response.data.data.tx_ref;
    referenceStore.setPaymentReference(paymentReference.value);
    isChapaLoading.value = false;
  } catch (error) {
    isChapaLoading.value = false;
    Swal.fire({
      toast: true,
      icon: "error",
      title: "please try again",
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
  }
};

const getVerified = async () => {
  try {
    isVerifiedLoading.value = true;
    //   alert(`Your chapa reference is ${referenceStore.paymentReference}`);
    let response = await axios.get(
      "http://127.0.0.1:8000/api/callback/" + referenceStore.paymentReference
    );

    console.log(response.data.data.data);
    if (response.data.data.status == "success") {
      let res = await axios.post(
        "http://127.0.0.1:8000/api/paymentchapatotable",
        {
          user_id: userStore.id,
          city: clientAddressStore.city,
          firstName: userStore.firstName,
          lastName: userStore.lastName,
          state: clientAddressStore.kebele,
          email: userStore.email,
          zipCode: clientAddressStore.postal_code,
          phone: clientAddressStore.phone,
          address: clientAddressStore.address,
          city: clientAddressStore.city,
          cardType: "chapa",
          expirationMonth: "12",
          expirationYear: "2034",
          cvv: "1234",
          cardNumber: "3700000000",
          amount: response.data.data.data.amount,
          total_buying_price: items.value.totalBuyingPrice,
          payment_method: "chapa",
          shipping_birr: shippingBirr.value,
          order: items.value,
        }
      );
      Swal.fire({
        toast: true,
        icon: "success",
        title:
          "Thank you ,order comleted successfuly , We will send you reciept via your email",
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
      referenceStore.clearPaymentReference();
      removeFromDisplay.value = true;
      console.log(res);
      isVerifiedLoading.value = false;
    }
  } catch (error) {
    Swal.fire({
      toast: true,
      icon: "error",
      title: "please try again" + error,
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
    isVerifiedLoading.value = false;
  }

  // console.log(response.data.payment.data.checkout_url);
  // paymentCheckout.value=response.data.payment.data.checkout_url;
};
</script>
