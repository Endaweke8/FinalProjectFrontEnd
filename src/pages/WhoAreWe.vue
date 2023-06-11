<template>
  <TopNavigation />
  <NavigationVue />
  <!-- Hero Section -->
<section class="hero py-16 bg-gray-100">
  <div class="container mx-auto flex flex-col items-center">
   <div class="flex">
    <img class=" h-20 w-20 max-w-xs rounded-full mb-6" src="http://localhost:5173/src/assets/cropped-Abay.png" alt="Profile Picture">
    <span class="text-4xl font-bold pl-5 mt-5">Abay Stock Market</span>

   </div>
    <p class="text-xl text-gray-600 mb-6">Ecommerce and Stock Broker</p>
  
    <p class="text-lg text-gray-800 "> Abay Stock market  works to create a streamlined market system by
      delivering important information to buyers and sellers so that modern and
      professional transactions can take place. When investors who have invested
      in stocks want to easily convert their wealth into money, it serves as a
      market place to sell at the current market price.</p>
      <br>
      <p class="text-lg text-gray-800 ">
        Abay Stock Market works to make the stock market an investment option in Ethiopia by providing investors with reliable market information for smooth trading. It serves as a market place for investors who have invested their money in stocks and want to easily convert their wealth into money.

      </p>
  </div>

</section>

<!-- About Section -->
<section class="bg-gray-100 py-16">
  <div class="container mx-auto">
    <h2 class="text-3xl font-bold mb-6">Call us</h2>
    <div class="flex flex-wrap">
      <div class="w-full md:w-1/2 p-4">
        
        <ul class="list-disc list-inside mb-6">

          <li> phone-1 0911248597
</li>
          <li>      
phone-2 0940599595</li>
        </ul>
        <h3 class="text-xl font-bold mb-2">Our Address</h3>
        <ul class="list-disc list-inside mb-6">
          <li>Addis Ababa,Megenagna Derartu Building</li>
          <li>2nd Floor Office No. 226</li>
        </ul>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h3 class="text-xl font-bold mb-2">Services</h3>
        <ul class="list-disc list-inside mb-6">
          <li>Shopping</li>
          <li>Buy Stocks</li>
          <li>Sell Stocks</li>
          <li>Buy Houses</li>
        </ul>
        
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="py-16 bg-gray-100">
  <div class="container mx-auto">
    <h2 class="text-3xl font-bold mb-6">Images</h2>
    <div class="flex flex-wrap">
      <div class="w-full  p-4">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <img src="../assets/logo5.jpg" alt="">
          <p class="text-lg text-gray-800 mb-4">"Jane did an amazing job designing our website. She was easy to work with, responsive to our feedback, and delivered the project on time and within budget."</p>
          <p class="text-lg font-bold text-gray-700">John Smith, CEO of ABC Company</p>
        </div>
      </div>
 
</div>
</div>
</section>

  <FooterSection />
</template>

<script setup>
import NavigationVue from "../components/NavigationVue.vue";
import FooterSection from "../components/structure/FooterSection.vue";
import SocialMediaLinks from "../components/structure/SocialMediaLinks.vue";
import TopNavigation from "../components/structure/TopNavigation.vue";
</script>

<style scoped></style>
