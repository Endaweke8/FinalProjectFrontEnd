<template>
  <!-- Modal toggle -->
  <div class="mt-12">
    <button
      @click="showEditClientAddress = true"
      data-modal-target="authentication-modal"
      data-modal-toggle="authentication-modal"
      class="block text-black hover:bg-green-500 hover:text-white bg-white border border-green-500 right-0 top-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      Edit Your Address
    </button>
  </div>

  <!-- Main modal -->
  <div
    v-if="showEditClientAddress"
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed bg-gray-300 flex items-center justify-center bg-opacity-50 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-3rem)] md:h-full"
  >
    <div class="relative w-full h-full max-w-md md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          @click="showEditClientAddress = false"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
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
            Edit Your Address
          </h3>
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
                  <!-- <p class="text-red-600" v-if="errors.city">
                    * {{ errors.city[0] }}
                  </p> -->
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

            <div class="relative mb-[20px]">
              <button
                @click.prevent="updateAddress()"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
import { useClinetAddressStore } from "../stores/client-address-store";
import { useUserStore } from "../stores/user-store";
const showEditClientAddress = ref(false);

const clientAddressStore = useClinetAddressStore();
const userStore = useUserStore();
const isLoading = ref(false);
let errors = ref([]);
const addressform = reactive({
  city: "",
  subcity: "",
  kebele: "",
  address: "",
  phone: "",
  postal_code: "",
});

onMounted(() => {
  addressform.city = clientAddressStore.city;
  addressform.subcity = clientAddressStore.subcity;
  addressform.kebele = clientAddressStore.kebele;
  addressform.address = clientAddressStore.address;
  addressform.phone = clientAddressStore.phone;
  addressform.postal_code = clientAddressStore.postal_code;
});

const updateAddress = async () => {
  try {
    isLoading.value = true;
    errors.value = [];

    // alert(`expiration Year is ${this.expirationYear} and expiration Month is ${this.expirationMonth} and the city is ${this.city} and card Type is ${this.cardType}`)
    let response = await axios.put(
      "http://127.0.0.1:8000/api/updateaddress/" + userStore.id,
      {
        city: addressform.city,
        subcity: addressform.subcity,
        kebele: addressform.kebele,
        address: addressform.address,
        postal_code: addressform.postal_code,
        phone: addressform.phone,
        email: userStore.email,
      }
    );
    isLoading.value = false;

    await clientAddressStore.fetchClientAddressByUserId(userStore.id);
    Swal.fire({
      toast: true,
      icon: "success",
      title: "You  updated your address successfully ",
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
    showEditClientAddress.value = false;
  } catch (error) {
    isLoading.value = false;
    errors.value = error.response.data.errors;
  }
};
</script>
