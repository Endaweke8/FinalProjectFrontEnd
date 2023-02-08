import axios from 'axios'
import { defineStore } from 'pinia'

export const paymentReferenceStore = defineStore('paymentReference', {
  state: () => ({
    paymentReference: null,
  }),
  actions: {
    setPaymentReference(number) {
      
      this.$state.paymentReference = number;
      console.log(number);
  },


    clearPaymentReference() {
        this.$state.paymentReference = null
    }
  },
  persist: true
})