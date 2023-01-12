<template>
    <TopNavigation />
    <NavigationVue />
    <div>
        <div class="flex mt-5 bold text-3xl justify-center items-center">Android phones</div>
    <AndroidMobiles />
    </div>
    <FooterSection />
</template>

<script setup>
   
import AndroidMobiles from '../components/AndroidMobiles.vue';

import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>