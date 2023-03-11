<template>
  <TopNavigation />
  <NavigationVue />
  <div id="SubmitResetForm" class="antialiased bg-gray-200">
    <div class="w-full  flex justify-center items-center ">
          <div class="items-center mt-5">
                        <img src="../assets/cropped-Abay.png" class="rounded-full ml-3" width="50" />
            </div> 
          <span class="ml-2 text-2xl mt-5">Abay Stock  Market</span>
          
           
        </div>
    <div class="w-full p-6 flex justify-center items-center">
      <div class="w-full max-w-md border bg-slate-100  border-gray-400 mb-12">
        <div class="p-8 shadow rounded mb-6">
          <div class="mb-6 text-lg  font-thin"><span class="text-2xl text-white-900">Change Your  Password</span></div>


<!-- 
          <div class="mb-4">
            <TextInput
              label="Email"
              :labelColor="black"
              placeholder="endaweke@.com"
              v-model:input="email"
              inputType="text"
              :error="errors.email ? errors.email[0] : ''"
            />
          </div> -->

           <div class="mb-4">
            <TextInput
              label="token Code"
              :labelColor="black"
              placeholder="123456"
              v-model:input="token"
              inputType="text"
              :error="errors.token ? errors.token[0] : ''"
            />
          </div> 
          <div class="mb-4">
            <TextInput
              label="New Password"
              :labelColor="black"
              placeholder="yournewpassword"
              v-model:input="password"
              inputType="password"
              :error="errors.password ? errors.password[0] : ''"
            />
          </div> 
          <div class="mb-4">
            <TextInput
              label="Confirm Your Password"
              :labelColor="black"
              placeholder="yourconfirmedpassword"
              v-model:input="password_confirmation"
              inputType="password"
              :error="errors.password_confirmation ? errors.password_confirmation[0] : ''"
            />
          </div> 

         

          <button
            @click.prevent="SubmitResetForm()"
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
              ><span class="text-xl">Change Password</span></span
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
import Swal from "sweetalert2";
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

let token=ref(null);
let password=ref(null);
let password_confirmation=ref(null);



const SubmitResetForm = async () => {
    isLoading.value=true
    errors.value = [];
  try {
    let res = await axios.post("http://127.0.0.1:8000/api/reset-password", {
      token: token.value,
      password: password.value,
      password_confirmation: password_confirmation.value,


      
    });
    console.log(res.data.success);
    // axios.defaults.headers.common["Authorization"] = "Bearer " + userStore.token;
    isLoading.value=false
    // userStore.setUserDetails(res);
    // await profileStore.fetchProfileById(userStore.id);
    // // await songStore.fetchSongsByUserId(userStore.id)
    // await postStore.fetchPostsByUserId(userStore.id);
    // await videoStore.fetchVideosByUserId(userStore.id);
   if(res.data.success==true)
    {
      Swal.fire({
          toast: true,
          icon: "success",
          title:
            "Your Password Has been changed",
          animation: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 4000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
      router.push("/LoginView");
    }
  } catch (err) {
    errors.value = err.response.data.errors;
    isLoading.value=false
  }
};
</script>
