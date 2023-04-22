<template>
  <div>
    <div class="inset-y-0 mt-5 right-0 bg-gray-50 p-[20px]">
      <div class="border border-gray-300 rounded-md p-[20px] mb-10 z-19">
        <div class="grid gap-4 lg:grid-cols-4">
          <div
            v-if="userStore.role == 'manager'"
            class="flex border-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/users">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ totalUsers }}
                </h4>
                <div class="text-gray-500 text-sm">All Customers</div>
              </router-link>
            </div>
          </div>
          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'socialmediamanager'
            "
            class="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/products">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ totalProducts }}
                </h4>
                <div class="text-gray-500 text-sm">All Products</div>
              </router-link>
            </div>
          </div>

          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'socialmediamanager'
            "
            class="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/totalsoldproducts">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ totalSoldProducts }}
                </h4>
                <div class="text-gray-500 text-sm">Totally Sold Products</div>
              </router-link>
            </div>
          </div>

          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'socialmediamanager'
            "
            class="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/adminstocks">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ totalStocks }}
                </h4>
                <div class="text-gray-500 text-sm">All Stocks</div>
              </router-link>
            </div>
          </div>

          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'customerserviceofficor'
            "
            class="flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/messages">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ totalMessages }}
                </h4>
                <div class="text-gray-500 text-sm">All Messages</div>
              </router-link>
            </div>
          </div>

          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'customerserviceofficor' ||
              userStore.role == 'delivery'
            "
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 flex justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/orders">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ totalTransactions }}
                </h4>
                <div class="text-gray-500 text-sm">All Orders</div>
              </router-link>
            </div>
          </div>

          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'customerserviceofficor'
            "
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 flex justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/userstockorders">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ totalStockOrders }}
                </h4>
                <div class="text-gray-500 text-sm">Total Stock Ordered</div>
              </router-link>
            </div>
          </div>

          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'customerserviceofficor'
            "
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 flex justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/userstockrequests">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ totalStockAsked }}
                </h4>
                <div class="text-gray-500 text-sm">Total Stock Asked</div>
              </router-link>
            </div>
          </div>

          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'customerserviceofficor'
            "
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 flex justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/usersellstockrequests">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ totalSellStockRequested }}
                </h4>
                <div class="text-gray-500 text-sm">
                  Total Sell Stock Requested
                </div>
              </router-link>
            </div>
          </div>

          <div
            v-if="userStore.role == 'manager'"
            class="flex justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100"
          >
            <div class="p-3 bg-indigo-600 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div class="mx-4">
              <span class="text-sm font-semibold text-gray-700">
                {{ totalSales }}
              </span>
              <span class="ml-1 text-sm text-blue-400">birr</span>
              <div class="text-gray-500 text-sm">Total Sales</div>
            </div>
          </div>

          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'customerserviceofficor' ||
              userStore.role == 'delivery'
            "
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 flex justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/pendingorders">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ pendingOrders }}
                </h4>
                <div class="text-gray-500 text-sm">Pending Orders</div>
              </router-link>
            </div>
          </div>

          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'customerserviceofficor' ||
              userStore.role == 'delivery'
            "
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 flex justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/deliveredorders">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ deliveredOrders }}
                </h4>
                <div class="text-gray-500 text-sm">Delivered Orders</div>
              </router-link>
            </div>
          </div>

          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'customerserviceofficor' ||
              userStore.role == 'delivery'
            "
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 flex justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/notifiedorder">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ notifiedOrders }}
                </h4>
                <div class="text-gray-500 text-sm">Notified Orders</div>
              </router-link>
            </div>
          </div>

          <div
            v-if="
              userStore.role == 'manager' ||
              userStore.role == 'customerserviceofficor' ||
              userStore.role == 'delivery'
            "
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-100 flex justify-center items-center px-4 py-6 bg-white rounded-full shadow-xl"
          >
            <div class="p-3 bg-indigo-600 rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <div class="mx-4">
              <router-link to="/acceptedorders">
                <h4 class="text-sm font-semibold text-gray-700">
                  {{ acceptedOrders }}
                </h4>
                <div class="text-gray-500 text-sm">Accepted Orders</div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import { useUserStore } from "../stores/user-store";
import { useBookmarkStore } from "../stores/bookmark-store";
import { usePostStore } from "../stores/post-store";
import { useCartStore } from "../stores/cart-store";
import { useProfileStore } from "../stores/profile-store";
import { useSongStore } from "../stores/song-store";
import { useVideoStore } from "../stores/video-store";
import axios from "axios";
// import FooterSection from "../components/structure/FooterSection.vue";
const bookmarkStore = useBookmarkStore();
const userStore = useUserStore();
const profileStore = useProfileStore();
const songStore = useSongStore();
const postStore = usePostStore();
const videoStore = useVideoStore();
const cartStore = useCartStore();
const store = useStore();
const router = useRouter();
const showDropDownNotifications = ref(false);
const showDropDown = ref(false);
const showSide = ref(true);
const notifications = ref([]);
const totalUsers = ref(0);
const totalProducts = ref(0);
const totalSoldProducts = ref(0);
const totalStocks = ref(0);
const totalMessages = ref(0);
const totalStockOrders = ref(0);
const totalStockAsked = ref(0);
const pendingOrders = ref(0);
const deliveredOrders = ref(0);
const acceptedOrders = ref(0);
const totalSellStockRequested = ref(0);
const notifiedOrders = ref(0);
const totalTransactions = ref(0);
const totalSales = ref(0);
const showSideBar = ref(true);
onMounted(() => {
  getNotification();
  getTotalUsers();
  getTotalProducts();
  getTotalTransaction();
  getTotalStocks();
  getTotalSales();
  gettotalStockOrders();
  getTotalPendingOrders();
  getTotalDeliveredOrders();
  getTotalAcceptedOrders();
  getTotalSellStockRequested();
  getTotallySoldProducts();
  getTotalNotifiedOrders();
  gettotalStockAsked();
  getTotalMessages();
});
const getTotalUsers = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_users");
  totalUsers.value = res.data.totalUsers;
  console.log("response", res);
};
const getTotalProducts = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_products");
  totalProducts.value = res.data.totalProducts;
  console.log("response", res);
};
const getTotallySoldProducts = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_soldproducts");
  totalSoldProducts.value = res.data.totalSoldProducts;
  console.log("response", res);
};
const getTotalStocks = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_stocks");
  totalStocks.value = res.data.totalStocks;
  console.log("response", res);
};
const getTotalMessages = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_messages");
  totalMessages.value = res.data.totalMessages;
  console.log("response", res);
};
const gettotalStockOrders = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_stockorder");
  totalStockOrders.value = res.data.totalStockOrders;
  console.log("response", res);
};
const getTotalPendingOrders = async () => {
  let res = await axios.get(
    "http://127.0.0.1:8000/api/get_total_pendingorders"
  );
  pendingOrders.value = res.data.pendingOrders;
  console.log("response", res);
};
const getTotalDeliveredOrders = async () => {
  let res = await axios.get(
    "http://127.0.0.1:8000/api/get_total_deliveredorders"
  );
  deliveredOrders.value = res.data.deliveredOrders;
  console.log("response", res);
};
const getTotalNotifiedOrders = async () => {
  let res = await axios.get(
    "http://127.0.0.1:8000/api/get_total_notifiedorders"
  );
  notifiedOrders.value = res.data.notifiedOrders;
  console.log("response", res);
};
const getTotalAcceptedOrders = async () => {
  let res = await axios.get(
    "http://127.0.0.1:8000/api/get_total_acceptedorders"
  );
  acceptedOrders.value = res.data.acceptedOrders;
  console.log("response", res);
};
const gettotalStockAsked = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_stockasked");
  totalStockAsked.value = res.data.totalStockAsked;
  console.log("response", res);
};
const getTotalSellStockRequested = async () => {
  let res = await axios.get(
    "http://127.0.0.1:8000/api/get_total_sellstockrequested"
  );
  console.log("response", res);
  totalSellStockRequested.value = res.data.totalSellStockRequested;
};
const getTotalTransaction = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_transactions");
  totalTransactions.value = res.data.totalTransactions;
  console.log("response", res);
};
const getTotalSales = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/get_total_sales");
  totalSales.value = parseInt(res.data.totalSales);
  console.log("response", res);
};
var user = ref([]);
const logout = async () => {
  try {
    deleteBookmark();
    let res = await axios.post("http://127.0.0.1:8000/api/logout", {
      user_id: userStore.id,
    });
    deleteCart();
    console.log(res.data);
    cartStore.clearCarts();
    userStore.clearUser();
    profileStore.clearProfile();
    songStore.clearSongs();
    postStore.clearPosts();
    videoStore.clearVideos();
    bookmarkStore.clearBookmarks();
    open.value = !open.value;
    router.push("/");
  } catch (err) {
    console.log(err);
  }
};
const deleteCart = async () => {
  try {
    let res = await axios.delete(
      "http://127.0.0.1:8000/api/clearCartItem/" + userStore.id
    );
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
const deleteBookmark = async () => {
  try {
    let res = await axios.delete(
      "http://127.0.0.1:8000/api/bookmarks/" + userStore.id
    );
    console.log(res.data);
    bookmarkStore.clearBookmarks();
  } catch (err) {
    console.log(err);
  }
};
const markAsRead = (id) => {
  alert(id);
  try {
    var page = "http://127.0.0.1:8000/api/notification/" + id;
    axios.put(page, {
      read_at: "2023-01-13 08:39:36",
    });
    getNotification();
  } catch (err) {
    console.log(err);
  }
};
const toggleSideBar = () => {
  showSide.value = !showSide.value;
};
const toggleDropNotification = () => {
  showDropDownNotifications.value = !showDropDownNotifications.value;
};
const toggleDrop = () => {
  showDropDown.value = !showDropDown.value;
};
user.value = computed(() => store.state.user.data);
const getNotification = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/notifications");
  console.log(res.data);
  notifications.value = res.data;
};
</script>

<style scoped></style>
