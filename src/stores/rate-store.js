import axios from 'axios'
import { defineStore } from 'pinia'

export const useRateStore = defineStore('rate', {
  state: () => ({
    rates: null,
  }),
  actions: {
    async fetchAllRates() {
        let res = await axios.get('http://127.0.0.1:8000/api/fromallproducts' )
        this.$state.rates = res.data
        console.log(res.data)
    },

  },
  persist: true
})