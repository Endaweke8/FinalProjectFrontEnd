<template>
  <TopNavigation />
  <NavigationVue />
  <div id="verifyYourEmail" class="antialiased bg-gray-200">
    <div class="w-full  flex justify-center items-center ">
          <div class="items-center mt-5">
                        <img src="../assets/cropped-Abay.png" class="rounded-full ml-3" width="50" />
            </div> 
          <span class="ml-2 text-2xl mt-5">Verify Your Email</span>
          
           
        </div>
    <div class="w-full p-6 flex justify-center items-center">
      <div class="w-full max-w-md border border-gray-400 mb-12">
        <div class="bg-slate-100 p-8 shadow rounded mb-6">
          <div class="mb-6 text-lg  font-thin"><span class="text-2xl text-white-900">verifyYourEmail</span></div>


<!-- 
          <div class="mb-4">
            <TextInput
              label="Email"
              :labelColor="black"
              placeholder="john.doe@m.com"
              v-model:input="email"
              inputType="text"
              :error="errors.email ? errors.email[0] : ''"
            />
          </div> -->

          <div class="mb-4">
            <TextInput
              label="Otp Code"
              :labelColor="black"
              placeholder="123456"
              v-model:input="otp"
              inputType="text"
              :error="errors.otp ? errors.otp[0] : ''"
            />
          </div>

         

          <button
            @click.prevent="verifyYourEmail()"
            class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-gray-500 hover:bg-gray-400 z-1 mt-8"
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
              ><span class="text-xl">Submit</span></span
            >
          </button>
        </div>

        <!-- <p class="text-center text-md text-gray-900">
          Already have an account?
          <router-link
            to="loginview"
            class="text-blue-500 no-underline hover:underline"
          >
            Login
          </router-link>
        </p> -->
      </div>
    </div>
  </div>
  <FooterSection />
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useUserStore } from "../stores/user-store";
import { useProfileStore } from "../stores/profile-store";
import { useSongStore } from "../stores/song-store";
import { usePostStore } from "../stores/post-store";
import { useVideoStore } from "../stores/video-store";
import { useRouter } from "vue-router";
import TextInput from "../components/global/TextInput.vue";
import TopNavigation from "../components/structure/TopNavigation.vue";
import NavigationVue from "../components/NavigationVue.vue";
import FooterSection from "../components/structure/FooterSection.vue";
const router = useRouter();
const userStore = useUserStore();
const profileStore = useProfileStore();
const songStore = useSongStore();
const postStore = usePostStore();
const videoStore = useVideoStore();

const isLoading=ref(false)
let errors = ref([]);
let firstName = ref(null);
let lastName = ref(null);
let email = ref(null);
let otp=ref(null);
let password = ref(null);
let confirmPassword = ref(null);
const verifyYourEmail = async () => {
    isLoading.value=true
  errors.value = [];
 
  try {
    let res = await axios.post("http://127.0.0.1:8000/api/email-verification", { 
      email: email.value,
      otp:otp.value,
    });
    console.log(res);
    // axios.defaults.headers.common["Authorization"] = "Bearer " + userStore.token;
    isLoading.value=false
    // userStore.setUserDetails(res);
    // await profileStore.fetchProfileById(userStore.id);
    // // await songStore.fetchSongsByUserId(userStore.id)
    // await postStore.fetchPostsByUserId(userStore.id);
    // await videoStore.fetchVideosByUserId(userStore.id);
   
    router.push("/LoginView");
  } catch (err) {
    errors.value = err.response.data.errors;
    isLoading.value=false
  }
};
</script>
