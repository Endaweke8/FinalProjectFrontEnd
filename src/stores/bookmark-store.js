import axios from 'axios'
import { defineStore } from 'pinia'

export const useBookmarkStore = defineStore('bookmark', {
  state: () => ({
    bookmarks: null,
  }),
  actions: {
    async fetchBookmarksByUserId(userId) {
        let res = await axios.get('http://127.0.0.1:8000/api/bookmark/' + userId )
        this.$state.bookmarks = res.data
        console.log(res.data.message)
    },

  

    clearBookmarks() {
        this.$state.bookmarks = null
    }
  },
  persist: true
})