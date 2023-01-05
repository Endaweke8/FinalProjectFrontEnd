<template>
    <TopNavigation />
    <NavigationVue />
    <div>
        <h1>Electronics</h1>
    <Electronics />
    </div>
    <FooterSection />
</template>

<script setup>
   
import Electronics from '../components/Electronics.vue';
import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>