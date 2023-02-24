
<template>
  <TopNavigation />
  <NavigationVue />
  <div class="m-12 " >
    <CartsByIdSection />       
       <CheckOutForm/>
  </div>
  <FooterSection />
</template>

<script setup>


import NavigationVue from "../components/NavigationVue.vue";

import TopNavigation from "../components/structure/TopNavigation.vue";
import CartsByIdSection from "../components/partials/profile/CartsByIdSection.vue";
import CheckOutForm from "../components/CheckOutForm.vue";
import FooterSection from "../components/structure/FooterSection.vue";
</script>

<style scoped></style>
