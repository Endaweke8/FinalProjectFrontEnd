
<template>
  <TopNavigation />
  <NavigationVue />
  <div class="m-12">
    <CartsByIdSection />       
       <CheckOutForm/>
  </div>
</template>

<script setup>

import Swal from "sweetalert2";
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import NavigationVue from "../components/NavigationVue.vue";

import { useUserStore } from "../stores/user-store";
import { useCartStore } from "../stores/cart-store";
import TopNavigation from "../components/structure/TopNavigation.vue";
import CartsByIdSection from "../components/partials/profile/CartsByIdSection.vue";
import CheckOutForm from "../components/CheckOutForm.vue";


const userStore=useUserStore();
const cartStore=useCartStore();

const isLoading = ref(false);
let items = ref([]);
let user = ref([]);
const router = useRouter();
const store = useStore();

let form = ref({
  country: "",
  firstName: "",
  lastName: "",
  state: "",
  email: "",
  zipCode: "",
  phone: "",
  address: "",
  city: "",
  cardType: "",
  expirationMonth: "",
  expirationYear: "",
  cvv: "",
  cardNumber: "",
});

onMounted(async () => {
  getCartItemsOnPageLoad();
  user.value = store.state.user.data;
  console.log("Belewu");
  console.log(user.value.id);
  console.log("hiiiii");
});

const getCartItemsOnPageLoad = async () => {
  user.value = store.state.user.data;
  console.log("hi");
  console.log("Bahir dar");
  console.log(user.value.id);
  let response = await axios.get(
    "http://127.0.0.1:8000/api/checkout/" + userStore.id
  );
  console.log("response", response);
  items.value = response.data.resdata;
  console.log("alemufad");
  console.log(items.value);
  console.log("Brazers");
  console.log(items.value.totalAmount);
};

const getUserAddress = async () => {
  isLoading.value=true;
  user.value = store.state.user.data;
  console.log(user.value.id);
  if (
    form.value.firstName == "" &&
    form.value.address == "" &&
    form.value.cardNumber == "" &&
    form.value.cvv == ""
  ){
    Swal.fire({
        toast: true,
        icon: "error",
        title: "Please complete the form correctly",
        animation: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 6500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
    isLoading.value=false
  }
  else if (
    form.firstName != "" &&
    form.address != "" &&
    form.cardNumber != "" &&
    form.cvv != ""
  ) {
    // alert(`expiration Year is ${this.expirationYear} and expiration Month is ${this.expirationMonth} and the country is ${this.country} and card Type is ${this.cardType}`)
    let response = await axios.post("http://127.0.0.1:8000/api/payment", {
      user_id: userStore.id,
      country: form.value.country,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      state: form.value.state,
      email: form.value.email,
      zipCode: form.value.zipCode,
      phone: form.value.phone,
      address: form.value.address,
      city: form.value.city,
      cardType: form.value.cardType,
      expirationMonth: form.value.expirationMonth,
      expirationYear: form.value.expirationYear,
      cvv: form.value.cvv,
      cardNumber: form.value.cardNumber,
      amount: items.value.totalAmount,
      order: items.value,
    });
    console.log(response);
    if (response.data.success) {
      cartStore.clearCarts()
      isLoading.value=false;
      Swal.fire({
        toast: true,
        icon: "success",
        title: response.data.success,
        animation: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 6500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } 
  }
  else{
    alert('bro')
    isLoading.value=false
  }
};

//  import Swal from 'sweetalert2';
// import axios from "axios";
// import NavigationVue from "../components/NavigationVue.vue";

// export default {
//   components: { NavigationVue },
//   data() {
//     return {
//       items: [],
//       country: "",
//       firstName: "",
//       lastName: "",
//       state: "",
//       email: "",
//       zipCode: "",
//       phone: "",
//       address: "",
//       city: "",
//       cardType: "",
//       expirationMonth: "",
//       expirationYear: "",
//       cvv: "",
//       cardNumber: "",
//     };
//   },

//   created() {
//     this.getCartItemsOnPageLoad();
//   },

//   methods: {
//     async getCartItemsOnPageLoad() {
//       console.log("hi");
//       let response = await axios.get("http://127.0.0.1:8000/api/checkout");
//       this.items = response.data;
//       console.log(this.items);
//     },
//     async getUserAddress() {
//       if (
//         this.firstName != "" &&
//         this.address != "" &&
//         this.cardNumber != "" &&
//         this.cvv != ""
//       ) {
//         // alert(`expiration Year is ${this.expirationYear} and expiration Month is ${this.expirationMonth} and the country is ${this.country} and card Type is ${this.cardType}`)
//         let response = await axios.post("http://127.0.0.1:8000/api/payment", {
//           'country': this.country,
//           'firstName': this.firstName,
//           'lastName': this.lastName,
//           'state': this.state,
//           'email': this.email,
//           'zipCode':this.zipCode,
//           'phone': this.phone,
//           'address': this.address,
//           'city': this.city,
//           'cardType': this.cardType,
//           'expirationMonth': this.expirationMonth,
//           'expirationYear': this.expirationYear,
//           'cvv': this.cvv,
//           'cardNumber': this.cardNumber,
//           'amount':this.items.totalAmount,
//           'order':this.items,
//         })
//         if(response.data.success){
//           Swal.fire({
//               toast: true,
//               icon: "success",
//               title: response.data.success,
//               animation: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 6500,
//               timerProgressBar: true,
//               didOpen: (toast) => {
//                   toast.addEventListener("mouseenter", Swal.stopTimer);
//                   toast.addEventListener("mouseleave", Swal.resumeTimer);
//               }

//           });

//       setTimeout(()=>{
//         this.$router.push('/');
//       },3000)
//         }
//     else if(response.data.error){
//           Swal.fire({
//               toast: true,
//               icon: "error",
//               title: "The transaction is failed",
//               animation: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 6500,
//               timerProgressBar: true,
//               didOpen: (toast) => {
//                   toast.addEventListener("mouseenter", Swal.stopTimer);
//                   toast.addEventListener("mouseleave", Swal.resumeTimer);
//               }
//           });
//         }

//       } else {
//         Swal.fire({
//               toast: true,
//               icon: "error",
//               title: "Please complete the form",
//               animation: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 6500,
//               timerProgressBar: true,
//               didOpen: (toast) => {
//                   toast.addEventListener("mouseenter", Swal.stopTimer);
//                   toast.addEventListener("mouseleave", Swal.resumeTimer);
//               }
//           });

//       }

//     },
//   },
// };
</script>

<style scoped></style>
