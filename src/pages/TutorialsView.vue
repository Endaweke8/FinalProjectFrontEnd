<template>
    <TopNavigation />
    <NavigationVue />
    <div class="bg-gray-200">
<div class="text-3xl ml-12">Tutorials </div>
<div class="ml-12">**********************************</div>
<div  class="ml-12 text-2xl mt-5">
1) How to Register and Save Your Address
</div>
<div class="ml-12">
    <div class="ml-12">
       <p>1. First Go to top Navigation</p> 
       <p>2. Select Login option</p> 
       <p>3. Click Register button at the bottom of the login field</p> 
       <p>4. Complete the form correctly and create acount</p> 
    </div>
</div>

<div  class="ml-12 text-2xl mt-5">
2.) How to Navigate our product
</div>
<div class="ml-12">
    <div class="ml-12">
       <p>1. First Go to Home</p> 
       <p>2. Click Search Field and search by name, category, price , brand, subcategory</p> 
       <p>3. Click product item and then click add to cart button</p> 
       <p>4. Finally go to top navigation and click cart icon and see your cart details</p> 
    </div>
</div>

<div  class="ml-12 text-2xl mt-5">
2.) How to checkout your order
</div>
<div class="ml-12 ">
    <div class="ml-12">
       <p>1. First go to top navigation and click your profile or cart icon</p> 
       <p>2.Then complete the address form correctly</p> 
       <p>3.Check your destination and shipping birr</p> 
       <p>4. then select payment method</p> 
       <p>4. if you select chappa click verify button</p> 
    </div>
</div>


    </div>
    <FooterSection />
</template>

<script setup>
import NavigationVue from '../components/NavigationVue.vue';
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';

   
</script>

<style scoped>

</style>