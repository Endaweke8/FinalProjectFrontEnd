import axios from 'axios'
import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: null,
  }),
  actions: {
    async fetchPostsByUserId(userId) {
        let res = await axios.get('http://127.0.0.1:8000/api/user/' + userId + '/posts')
        this.$state.posts = res.data
    },

    postImage(image) {
      return 'http://127.0.0.1:8000/' + 'images/posts/' + image
    },

    clearPosts() {
        this.$state.posts = null
    }
  },
  persist: true
})