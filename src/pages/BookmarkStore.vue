<template>
<TopNavigation />
<NavigationVue />
    <div>
    <Bookmark />
    </div>

<FooterSection />
</template>

<script setup>
  
import Bookmark from '../components/Bookmark.vue';
import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';
</script>

<style scoped>

</style>