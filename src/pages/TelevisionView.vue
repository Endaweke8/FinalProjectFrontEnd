<template>
    <TopNavigation />
    <NavigationVue />
    <div class="bg-gray-200">
        <div class="flex  bold text-3xl justify-center items-center">Best Falt Televisions</div>
    <TelevisionShow />
    
    </div>

    <FooterSection />
</template>

<script setup>
// import LenevoDesktopComputer from '../components/LenevoDesktopComputer .vue'


import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
import TelevisionShow from '../components/TelevisionShow.vue';
</script>

<style scoped>

</style>