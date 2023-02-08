<template>
    <div id="Register">
        <TopNavigation />
        <NavigationVue />
        <div class="w-full p-6 flex justify-center items-center">
            <div class="w-full max-w-xs">
                <div
                v-if="errors.length>0"
              class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded"
            >
              {{ errors }}<span
                @click="errors = ''"
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
               
                <div class="bg-slate-100 p-8 shadow rounded mb-6">
                    <div class="items-center mx-10">
                        <img src="../assets/cropped-Abay.png" class="rounded-full ml-3" width="50" />
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

                    <button
            @click.prevent="login()"
            class="px-4 py-4 mb-10 text-sm relative font-medium w-full text-center rounded text-white bg-green-600 hover:bg-rose-600/80"
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
              >Login</span
            >
          </button>
                </div>

                <p class="text-center text-md text-gray-900">
                    Don't have an account yet?
                    <router-link to="registerview" class="text-blue-500 no-underline hover:underline">
                        Register
                    </router-link>
                </p>
            </div>
        </div>
    </div>
    <FooterSection />
</template>

<script setup>
import FooterSection from '../components/structure/FooterSection.vue'
import { ref } from 'vue';
    import axios from 'axios'
    import { useUserStore } from '../stores/user-store'
    import { useProfileStore } from '../stores/profile-store'
    import { useSongStore } from '../stores/song-store'
    import { usePostStore } from '../stores/post-store'
    import { useVideoStore } from '../stores/video-store'
    import { useRouter } from 'vue-router';
    import TextInput from '../components/global/TextInput.vue'
    import TopNavigation from '../components/structure/TopNavigation.vue';
import NavigationVue from '../components/NavigationVue.vue';

    
    const router = useRouter()
    const userStore = useUserStore()
    const profileStore = useProfileStore()
    const songStore = useSongStore()
    const postStore = usePostStore()
    const videoStore = useVideoStore()

    const isLoading=ref(false)
    let errors = ref([])
    let email = ref(null)
    let password = ref(null)
    const login = async () => {
        isLoading.value=true
        errors.value = []
        try {
            let res = await axios.post('http://127.0.0.1:8000/api/login', {
                email: email.value,
                password: password.value,
            })
            isLoading.value=false
            if(res.data.errors){
                errors.value="Invalid Credentials, Please insert correct email or password"
            }
            console.log(res.data.errors);
            // userStore.setUser
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.token
            userStore.setUserDetails(res)
            
            await profileStore.fetchProfileById(userStore.id)
            // await songStore.fetchSongsByUserId(userStore.id)
            await postStore.fetchPostsByUserId(userStore.id)
            await videoStore.fetchVideosByUserId(userStore.id)
            if(userStore.role=='admin'){
                router.push('/dashboardhome')   
            }
            else
            {
              router.push("/account/profile/" + userStore.id);
            }
        
        } catch (err) {
            
            errors.value = err.response.data.errors
            console.log(err)
            isLoading.value=false
        }
    }
    
</script>