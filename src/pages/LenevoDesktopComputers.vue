<template>
    <TopNavigation />
    <NavigationVue />
    <div class="bg-gray-200">
        <div class="flex  bold text-3xl justify-center items-center">Lenevo Desktop Computers</div>
    <LenevoDesktopComputer />
    <div class="flex  bold text-3xl justify-center items-center">Most related  Computers</div>
    <HpDesktopComputer />
    </div>

    <FooterSection />
</template>

<script setup>
// import HpDesktopComputer from '../components/HpDesktopComputer .vue'
import HpDesktopComputer from '../components/HpDesktopComputer.vue';
import LenevoDesktopComputer from '../components/LenevoDesktopComputer.vue';
import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>