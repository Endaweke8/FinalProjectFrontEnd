<template>
  <div
    class="animated slideInDown backdrop-blur-2xl z-999 faster fixed w-full h-full top-0 left-0 flex justify-center backdrop-blur-sm"
  >
    <aside class="w-full h-screen" aria-label="Sidebar">
      <div
        class="overflow-y-auto py-4 px-3 bg-gray-200 rounded dark:bg-gray-800"
      >
        <router-link
          to="/"
          class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span class="ml-3">Home</span>
        </router-link>
        <ul class="space-y-2" v-for="category in categories" :key="category.id">
          <li @click="showSide">
            <router-link :to="`/category/${category.id}`">
              <button
                type="button"
                class="flex ml-3 relative items-center p-2 w-full text-black hover:text-black font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span
                  :class="
                    $route.params.id == category.id ? 'text-red-800 ' : ''
                  "
                >
                  {{ category.name }}
                </span>
              </button>
            </router-link>
          </li>
        </ul>
        <ul>
          <li>
            <button
              @click="showStock = !showStock"
              type="button"
              class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                :class="
                  route.name == 'StocksView' ||
                  route.name == 'SellStocks' ||
                  route.name == 'AskStock'
                    ? 'text-red-500'
                    : ' '
                "
                sidebar-toggle-item
                >Stocks</span
              >
              <svg
                sidebar-toggle-item
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="dropdown-example" v-if="showStock" class="py-2 space-y-2">
              <li>
                <router-link
                  to="/stocks"
                  class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >Buy Stocks</router-link
                >
              </li>
              <li>
                <router-link
                  to="/sellstocks"
                  class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >Sell Stocks</router-link
                >
              </li>
              <li>
                <router-link
                  to="/askstock"
                  class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >Ask Stocks</router-link
                >
              </li>
            </ul>
          </li>

          <li>
            <button
              @click="showAbout = !showAbout"
              type="button"
              class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span
                class="flex-1 ml-3 text-left whitespace-nowrap"
                :class="
                  route.name == 'BreakingNews' ||
                  route.name == 'TutorialsView' ||
                  route.name == 'WhoAreWe'
                    ? 'text-red-500'
                    : ' '
                "
                sidebar-toggle-item
                >About Us
              </span>
              <svg
                sidebar-toggle-item
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="dropdown-example" v-if="showAbout" class="py-2 space-y-2">
              <li>
                <router-link
                  to="/breakingnews"
                  class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >Breaking News</router-link
                >
              </li>
              <li>
                <router-link
                  to="/tutorials"
                  class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >Tutorials</router-link
                >
              </li>
              <li>
                <router-link
                  to="/whoarewe"
                  class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >Who are we ?</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/contactus"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span class="ml-3">Contact Us</span>
            </router-link>
          </li>
          <li></li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, defineProps, toRefs, defineEmits } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({ categories: Object });
const { categories } = toRefs(props);

const route = useRoute();
const emit = defineEmits(["showSideBar"]);

const showSide = () => {
  emit("showSideBar");
};

const show = ref(false);
const showMobile = ref(false);
const showCloth = ref(false);
const showMen = ref(false);
const showFemale = ref(false);
const showSideBar = ref(false);
const showBag = ref(false);
const showFemaleBag = ref(false);
const showMenBag = ref(false);

const showShoes = ref(false);
const showFemaleShoes = ref(false);
const showMenShoes = ref(false);

const showStock = ref(false);
const showAbout = ref(false);
</script>

<style scoped></style>
