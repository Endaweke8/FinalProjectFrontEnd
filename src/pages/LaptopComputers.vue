<template>
    <TopNavigation />
    <NavigationVue />
    <div>
        <h1>Laptop Computers</h1>
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