<template>
  <TopNavigation />
  <div>
    <Slider />
    <NavigationVue />

    <section class="hero py-16 bg-gray-200">
  <div class="container mx-auto flex flex-col items-center">
    <h1 class="text-4xl font-bold mb-2 ">Welcome to Our eCommerce Store</h1>
    <p class="text-xl text-gray-600 mb-1 ">Find everything you need at affordable prices</p>
    
  </div>
</section>

<!-- Categories Section -->
<section class="bg-gray-200 py-2">
  <div class="container mx-auto">
    <h2 class="text-3xl font-bold mb-6">Shop by Category</h2>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"  >
      <a href="#electronics"  v-for="category in categories"
            :key="category.id" >
        <router-link :to="`/category/${category.id}`" class="bg-white rounded-lg shadow-md">
          <img class="w-full h-48 object-cover object-center" :src="category.imagepath" alt="Electronics">
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2 hover:text-red-600 cursor-pointer">{{category.name}}</h3>
            <p class="text-gray-800 hover:text-red-600 cursor-pointer">Shop for the latest {{category.name}}</p>
          </div>
        </router-link>
      </a>
    
    </div>
  </div>
</section>

    
   

    <LatestProducts />
   
    <TopSoldProducts/>

    <TopRatedProduct />
    

    <Products />
  </div>
  <FooterSection />
</template>

<script setup>
import {ref,onMounted} from 'vue'
import LatestProducts from "../components/LatestProducts.vue";
import NavigationVue from "../components/NavigationVue.vue";
import Products from "../components/Products.vue";
import Slider from "../components/Slider.vue";
import TopRatedProduct from "../components/TopRatedProduct.vue";
import axios from "axios";
import FooterSection from "../components/structure/FooterSection.vue";
import TopNavigation from "../components/structure/TopNavigation.vue";
import TopSoldProducts from '../components/TopSoldProducts.vue';



const categories=ref();

onMounted(() => {
  getCategories();
})

const getCategories = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/getactivecategories");
  console.log(res);
  categories.value = res.data.categories;
  console.log("The categories is ",categories.value)
};



</script>

<style scoped></style>
