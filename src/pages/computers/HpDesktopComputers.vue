<template>
    <TopNavigation />
    <NavigationVue />
    <div class="bg-gray-200">
        <div class="flex  bold text-3xl justify-center items-center">Hp Desktop Computers</div>
    <HpDesktopComputer />
    <div class="flex  bold text-3xl justify-center items-center">Most related  Computers</div>
    <LenevoDesktopComputer />
    </div>

    <FooterSection />
</template>

<script setup>
// import LenevoLaptopComputer from '../components/LenevoLaptopComputer .vue'
import HpDesktopComputer from '../../components/HpDesktopComputer.vue';
import LenevoDesktopComputer from '../../components/LenevoDesktopComputer.vue';
import NavigationVue from '../../components/NavigationVue.vue';
import FooterSection from '../../components/structure/FooterSection.vue';
import TopNavigation from '../../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>