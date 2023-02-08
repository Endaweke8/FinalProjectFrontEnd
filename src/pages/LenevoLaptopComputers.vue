<template>
    <TopNavigation />
    <NavigationVue />
    <div class="bg-gray-200">
        <div class="flex  bold text-3xl justify-center items-center">Lenevo Laptop Computers</div>
    <LenevoLaptopComputer />
    </div>
    <div class="bg-gray-200">
        <div class="flex  bold text-3xl justify-center items-center">Most  ralated  laptops</div>

    <HpLaptopComputer />
    
    </div>
    
    <FooterSection />
</template>

<script setup>
   
// import LenevoLaptopComputer from '../components/LenevoLaptopComputer.vue';
import HpLaptopComputer from '../components/HpLaptopComputer.vue';
import LenevoLaptopComputer from '../components/LenevoLaptopComputer .vue';
import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>