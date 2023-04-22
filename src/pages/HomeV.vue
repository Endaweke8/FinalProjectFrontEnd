<template>
  <TopNavigation />
  <div>
    <Slider />
    <NavigationVue />

    <LatestProducts />
    <TopRatedProduct />

    <Products />
  </div>
  <FooterSection />
</template>

<script>
import LatestProducts from "../components/LatestProducts.vue";
import NavigationVue from "../components/NavigationVue.vue";
import Products from "../components/Products.vue";
import Slider from "../components/Slider.vue";
import TopRatedProduct from "../components/TopRatedProduct.vue";

import FooterSection from "../components/structure/FooterSection.vue";
import TopNavigation from "../components/structure/TopNavigation.vue";

export default {
  components: {
    NavigationVue,
    Products,
    TopNavigation,
    FooterSection,
    Slider,
    LatestProducts,
    TopRatedProduct,
  },
};
</script>

<style scoped></style>
