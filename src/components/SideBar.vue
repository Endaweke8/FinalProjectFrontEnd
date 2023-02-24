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
            <button @click="showCloth=!showCloth" type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Computers</span>
                  <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" v-if="showCloth" class=" py-2 space-y-2">
                  <li >
                  <button @click="showMen=!showMen"  type="button" class="ml-8 flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Laptop Computers</span>
                        <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
            <ul id="dropdown-example" v-if="showMen" class=" py-2 space-y-2 ml-10">
                  <li>
                     <router-link to="/hplaptopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Hp-Laptop</router-link>
                  </li>
                  <li>
                     <router-link to="/lenevolaptopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Lenevo-Laptop</router-link> 
                   </li>
                   <li>
                     <router-link to="/applelaptopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Apple-Laptop</router-link>
                  </li>
             
            </ul>
         </li>
                     <li >
                  <button @click="showFemale=!showFemale"  type="button" class="ml-8 flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                        <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Desktop Computers</span>
                        <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
            <ul id="dropdown-example" v-if="showFemale" class="py-2 space-y-2 ml-10">
               <li>
                     <router-link to="/hpdesktopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Hp-Desktop</router-link>
                  </li>
                  <li>
                     <router-link to="/lenevodesktopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Lenevo-Desktop</router-link> 
                   </li>
                   <li>
                     <router-link to="/appledesktopcomputers" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Apple-Desktop</router-link>
                  </li>
                 
            </ul>
                     </li>
            </ul>
         </li>
         <li >
            <button @click="show=!show" type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Mobiles</span>
                  <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" v-if="show" class=" py-2 space-y-2">
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
         <li>
            <router-link to="/television" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Televisions</span>
            </router-link>
         </li>
         <li>
            <router-link to="/headsets" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">HeadSets</span>
            </router-link>
         </li>

         <li >
            <button @click="showStock=!showStock" type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Stocks</span>
                  <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" v-if="showStock" class=" py-2 space-y-2">
                  <li>
                     <router-link to="/stocks" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Buy Stocks</router-link>
                  </li>
                  <li>
                     <router-link to="/sellstocks" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sell Stocks</router-link>  
                  </li>
                  <li>
                     <router-link to="/askstock" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Ask Stocks</router-link>  
                  </li>
            </ul>
         </li>



         <li >
            <button @click="showAbout=!showAbout" type="button" class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>About Us</span>
                  <svg  sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" v-if="showAbout" class=" py-2 space-y-2">
                  <li>
                     <router-link to="/breakingnews" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Breaking News</router-link>
                  </li>
                  <li>
                     <router-link to="/tutorials" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Tutorials</router-link>  
                  </li>
                  <li>
                     <router-link to="/whoarewe" class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Who are we ?</router-link>  
                  </li>
            </ul>
         </li>
         <li>
            <router-link to="/contactus" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <span class="ml-3">Contact Us</span>
            </router-link>
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


  const showStock=ref(false)
  const showAbout=ref(false)
</script>

<style scoped>

</style>