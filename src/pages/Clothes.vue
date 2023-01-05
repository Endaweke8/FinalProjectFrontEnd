<template>
    <TopNavigation />
    <NavigationVue />
    <div>
        <h1>Clothes</h1>
    <Clothes />
    </div>
    <FooterSection />
</template>

<script setup>
   
import Clothes from '../components/Clothes.vue';
import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>