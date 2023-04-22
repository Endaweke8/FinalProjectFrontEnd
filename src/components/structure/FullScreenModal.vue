<template>
  <div class="md:hidden xs:flex">
    <button
      @click="open = !open"
      class="bg-transparent hover:bg-green-400 text-white font-semibold hover:text-white py-1 px-2 hover:border-transparent rounded"
    >
      <i class="fa-solid fa-bars fa-xl bg-blue-500 text-black"></i
      ><span class="text-black ml-2">Menu</span>
    </button>

    <div
      v-show="open"
      class="animated slideInDown faster fixed w-full h-full top-0 left-0 flex justify-center backdrop-blur-sm"
    >
      <div class="bg-black absolute w-full h-full opacity-75"></div>
      <div class="my-auto fixed border-white w-80 pt-16">
        <p class="text-2xl text-center text-white font-bold">Menu</p>
        <RouterLinkButton
          v-if="!userStore.id"
          @click="open = !open"
          class="w-full text-gray-100 text-center text-lg mt-2"
          btnText="Login"
          color="green"
          url="/loginview"
        />

        <RouterLinkButton
          v-if="!userStore.id"
          @click="open = !open"
          class="w-full text-gray-100 text-center text-lg mt-2"
          btnText="Register"
          color="green"
          url="/registerview"
        />

        <RouterLinkButton
          v-if="userStore.id"
          @click="open = !open"
          class="w-full text-gray-100 text-center text-lg mt-2"
          btnText="Profile"
          color="green"
          :url="'/account/profile/' + userStore.id"
        />

        <RouterLinkButton
          v-if="userStore.id"
          @click="open = !open"
          class="w-full text-gray-100 text-center text-lg mt-2"
          btnText="Posts"
          color="green"
          url="/account/posts"
        />

        <button
          v-if="userStore.id"
          @click="logout"
          class="w-full text-white font-semibold rounded hover:border-transparent border px-4 py-2 hover:text-white text-center bg-transparent text-lg mt-2"
        >
          Logout
        </button>

        <button
          @click="open = !open"
          class="w-full bg-red-600 text-white font-semibold rounded hover:border-transparent border px-4 py-2 hover:text-white text-center bg-transparent text-lg mt-2"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import RouterLinkButton from "../global/RouterLinkButton.vue";
import { useRouter } from "vue-router";

import { useUserStore } from "../../stores/user-store";
import { useBookmarkStore } from "../../stores/bookmark-store";
import { usePostStore } from "../../stores/post-store";
import { useCartStore } from "../../stores/cart-store";
import { useProfileStore } from "../../stores/profile-store";
import { useSongStore } from "../../stores/song-store";
import { useVideoStore } from "../../stores/video-store";
import { useClinetAddressStore } from "../../stores/client-address-store";

const router = useRouter();
const bookmarkStore = useBookmarkStore();
const userStore = useUserStore();
const profileStore = useProfileStore();
const songStore = useSongStore();
const postStore = usePostStore();
const videoStore = useVideoStore();
const cartStore = useCartStore();
const clientAddressStore = useClinetAddressStore();

let open = ref(false);

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
    clientAddressStore.clearClientAddress();

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
</script>
