<template>
  <div class="mt-8">
    <div class="italic mb-3">
      <div class="items-center flex justify-center text-xl">
        <b>Notice :</b> When you recived your ordered, Click Mark as Accepted
        button, else don't.
      </div>
      <div class="text-3xl font-bold">Your Ordered History</div>
    </div>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
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
      <table
        v-if="isLoading == false"
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 z-0"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Transaction Id</th>

            <th scope="col" class="py-3 px-6">CLient Name</th>
            <th scope="col" class="py-3 px-6">Client Id</th>
            <th scope="col" class="py-3 px-6">Client Address</th>
            <th scope="col" class="py-3 px-6">Orders Details</th>
            <th scope="col" class="py-3 px-6">Amount</th>
            <th scope="col" class="py-3 px-6">Currency</th>
            <th scope="col" class="py-3 px-6">Ordered At</th>
            <th scope="col" class="py-3 px-6">Mark As Accepted</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="order in orderResponse"
            :key="order.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="py-4 px-6">
              {{ order.id }}
            </td>
            <td class="py-4 px-6">
              {{ order.client_name }}
            </td>
            <td class="py-4 px-6">
              {{ order.client_id }}
            </td>
            <td class="py-4 px-6">
              <!-- <div v-for="address in JSON.parse(order.client_address)">
                {{ address }}
              </div> -->
              {{ order.client_address }}
            </td>
            <td class="py-4 px-6">
              <!-- <div
                v-for="item in JSON.parse(order.order_details)"
                :key="item.id"
              >
                {{ item.id }}
                {{ item.quantity }}
              </div> -->
              {{ order.order_details }}
            </td>

            <td class="py-4 px-6">
              {{ order.amount }}
            </td>
            <td class="py-4 px-6">birr<!-- {{order.currency}} --></td>
            <td class="py-4 px-6">
              {{ filterTime(order.created_at) }}
            </td>
            <td class="py-4 px-6">
              <p
                :class="
                  order.accepted == 'accepted' ? 'text-blue-500' : 'text-black'
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
                    class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center item-center rounded text-white bg-gray-600 hover:bg-green-600/80"
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
                    <span :class="{ invisible: isLoisAcceptedLoadingading }">
                      <span>Mark as Accepted</span></span
                    >
                  </button>
                </div>
              </div>
            </td>

            <td class="py-4 px-6">
              <router-link :to="`/orderresponsedetail/${order.id}`">
                <button class="bg-green-500">View Details</button>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="flex items-center justify-center p-2">
                <v-pagination
                    class="p-10"
                    v-model="page"
                    :pages="pageCount"
                    :range-size="1"
                    active-color="#337aff"
                    @update:modelValue="getOrders"
                />
            </div> -->
  </div>
</template>

<script setup>
import axios from "axios";
import Swal from "sweetalert2";
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/user-store";
const userStore = useUserStore();
const orderResponse = ref([]);
const isLoading = ref(false);
const findTime = ref(0);
const isAcceptedLoading = ref(false);

onMounted(() => {
  getOrderResponse();
  isLoading.value = true;
});

const getOrderResponse = async () => {
  let res = await axios.get(
    "http://127.0.0.1:8000/api/getOrderResponse/" + userStore.id
  );
  orderResponse.value = res.data.orderResponse;
  console.log("response", res);
  isLoading.value = false;
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
        getOrderResponse();
        isAcceptedLoading = false;
        Swal.fire("Mark as Accepted", "You notified as Accepted.", "success");
      } catch (err) {
        isAcceptedLoading.value = false;
        console.log(err);
      }
    }
  });
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
