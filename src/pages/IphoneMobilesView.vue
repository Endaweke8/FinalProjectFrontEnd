<template>
    <TopNavigation />
    <NavigationVue />
    <div>
        <div class="flex mt-5 bold text-3xl justify-center items-center">Smart phones</div>
    <IphoneMobiles />
    </div>
    <FooterSection />
</template>

<script setup>
   
import IphoneMobiles from '../components/IphoneMobiles.vue';

import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>