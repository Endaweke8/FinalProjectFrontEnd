<template>
  <TopNavigation />
  <NavigationVue />
  <div id="myVueComponent" class="my-component m-0 p-0">
    <div class="text-3xl ml-12">Tutorials</div>
    <div class="ml-12">**********************************</div>
    <div class="ml-12 text-2xl mt-5">
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

    <div class="ml-12 text-2xl mt-5">2.) How to Navigate our product</div>
    <div class="ml-12">
      <div class="ml-12">
        <p>1. First Go to Home</p>
        <p>
          2. Click Search Field and search by name, category, price , brand,
          subcategory
        </p>
        <p>3. Click product item and then click add to cart button</p>
        <p>
          4. Finally go to top navigation and click cart icon and see your cart
          details
        </p>
      </div>
    </div>

    <div class="ml-12 text-2xl mt-5">2.) How to checkout your order</div>
    <div class="ml-12 mb-12">
      <div class="ml-12">
        <p>1. First go to top navigation and click your profile or cart icon</p>
        <p>2.Then complete the address form correctly</p>
        <p>3.Check your destination and shipping birr</p>
        <p>4. then select payment method</p>
        <p>4. if you select chappa click verify button</p>
      </div>
    </div>
  </div>
  <button @click="saveAsPdf">Save as PDF</button>
  <FooterSection />
</template>

<script setup>
import NavigationVue from "../components/NavigationVue.vue";
import FooterSection from "../components/structure/FooterSection.vue";
import TopNavigation from "../components/structure/TopNavigation.vue";
import html2pdf from "html2pdf.js";

function saveAsPdf() {
  const options = {
    filename: "myVueComponent.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    fullPage: true,
  };

  const element = document.querySelector(".my-component");

  html2pdf().from(element).set(options).save();
}
</script>

<style scoped>
.my-component {
  margin: 0;
  padding: 0;
}
</style>
