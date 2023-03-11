<template>
  
    <div id="Register">
      <div class="w-full p-6 flex justify-center items-center ">
        <div class="w-full max-w-xs border border-gray-500">
          <div class="bg-slate-100 p-8 shadow rounded mb-6">
            <h1 class="mb-6 text-lg text-black font-thin">Add Employee</h1>
            <div class="mb-4">
              <TextInput
                label="First Name"
                :labelColor="black"
                placeholder="John"
                v-model:input="firstName"
                inputType="text"
                :error="errors.first_name ? errors.first_name[0] : ''"
              />
            </div>
  
            <div class="mb-4">
              <TextInput
                label="Last Name"
                :labelColor="black"
                placeholder="Doe"
                v-model:input="lastName"
                inputType="text"
                :error="errors.last_name ? errors.last_name[0] : ''"
              />
            </div>
            <div class="mb-4">
              <TextInput
                label="Role"
                :labelColor="black"
                placeholder="employee role"
                v-model:input="role"
                inputType="text"
                :error="errors.role ? errors.role[0] : ''"
              />
            </div>
            <div class="mb-4">
              <TextInput
                label="Email"
                :labelColor="black"
                placeholder="john.doe@m.com"
                v-model:input="email"
                inputType="text"
                :error="errors.email ? errors.email[0] : ''"
              />
            </div>
  
            <div class="mb-4">
              <TextInput
                label="Password"
                :labelColor="black"
                placeholder="password123?"
                v-model:input="password"
                inputType="password"
                :error="errors.password ? errors.password[0] : ''"
              />
            </div>
  
            <div class="mb-4">
              <TextInput
                label="Confirm Password"
                :labelColor="black"
                placeholder="password123?"
                v-model:input="confirmPassword"
                inputType="password"
              />
            </div>
  
            <button
              @click.prevent="register()"
              class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-gray-600 hover:bg-gray-400"
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
                >Register</span
              >
            </button>
          </div>
  
        </div>
      </div>
    </div>

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
  let role=ref(null);
  let password = ref(null);
  let confirmPassword = ref(null);
  const register = async () => {
      isLoading.value=true
    errors.value = [];
   
    try {
      let res = await axios.post("http://127.0.0.1:8000/api/register", {
        first_name: firstName.value,
        last_name: lastName.value,
        role:role.value,
        email: email.value,
        password: password.value,
        password_confirmation: confirmPassword.value,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.token;
      isLoading.value=false
      // userStore.setUserDetails(res);
      // await profileStore.fetchProfileById(userStore.id);
      // // await songStore.fetchSongsByUserId(userStore.id)
      // await postStore.fetchPostsByUserId(userStore.id);
      // await videoStore.fetchVideosByUserId(userStore.id);
      Swal.fire({
          toast: true,
          icon: "success",
          title:
            " Your Added Employee successfuly",
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
    //   router.push("/LoginView");
    } catch (err) {
      errors.value = err.response.data.errors;
      isLoading.value=false
    }
  };
  </script>