import axios from "axios";
import { defineStore } from "pinia";

export const useClinetAddressStore = defineStore("clientaddress", {
  state: () => ({
    id: null,
    user_id: null,
    city: null,
    subcity: null,
    kebele: null,
    address: null,
    phone: null,
    email: null,
    postal_code: null,
  }),
  actions: {
    setClientAddress(res) {
      console.log("From clinet store", res.clientaddress.user_id);
      this.$state.id = res.clientaddress.id;
      this.$state.user_id = res.clientaddress.user_id;
      this.$state.city = res.clientaddress.city;
      this.$state.subcity = res.clientaddress.subcity;
      this.$state.kebele = res.clientaddress.kebele;
      this.$state.address = res.clientaddress.address;
      this.$state.phone = res.clientaddress.phone;
      this.$state.email = res.clientaddress.email;
      this.$state.postal_code = res.clientaddress.postal_code;
    },

    async fetchClientAddressByUserId(id) {
      let res = await axios.get(
        "http://127.0.0.1:8000/api/clientaddressbyid/" + id
      );

      this.$state.id = res.data.clientaddress.id;
      this.$state.user_id = res.data.clientaddress.user_id;
      this.$state.city = res.data.clientaddress.city;
      this.$state.subcity = res.data.clientaddress.subcity;
      this.$state.kebele = res.data.clientaddress.kebele;
      this.$state.address = res.data.clientaddress.address;
      this.$state.phone = res.data.clientaddress.phone;
      this.$state.email = res.data.clientaddress.email;
      this.$state.postal_code = res.data.clientaddress.postal_code;
    },

    clearClientAddress() {
      this.$state.id = null;
      this.$state.user_id = null;
      this.$state.city = null;
      this.$state.subcity = null;
      this.$state.kebele = null;
      this.$state.address = null;
      this.$state.phone = null;
      this.$state.email = null;
      this.$state.postal_code = null;
    },
  },
  persist: true,
});
