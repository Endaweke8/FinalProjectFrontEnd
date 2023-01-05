<template>
  <NavigationVue />
  <div
    class="relative flex items-top justify-center min-h-screen bg-blue dark:bg-blue-500 sm:items-down sm:pt-0"
    style="margin-top: 50px"
  >
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <form @submit="login" class="max-w-sm m-auto">
            <div
              v-if="errorMsg"
              class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
            >
              {{ errorMsg }}<span
                @click="errorMsg = ''"
               class="w-8 h-8 mx-1 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 "
                  
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
            <div class="flex flex-col items-center mt-7">
              <label class="mt-4"
                >Email<span class="text-red-500">*</span></label
              >
              <input
                type="email"
                placeholder=" your email"
                name="email"
                v-model="user.email"
                class="w-full p-2 rounded-xl bg-none border border-gray-500"
                autocomplete="email "
                required
              />

              <label>Password<span class="text-red-500">*</span></label>
              <input
                type="password"
                placeholder=" your password"
                name="password"
                v-model="user.password"
                class="w-full p-2 rounded-xl bg-none border border-gray-500"
                required
              />
            </div>

            <button
              type="submit"
              class="bg-green-500 text-white py-2 px-4 mt-5 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigationVue from "../components/NavigationVue.vue";

import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref ,computed} from "vue";
const router = useRouter();
const store=useStore();
const user = {
  email: "",
  password: "",
};

let errorMsg = ref("");
const userr=computed(()=> store.state.user.data);
function login(ev) {
  ev.preventDefault();
  store
    .dispatch("login", user)
    .then((res) => {
      console.log(res);
      console.log(res.user.role);
      if(res.user.role==='admin'){
         router.push({
        name: "AdminDashboard",
      });

      }
      else{
        router.push({
        name: "homeV",
      });
      }
      
    })
    .catch((err) => {
      errorMsg.value = err.response.data.error;
    });
}
</script>

<style scoped></style>
