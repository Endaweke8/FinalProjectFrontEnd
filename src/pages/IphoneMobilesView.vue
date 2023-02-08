<template>
    <TopNavigation />
    <NavigationVue />
    <div class="bg-gray-200">
        <div class="flex  bold text-3xl justify-center items-center">Available Iphone phones</div>
    <IphoneMobiles />
    </div>
    <div class="flex bg-gray-200 bold text-3xl justify-center items-center">Most related  Phones</div>
    <AndroidMobiles />
   

    <FooterSection />
</template>

<script setup>
   
import AndroidMobiles from '../components/AndroidMobiles.vue';
import IphoneMobiles from '../components/IphoneMobiles.vue';

import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>