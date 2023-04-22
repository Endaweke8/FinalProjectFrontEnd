<template>
    <TopNavigation />
    <NavigationVue />
    <div class="bg-gray-200">
        <div class="flex  bold text-3xl justify-center items-center">Apple Laptop Computers</div>
    <!-- <AppleLaptopComputer /> -->
    <AppleLaptopComputer />
    <div class="mt-10">
        <div class="flex  bold text-3xl justify-center items-center">Most  ralated  laptops</div>

    <HpLaptopComputer />
    
    </div>
    
    </div>
    <FooterSection />
</template>

<script setup>

import AppleLaptopComputer from '../../components/AppleLaptopComputer.vue';
import HpLaptopComputer from '../../components/HpLaptopComputer.vue';

import NavigationVue from '../../components/NavigationVue.vue';
import FooterSection from '../../components/structure/FooterSection.vue';
import TopNavigation from '../../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>