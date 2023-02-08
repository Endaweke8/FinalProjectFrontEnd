<template>
    <TopNavigation />
    <NavigationVue />
    <div class="bg-gray-200">
        <div class="flex  bold text-3xl justify-center items-center">Laptop Computers</div>
    <LaptopComputer />
    </div>
    <FooterSection />
</template>

<script setup>
   
import LaptopComputer from '../components/LaptopComputer.vue';
import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>