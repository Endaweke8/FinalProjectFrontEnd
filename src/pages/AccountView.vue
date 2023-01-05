
<template>
  <TopNavigation />
  <NavigationVue /> 
  <div id="AccountView" class="max-w-4xl mx-auto">
    <router-view></router-view>
  </div>
  <FooterSection />
</template>
<script setup>
import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';




</script>

<style >
</style>