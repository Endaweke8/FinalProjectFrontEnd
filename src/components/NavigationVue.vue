<template>
  <nav
    class="sticky relative top-0 z-19 fixed border-b-8 border-t-8 border-green-200 bg-slate-500  text-white fadeInTop"
  >
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <!-- Secondary Navbar items -->
        <div
          class="hidden divide-x divide-white md:flex items-center space-x-3"
        >
          <router-link
            to="/"
            class="vue-active-class py-4 sm:flex px-2 text-white font-regular primary-color"
            >Home</router-link
          >
          <!-- <router-link
            to="/contactus"
            class="py-4 px-2 text-base font-regular primary-color"
            >Contact Us</router-link
          > -->

        
          <ul class="space-y-2 hover:bg-gray-300 " >
            <li @click="show = true" @mouseleave="show = false" >
              <button
                type="button"
                class="flex relative items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
               
                <span :class="showActiveElectronics? 'text-red-400':'text-white'"
                  class="flex-1 ml-3 hover:text-black  text-left whitespace-nowrap"
                  sidebar-toggle-item
                  >Computers</span
                >
               
              </button>
              <ul
             
                id="dropdown-example"
                v-if="show"
                class="bg-slate-200 text-black absolute py-2 space-y-2"
              >
              <li  >
                  <button
                    @click="showLaptopDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Laptop Computers
                  </button>
                  <div
                    v-if="showLaptopDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showLaptopDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li >
                        <router-link
                          to="/hplaptopcomputers"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Hp-Laptop</router-link
                        >
                      </li>
                      <li>
                        <router-link 
                          to="/lenevolaptopcomputers"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Lenevo Laptop</router-link>
                      </li>
                      <li>
                        <router-link
                          to="/applelaptopcomputers"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Apple Laptop</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="/buttonmobiles"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Other Laptop</router-link
                        >
                      </li>
                      
                    </ul>
                  </div>
                </li>
                <li  >
                  <button
                    @click="showDesktopDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Desktop Computers
                  </button>
                  <div
                    v-if="showDesktopDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showDesktopDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li >
                        <router-link
                          to="/hpdesktopcomputers"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Hp desktop</router-link
                        >
                      </li>
                      <li>
                        <router-link 
                          to="/lenevodesktopcomputers"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Lenevo Desktop</router-link>
                      </li>
                      <li>
                        <router-link
                          to="/appledesktopcomputers"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Apple Desktop</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="/buttonmobiles"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Other Desktop</router-link
                        >
                      </li>
                      
                    </ul>
                  </div>
                </li>
                <!-- <li  >
                  <button
                    @click="showDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mobiles
                  </button>
                  <div
                    v-if="showDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li >
                        <router-link
                          to="/iphonemobiles"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Iphone</router-link
                        >
                      </li>
                      <li>
                        <router-link 
                          to="androidmobiles"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Adroid</router-link>
                      </li>
                      <li>
                        <router-link
                          to="/buttonmobiles"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Buttons</router-link
                        >
                      </li>
                      
                    </ul>
                  </div>
                </li> -->
               
              </ul>
            </li>
          </ul>
          
          <ul class="space-y-2 hover:bg-gray-300 " >
            <li @click="showMobile = true" @mouseleave="showMobile = false" >
              <button
                type="button"
                class="flex relative items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
               
                <span :class="showActiveElectronics? 'text-red-400':'text-white'"
                  class="flex-1 ml-3 hover:text-black  text-left whitespace-nowrap"
                  sidebar-toggle-item
                  >Mobiles</span
                >
               
              </button>
              <ul
             
                id="dropdown-example"
                v-if="showMobile"
                class="bg-slate-200 text-black absolute py-2 space-y-2"
              >
                <li >
                  <router-link
                  
                    to="/iphonemobiles"
                    class="flex justify-between items-center  py-2 px-4 w-full hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white"
                    >Iphone Mobiles</router-link
                  >
                </li>
                <li>
                  <router-link
                  
                    to="/androidmobiles"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Android Mobiles</router-link
                  >
                </li>
                <li>
                  <router-link
                  
                    to="/buttonmobiles"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Button Mobiles</router-link
                  >
                </li>
                <li  >
                  <button
                    @click="showMobileDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Others
                  </button>
                  <div
                    v-if="showMobileDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showMobileDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li >
                        <router-link
                          to="/iphonemobiles"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Iphone</router-link
                        >
                      </li>
                      <li>
                        <router-link 
                          to="androidmobiles"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Adroid</router-link>
                      </li>
                      <li>
                        <router-link
                          to="/buttonmobiles"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Buttons</router-link
                        >
                      </li>
                      
                    </ul>
                  </div>
                </li>
               
              </ul>
            </li>
          </ul>
          <router-link
            to="/television"
            class="vue-active-class py-4 sm:flex px-2 text-white font-regular primary-color"
            >Televisons</router-link
          >
          <router-link
            to="/headsets"
            class="vue-active-class py-4 sm:flex px-2 text-white font-regular primary-color"
            >HeadSets</router-link
          >

          <!-- <ul class="space-y-2 ">
            <li @click="showClothe = true" @mouseleave="showClothe = false" class="hover:bg-gray-300 ">
              <button
                type="button"
                class="flex relative items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group  dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
               
                <span
                  class="flex-1 text-white ml-3 text-left hover:text-black whitespace-nowrap"
                  sidebar-toggle-item
                  >Clothes</span
                >
               
              </button>
              <ul
                id="dropdown-example"
                v-if="showClothe"
                class="bg-slate-200 absolute text-black py-2 space-y-2"
              >
              <li>
                  <button
                    @click="showMenClothDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Male's
                  </button>
                  <div
                    v-if="showMenClothDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showMenClothDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <router-link
                          to="/mentrousers"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Trouser</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="/mentshirts"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Tshirt</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="/menjackets"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Jackets</router-link
                        >
                      </li>
                       <li>
                        <router-link
                          to="/menclotheothers"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Others</router-link
                        >
                      </li>
                      
                    </ul>
                  </div>
                </li>
                
                <li>
                  <button
                    @click="showFemaleClothDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Females's
                  </button>
                  <div
                    v-if="showFemaleClothDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showFemaleClothDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <router-link to="/femaletrousers"
                        
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Trouser</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/femaletshirts"
                         
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Tshirts</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/femalejackets"
                          
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Jackets</router-link
                        >
                      </li>
                       <li>
                        <router-link to="/femaleclotheothers"
                         
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Others</router-link
                        >
                      </li>
                      
                    </ul>
                  </div>
                </li>
               
              </ul>
            </li>
          </ul>
         
          <ul class="space-y-2 hover:bg-gray-300" >
            <li @click="showBag = true" @mouseleave="showBag = false">
              <button
                type="button"
                class="flex relative items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
               
                <span
                  class="flex-1 ml-3 text-left text-white hover:text-black whitespace-nowrap"
                  sidebar-toggle-item
                  >Bags</span
                >
               
              </button>
              <ul
                id="dropdown-example"
                v-if="showBag"
                class="bg-slate-200 absolute py-2 space-y-2"
              >
              <li>
                  <button
                    @click="showMenBagDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between text-black items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Male's
                  </button>
                  <div
                    v-if="showMenBagDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showMenBagDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <router-link to="/menlazerbags"
                        
                        class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                        >Lazer</router-link
                      >
                        
                      </li>
                      <li>
                        <router-link to="/menfashionbags"
                        
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Fashion</router-link
                        >
                      </li>
                      
                      
                    </ul>
                  </div>
                </li>
                
                <li>
                  <button
                    @click="showFemaleBagDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between text-black items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Females's
                  </button>
                  <div
                    v-if="showFemaleBagDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showFemaleBagDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <router-link to="/femalelazerbags"
                        
                        class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                        >Lazer</router-link
                      >
                      </li>
                      <li>
                        <router-link to="/femalefashionbags"
                        
                        class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                        >Fashion</router-link
                      >
                      </li>
                     
                      
                    </ul>
                  </div>
                </li>
               
              </ul>
            </li>
          </ul>

        
          <ul class="space-y-2 ">
            <li @click="showShoes = true" @mouseleave="showShoes = false" class="hover:bg-gray-300 ">
              <button
                type="button"
                class="flex relative items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group  dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
               
                <span
                  class="flex-1 text-white ml-3 text-left hover:text-black whitespace-nowrap"
                  sidebar-toggle-item
                  >Shoes</span
                >
               
              </button>
              <ul
                id="dropdown-example"
                v-if="showShoes"
                class="bg-slate-200 absolute text-black py-2 space-y-2"
              >
              <li>
                  <button
                    @click="showMenShoesDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Male's
                  </button>
                  <div
                    v-if="showMenShoesDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showMenShoesDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <router-link
                          to="/menlazershoes"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Lazer</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="/mensherashoes"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Shera</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          to="/mensnickershoes"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Snicker</router-link
                        >
                      </li>
                       <li>
                        <router-link
                          to="/menothershoes"
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                          >Others</router-link
                        >
                      </li>
                      
                    </ul>
                  </div>
                </li>
                
                <li>
                  <button
                    @click="showFemaleShoesDrop =true" 
                    id="doubleDropdownButton"
                    data-dropdown-toggle="doubleDropdown"
                    data-dropdown-placement="right-start"
                    type="button"
                    class="flex justify-between items-center py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Females's
                  </button>
                  <div
                    v-if="showFemaleShoesDrop"
                    
                    id="doubleDropdown"
                    class="z-10  w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      @mouseleave="showFemaleShoesDrop=false"
                      class="py-1 ml-6 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="doubleDropdownButton"
                    >
                      <li>
                        <router-link to="/femalelazershoes"
                        
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Lazer</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/femalehealshoes"
                         
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Heal</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/femalesherashoes"
                          
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >shera</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/femalesnickershoes"
                          
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >snicker</router-link
                        >
                      </li>
                       <li>
                        <router-link to="/femaleothershoes"
                         
                          class="block py-2 px-4 hover:bg-gray-300 dark:hover:bg-gray-200 dark:hover:text-white"
                          >Others</router-link
                        >
                      </li>
                      
                    </ul>
                  </div>
                </li>
               
              </ul>
            </li>
          </ul>
          <router-link
            to="/foods"
            class="py-4 px-2 text-base font-regular primary-color"
            >Foods</router-link
          >

          <router-link
            to="/Cars"
            class="py-2 px-2 text-base font-regular primary-color"
            >Cars</router-link
          >
          <router-link
            to="/Perfumes"
            class="py-4 px-2 text-base font-regular primary-color"
            >Perfumes</router-link
          > -->

          <router-link
            to="/stocks"
            class="py-2 px-2 text-base font-regular primary-color"
            >Stocks</router-link
          >
          
        
        </div>

<div>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="text" @keyup="searchProducts(query)" v-model="query" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required>
        <button  @click="searchProducts(query)"   class="text-white visible focus:invisible absolute  right-1 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</div>
<!-- 
        <span class="divide-x divide-white md:flex items-center space-x-3"> <input
                  type="text"
                  id="voice-search"
                  v-model="query"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                /></span>
                <button  class="bg-blue-200 rounded-full">Search</button> -->

        <!-- Mobile menu button -->
        <div @click="showSide = !showSide" class="md:hidden flex items-center">
          <button class="outline-none mobile-menu-button">
            <svg
              class="w-6 h-6 hover:text-blue-600"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <span class="ml-5">Categories</span>
        </div>
       
        
      </div>
    </div>
    <!-- mobile menu -->
    <div
      v-if="popupOpen"
      class="md:hidden max-w-[50%] z-4 fixed top-13 bg-gray-500 text-white right-2"
    >
      <ul>
        <li>
          <router-link
            active-class="bg-red text-white"
            to="/"
            class="block text-sm px-2 py-4 text-white text-black hover:bg-blue-200 text-base font-regular"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/contactus"
            class="block text-sm px-2 active:bg-black py-4 hover:bg-blue-200 text-base font-regular"
            >Contact Us</router-link
          >
        </li>
       
      </ul>
    </div>
  </nav>
  <div
    v-if="showSide"
    class="md:hidden animated slideInLeft faster w-full h-full top-0 left-0 justify-center backdrop-blur-sm"
  >
    <SideBar />

  </div>
  <div v-if="noProductDisplay">
   
    <div
    v-if="products.length<1"
    class="flex items-center mt-12 h-48 mb-12 justify-center"
  >
  <div class="text-3xl">Sorry  searched Products not found</div>
  </div>

  </div>
  <div class="mt-10" v-if="products.length>0">
  <h1 class="h-full flex items-center justify-center text-3xl">Searched Products</h1>
  




<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">

<div
v-for="product in products"
:key="product.id"
class=" max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
>
<a href="#">
<img
 class="p-8 ml-10 h-60 w-full rounded-t-lg"
 :src="product.image_name" alt="product name"

/>
</a>
<div class="px-5 pb-5">
<a href="#">
 <h5
   class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
 >
 {{ product.name }}
 </h5>
</a>
<div class="flex items-center mt-2.5 mb-5">
 <svg
   aria-hidden="true"
   class="w-5 h-5 text-yellow-300"
   fill="currentColor"
   viewBox="0 0 20 20"
   xmlns="http://www.w3.org/2000/svg"
 >
   <title>First star</title>
   <path
     d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
   ></path>
 </svg>
 <svg
   aria-hidden="true"
   class="w-5 h-5 text-yellow-300"
   fill="currentColor"
   viewBox="0 0 20 20"
   xmlns="http://www.w3.org/2000/svg"
 >
   <title>Second star</title>
   <path
     d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
   ></path>
 </svg>
 <svg
   aria-hidden="true"
   class="w-5 h-5 text-yellow-300"
   fill="currentColor"
   viewBox="0 0 20 20"
   xmlns="http://www.w3.org/2000/svg"
 >
   <title>Third star</title>
   <path
     d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
   ></path>
 </svg>
 <svg
   aria-hidden="true"
   class="w-5 h-5 text-yellow-300"
   fill="currentColor"
   viewBox="0 0 20 20"
   xmlns="http://www.w3.org/2000/svg"
 >
   <title>Fourth star</title>
   <path
     d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
   ></path>
 </svg>
 <svg
   aria-hidden="true"
   class="w-5 h-5 text-yellow-300"
   fill="currentColor"
   viewBox="0 0 20 20"
   xmlns="http://www.w3.org/2000/svg"
 >
   <title>Fifth star</title>
   <path
     d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
   ></path>
 </svg>
 <span
   class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
   >5.0</span
 >
</div>
<div class="flex items-center justify-between">
 <span class="text-3xl font-bold text-gray-900 dark:text-white"
   >${{ product.price }}</span
 >
 <router-link
 :to="`/detailview/${product.id}`"
   
   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
   >Add to cart</router-link
 >
</div>
</div>
</div>

</div>


<div class="flex items-center justify-center p-2">
         <v-pagination
             class="p-10"
             v-model="page"
             :pages="pageCount"
             :range-size="1"
             active-color="#337aff"
             @update:modelValue="searchProducts"
         />
     </div>
    </div>
</template>

<script setup>
import {computed,onMounted,ref,watch} from 'vue'
import {useRoute, useRouter} from 'vue-router'

import VPagination from "@hennge/vue3-pagination";
    import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import SideBar from "./SideBar.vue";
import axios from 'axios'

        let page = ref(1)
        let query = ref('')
        let pageCount = ref(null)
        const route=useRoute()
        const products=ref([])
        const isLoading=ref(false)
        const noProductDisplay=ref(false)


      const searchProducts=async(query)=>{
      noProductDisplay.value=true;
    let res=await axios.post('http://127.0.0.1:8000/api/search?page=' + page.value,{
      searchData:query,
    })
    pageCount.value = res.data.page_count
    products.value = res.data.products.data
   
    console.log('response',res);
    

    

   }

const   showActiveElectronics=ref(false)
const showSide = ref(false);
const show = ref(false);
const showDrop = ref(false);
const showClothe = ref(false);
const showClothDrop = ref(false);
const showMenClothDrop = ref(false);
const showFemaleClothDrop = ref(false);

const showShoes = ref(false);
const showShoesDrop = ref(false);
const showMenShoesDrop = ref(false);
const showFemaleShoesDrop = ref(false);

const showMobile=ref(false);
const showMobileDrop=ref(false);

const showLaptopDrop=ref(false);
const showDesktopDrop=ref(false);

const showBag = ref(false);
const showMenBagDrop = ref(false);
const showFemaleBagDrop = ref(false);

</script>

<style>
a.router-link-exact-active {
  color: rgb(173, 15, 173);
  border-bottom: black;
}
</style>
