import axios from 'axios'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    carts: null,
  }),
  actions: {
    async fetchCartsByUserId(userId) {
        let res = await axios.get('http://127.0.0.1:8000/api/cart/' + userId )
        this.$state.carts = res.data
        console.log(res.data.message)
    },

  

    clearCarts() {
        this.$state.carts = null
    }
  },
  persist: true
})