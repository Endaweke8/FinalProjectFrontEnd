<template>
    <div class=" animated 
                slideInDown 
                faster 
                fixed 
                w-full 
                h-full 
                top-0 
                left-0
                flex
                justify-center
                backdrop-blur-sm">
  
<aside class=" w-full h-screen" aria-label="Sidebar">
   <div class="overflow-y-auto py-4 px-3 bg-gray-200 rounded dark:bg-gray-800">
      <ul class="space-y-2">
         <li>
            <router-link to="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Home</span>
            </router-link>
         </li>
         <li >
            <button @click="show=!show" type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Electronics</span>
                  <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" v-if="show" class=" py-2 space-y-2">
                  <li>
                     <router-link to="/laptopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Laptop</router-link>
                  </li>
                  <li>
                     <router-link to="/desktopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Desktop Computers</router-link>                  </li>
                     <li >
                  <button @click="showMobile=!showMobile"  type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                   
                        <span class="flex-1 ml-9 text-left whitespace-nowrap" sidebar-toggle-item>Mobiles</span>
                        <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
            <ul id="dropdown-example" v-if="showMobile" class=" py-2 space-y-2 ml-8">
                  <li>
                     <router-link to="/iphonemobiles" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Iphone Mobiles</router-link>
                  </li>
                  <li>
                     <router-link to="/androidmobiles" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Android Mobiles</router-link>  
                   </li>
                   <li>
                     <router-link to="/buttonmobiles" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Button Mobiles</router-link>
                  </li>
                  
            </ul>
         </li>
            </ul>
         </li>
         <li >
            <button @click="showCloth=!showCloth" type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Clothes</span>
                  <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" v-if="showCloth" class=" py-2 space-y-2">
                  <li >
                  <button @click="showMen=!showMen"  type="button" class="ml-8 flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Mens</span>
                        <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
            <ul id="dropdown-example" v-if="showMen" class=" py-2 space-y-2 ml-10">
                  <li>
                     <router-link to="/mentrousers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Trouser</router-link>
                  </li>
                  <li>
                     <router-link to="/mentshirts" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Tshirt</router-link> 
                   </li>
                   <li>
                     <router-link to="/menjackets" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Jacket</router-link>
                  </li>
                  <li>
                     <router-link to="/menotherclothes" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Others</router-link> 
                   </li>
                 
            </ul>
         </li>
                     <li >
                  <button @click="showFemale=!showFemale"  type="button" class="ml-8 flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Females</span>
                        <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
            <ul id="dropdown-example" v-if="showFemale" class=" py-2 space-y-2 ml-5 ml-10">
               <li>
                     <router-link to="/femaletrousers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Trouser</router-link>
                  </li>
                  <li>
                     <router-link to="/femaletshirts" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Tshirt</router-link> 
                   </li>
                   <li>
                     <router-link to="/femalejackets" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Jacket</router-link>
                  </li>
                  <li>
                     <router-link to="/femaleotherclothes" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Others</router-link> 
                   </li>
            </ul>
                     </li>
            </ul>
         </li>
         <li >
            <button @click="showBag=!showBag" type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Bags</span>
                  <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" v-if="showBag" class=" py-2 space-y-2">
                  <li >
                  <button @click="showMenBag=!showMenBag"  type="button" class="ml-8 flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Mens</span>
                        <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
            <ul id="dropdown-example" v-if="showMenBag" class=" py-2 space-y-2 ml-10">
                  <li>
                     <router-link to="/menlazerbags" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Lazer</router-link>
                  </li>
                  <li>
                     <router-link to="/menfashionbags" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">DFashion</router-link>                  </li>
                 
            </ul>
         </li>
                     <li >
                  <button @click="showFemaleBag=!showFemaleBag"  type="button" class="ml-8 flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Females</span>
                        <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              <ul id="dropdown-example" v-if="showFemaleBag" class=" py-2 space-y-2 ml-5 ml-10">
                  <li>
                     <router-link to="/femalelazerbags" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Lazer</router-link>
                  </li>
                  <li>
                     <router-link to="/femalefshionbags" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Fashion</router-link>                  </li>
                 
               </ul>
                     </li>
            </ul>
         </li>
         <li >
            <button @click="showShoes=!showShoes" type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Shoes</span>
                  <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" v-if="showShoes" class=" py-2 space-y-2">
                  <li >
                  <button @click="showMenShoes=!showMenShoes"  type="button" class="ml-8 flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Mens</span>
                        <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
            <ul id="dropdown-example" v-if="showMenShoes" class=" py-2 space-y-2 ml-10">
                  <li>
                     <router-link to="/laptopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Laptop</router-link>
                  </li>
                  <li>
                     <router-link to="/laptopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Desktop Computers</router-link>                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
            </ul>
         </li>
                     <li >
                  <button @click="showFemaleShoes=!showFemaleShoes"  type="button" class="ml-8 flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                     <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Females</span>   
                     <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              <ul id="dropdown-example" v-if="showFemaleShoes" class=" py-2 space-y-2 ml-5 ml-10">
                  <li>
                     <router-link to="/laptopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Laptop</router-link>
                  </li>
                  <li>
                     <router-link to="/laptopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Desktop Computers</router-link>                  </li>
                  <li>
                     <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                  </li>
               </ul>
                     </li>
            </ul>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Foods</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Cars</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Perfumes</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <span class="flex-1 ml-3 whitespace-nowrap">Stocks</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

    </div>
</template>

<script setup>
  import {ref} from 'vue'


  const show=ref(false)
  const showMobile=ref(false)
  const showCloth=ref(false)
  const showMen=ref(false)
  const showFemale=ref(false)

  const showBag=ref(false)
  const showFemaleBag=ref(false)
  const showMenBag=ref(false)


  const showShoes=ref(false)
  const showFemaleShoes=ref(false)
  const showMenShoes=ref(false)
</script>

<style scoped>

</style>