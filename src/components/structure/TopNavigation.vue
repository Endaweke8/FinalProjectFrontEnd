<template>
    <nav class="w-full px-2 bg-white relative z-20 text-black">
        <div class=" mx-auto h-16 flex justify-between text-xs md:text-sm">
            <div class="h-full hidden  md:flex  items-center">
              <router-link to="/" class="flex items-center py-4 px-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2415/2415292.png"
                class="mr-3 h-6 sm:h-10 bg-white rounded-full"
                alt="Food Recipie"
                
              />
              <span
                class="self-center hidden  md:flex text-xl text-black whitespace-nowrap dark:text-white"
                >Abay Ecommerce</span
              >
            </router-link>
                
                <!-- <router-link to="/" class="justify-center items-center">
                    <div class="text-black text-2xl"><b>MSN</b></div>
                </router-link> -->
            </div>
            <div class="h-full flex items-center">
                <form class="flex items-center ">
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative ">
                <div
                  class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-auto text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
                </div>
                </form>
                <router-link  :to="'/account/profile/' + userStore.id" class="flex justify-center px-5 items-center">
                  <img :src="userStore.image" class="rounded-full ml-3" width="50">
                </router-link>
                
                <router-link v-if="userStore.id" :to="'/account/profile/' + userStore.id" class="flex justify-center px-5 items-center">
                    <div class=" "><span>Welcome {{userStore.firstName}} </span></div>
                </router-link>
                <FullScreenModal />
                <router-link v-if="!userStore.id" to="/loginview" class=" hidden  md:flex justify-center px-5 items-center">
                    <div class=" "><span>Login</span></div>
                </router-link>
                <button v-if="userStore.id"  @click="logout" class=" hidden  md:flex justify-center px-5 items-center">
                    <div class=" "><span>Logout</span></div>
                </button>
                
            </div>
        </div>
    </nav>
    
</template>

<script setup>
    import FullScreenModal from './FullScreenModal.vue'


    import { ref } from 'vue' 
    import axios from 'axios'
    import { useRouter } from 'vue-router'

    import { useUserStore } from '../../stores/user-store'
    import { usePostStore } from '../../stores/post-store'
    import { useCartStore } from '../../stores/cart-store'
    import { useProfileStore } from '../../stores/profile-store'
    import { useSongStore } from '../../stores/song-store'
    import { useVideoStore } from '../../stores/video-store'
    import { useBookmarkStore } from '../../stores/bookmark-store'
    
    const router = useRouter()
    const userStore = useUserStore()
    const profileStore = useProfileStore()
    const songStore = useSongStore()
    const postStore = usePostStore()
    const videoStore = useVideoStore()
    const cartStore = useCartStore()
    const bookmarkStore=useBookmarkStore();

    let open = ref(false)

    const logout = async () => {
       
        try {
            let res = await axios.post('http://127.0.0.1:8000/api/logout', {
                user_id: userStore.id
            })
            deleteCart();
            deleteBookmark();
            console.log(res.data)
    
            
            cartStore.clearCarts()
            bookmarkStore.clearBookmarks();
            userStore.clearUser()
            profileStore.clearProfile()
            songStore.clearSongs()
            postStore.clearPosts()
            videoStore.clearVideos()

            open.value=!open.value
            router.push('/')

        } catch (err) {
            console.log(err)
        }
    }
    const deleteCart = async () => {
        try {
            let res = await axios.delete('http://127.0.0.1:8000/api/clearCartItem/' + userStore.id)
            console.log(res.data)


        } catch (err) {
            console.log(err)
        }
    }
    const deleteBookmark = async () => {
        try {
            let res = await axios.delete('http://127.0.0.1:8000/api/bookmarks/' + userStore.id)
            console.log(res.data)
            bookmarkStore.clearBookmarks()


        } catch (err) {
            console.log(err)
        }
    }
</script>
<style >
a.router-link-exact-active{
  color: purple;
  border-bottom: black;
}
</style>