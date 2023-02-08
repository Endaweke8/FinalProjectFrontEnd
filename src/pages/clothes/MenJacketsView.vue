<template>
    <TopNavigation />
    <NavigationVue />
    <div class="antialiased bg-gray-200 text-gray-900 font-sans p-6">
        <div class="flex  bold text-3xl justify-center items-center">Men Jackets</div>
    <MenJackets />
    </div>
    <FooterSection />
</template>

<script setup>
   
import MenJackets from '../../components/MenJackets.vue';


import NavigationVue from '../../components/NavigationVue.vue';
import FooterSection from '../../components/structure/FooterSection.vue';
import TopNavigation from '../../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>