<template>
    <TopNavigation />
    <NavigationVue />
    <div>
        <div class="flex mt-5 bold text-3xl justify-center items-center">Men Trousers</div>
    <MenTrousers />
    </div>
    <FooterSection />
</template>

<script setup>
   
import MenTrousers from '../components/MenTrousers.vue';

import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>