<template>
    <TopNavigation />
    <NavigationVue />
    <div>
        <div class="flex mt-5 bold text-3xl justify-center items-center">Men Tshirts</div>
    <MenTshirts />
    </div>
    <FooterSection />
</template>

<script setup>
   
import MenTshirts from '../components/MenTshirts.vue';

import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>