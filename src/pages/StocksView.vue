<template>
    <TopNavigation />
    <NavigationVue />
    <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
        <div class="flex mt-5 bold text-3xl justify-center items-center">Available Stocks</div>
    <Stocks />
    </div>
    <FooterSection />
</template>

<script setup>
   


import NavigationVue from '../components/NavigationVue.vue';
import Stocks from '../components/Stocks.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>