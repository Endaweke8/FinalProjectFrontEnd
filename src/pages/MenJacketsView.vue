<template>
    <TopNavigation />
    <NavigationVue />
    <div>
        <div class="flex mt-5 bold text-3xl justify-center items-center">Men Jackets</div>
    <MenJackets />
    </div>
    <FooterSection />
</template>

<script setup>
   
import MenJackets from '../components/MenJackets.vue';


import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>