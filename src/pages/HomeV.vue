<template>
  <TopNavigation /> 
  <div>
    <NavigationVue />
    
    <Products />
  </div>
  <FooterSection />
</template>

<script>

import NavigationVue from '../components/NavigationVue.vue';
import Products from '../components/Products.vue';

import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';


  export default {
    components: { NavigationVue, Products, TopNavigation, FooterSection}
}
</script>

<style scoped>

</style>










