<template>
<TopNavigation />
<NavigationVue />
    <div class="mt-0 bg-gray-200">
        <div class="flex  bold text-3xl justify-center items-center">Your Favorites</div>
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