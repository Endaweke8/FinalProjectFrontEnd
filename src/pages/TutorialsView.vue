<template>
  <TopNavigation />
  <NavigationVue />
  <div class="bg-gray-200 mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold mb-8">Tutorials</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="border border-gray-300 bg-white  rounded-lg bg-white  shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-4">How to Register</h2>
        <p class="mb-4">To register on our website and create an account, please follow these steps:</p>
        <ol class="list-decimal pl-6">
          <li class="mb-2">Visit our website and click on the "Register" button.</li>
          <li class="mb-2">Fill out the registration form with your details, including your name, email address, and password.</li>
          <li class="mb-2">Click on the "Submit" button to create your account.</li>
          <!-- <li class="mb-2">You will receive a confirmation email. Follow the instructions in the email to verify your account.</li> -->
          <li>Once your account is created, you can log in using your email address and password.</li>
        </ol>
      </div>
     
      <div class="border border-gray-300 rounded-lg bg-white  shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-4">How to Change Password</h2>
        <p class="mb-4">To change your password on our website, please follow these steps:</p>
        <ol class="list-decimal pl-6">
          <li class="mb-2">Log in to your account using your current email address and password.</li>
          <li class="mb-2">Go to the "Account Settings" or "Profile" section of your account.</li>
          <li class="mb-2">Look for the "Change Password" option and click on it.</li>
          <li class="mb-2">Enter your current password and the new password you want to use.</li>
          <li class="mb-2">Click on the "Save" or "Update" button to change your password.</li>
          <li>Your password will be updated, and you can now log in with the new password.</li>
        </ol>
      </div>
      <div class="border border-gray-300 rounded-lg bg-white  shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-4">How to Update Profile</h2>
        <p class="mb-4">To update your profile information on our website, please follow these steps:</p>
        <ol class="list-decimal pl-6">
          <li class="mb-2">Log in to your account using your email address and password.</li>
          <li class="mb-2">Go to the "Account Settings" or "Profile" section of your account.</li>
          <li class="mb-2">"Update Profile" button.</li>
          <li class="mb-2">Update the fields you want to change, such as your name, email address, or contact information.</li>
          <li class="mb-2">Click on the "Save"  button to save your changes.</li>
          <li>Your profile information will be updated with the new details.</li>
        </ol>
      </div>
      <div class="border border-gray-300 rounded-lg bg-white  shadow-md p-6">
        <h2 class="text-2xl font-semibold mb-4">How to Place an Order</h2>
        <p class="mb-4">To place an order on our website, please follow these steps:</p>
        <ol class="list-decimal pl-6">
          <li class="mb-2">Browse our product catalog and select the items you wish to purchase.</li>
          <li class="mb-2">Click on the "Add to Cart" button for each item you want to buy.</li>
          <li class="mb-2">Review the items in your shopping cart and click on the "Checkout" button.</li>
          <li class="mb-2">Fill out the shipping and payment information.</li>
          <li class="mb-2">Review your order details and click on the "Place Order" button.</li>
          <li>You will receive an order confirmation with the details of your purchase.</li>
        </ol>
      </div>
    </div>
  </div>
  

  <div class="bg-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Return Policy</h1>
    <div class="bg-white rounded-lg bg-white  shadow-md p-6">
      <p class="text-gray-700 mb-4">We want you to be completely satisfied with your purchase. If you're not happy with your product for any reason, we offer a return policy that allows you to return the item within a specified period of time.</p>
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Returns</h2>
      <p class="text-gray-700 mb-4">To be eligible for a return, please make sure that:</p>
      <ul class="list-disc pl-6 mb-4">
        <li class="text-gray-700 mb-2">The item is in its original packaging.</li>
        <li class="text-gray-700 mb-2">The item is unused and in the same condition as when you received it.</li>
        <li class="text-gray-700 mb-2">The item's return period has not expired (please refer to the product description for the return period).</li>
      </ul>
      <p class="text-gray-700 mb-4">Please note that some products may have specific return requirements or may be non-returnable. These exceptions will be clearly stated in the product description.</p>
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Transportation Costs</h2>
      <p class="text-gray-700 mb-4">If you decide to return an item, you will be responsible for the transportation costs associated with the return. This includes the cost of shipping the item back to us.</p>
      <p class="text-gray-700 mb-4">In case of a faulty or damaged product, please contact our customer support team, and we will provide further assistance and cover the transportation costs for the return.</p>
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Refunds</h2>
      <p class="text-gray-700 mb-4">Once we receive your returned item and verify its condition, we will process your refund. The refund will be issued to the original payment method used for the purchase.</p>
      <p class="text-gray-700 mb-4">Please note that it may take some time for the refund to be reflected in your account, depending on your payment provider's policies.</p>
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
      <p class="text-gray-700">If you have any questions or concerns about our return policy, please don't hesitate to contact our customer support team. We're here to help!</p>
    </div>
  </div>

  </div>




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
