<template>
  
 
        <nav class="sticky top-0 z-50 fixed bg-white shadow-lg fadeInTop">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
							<!-- Website Logo -->
							<router-link to="/" class="flex items-center py-4 px-2">
								<img src="https://i.pinimg.com/originals/6b/3b/6a/6b3b6a6468763725fb1f2672d63bb03a.png" class="mr-3 h-6 sm:h-10" alt="Food Recipie">
							<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Food Recipes</span>
              </router-link>
              
						</div>
					</div>
					<!-- Secondary Navbar items -->
					<div class="hidden md:flex items-center space-x-3 ">
            <router-link to="/" class="py-4 px-2 text-base font-regular primary-color">Home</router-link>
            <router-link to="/contactus" class="py-4 px-2 text-base font-regular primary-color">Contact Us</router-link>

						<router-link v-if="isAuthenticated" to="/profile" class="py-4 px-2 text-base font-regular primary-color">Profile</router-link>
						<router-link v-if="!isAuthenticated" to="/login" class="py-2 px-2 text-base font-regular primary-color"><button @click="login">Log in</button></router-link>
					  <router-link v-if="isAuthenticated" to="/login" class="py-2 px-2 text-base font-regular primary-color"><button @click="logout">Log out</button></router-link>
					</div>
					<!-- Mobile menu button -->
					<div @click="togglePopup" class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button">
						<svg class=" w-6 h-6 text-gray-500 hover:text-blue-600"
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
					</div>
				</div>
			</div>
			<!-- mobile menu -->
			<div v-if="popupOpen" >
				<ul >
		
					<li><router-link to="/" class="block text-sm px-2 py-4 text-white bg-blue-600 text-base font-regular">Home</router-link></li>
					<li><router-link to="/contactus" class="block text-sm px-2 py-4  text-base font-regular">Contact Us</router-link></li>

          <li><router-link v-if="isAuthenticated" to="/profile" class="block text-sm px-2 py-4 hover:bg-blue-600 transition duration-300 text-base font-regular">Profile</router-link></li>
					<li class="active" v-if="!isAuthenticated"><router-link to="/login" class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300 text-base font-regular"><button @click="login">Log in</button></router-link></li>
          <li class="active" v-if="isAuthenticated"><router-link to="/logout" class="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300 text-base font-regular"><button @click="logout">Log out</button></router-link></li>
				</ul>
			</div>
		
		</nav>
   
  
  
  
  
  <!-- <nav class="sticky bg-gray-100 border-red-500  top-0 z-50  px-2 py-3 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800">
  <div class="container  flex flex-wrap  justify-between items-center mx-auto">
    <router-link to="/" class="flex items-center">
        <img src="https://i.pinimg.com/originals/6b/3b/6a/6b3b6a6468763725fb1f2672d63bb03a.png" class="mr-3 h-6 sm:h-10" alt="Food recipie logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Food Recipes</span>
    </router-link>
    <button  data-collapse-toggle="mobile-menu" type="button" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div  class=" w-full md:block md:w-auto" id="mobile-menu" >
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <router-link to="/" class="block py-2 pr-4 pl-3 text-white bg-blue-600 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"  aria-current="page">Home</router-link>
        </li>
        <li>
          <router-link v-if="isAuthenticated" to="/profile" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Profile</router-link>
        </li>
        <li>
          <router-link v-if="isAuthenticated" to="/logout" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"><button @click="logout">Log out</button></router-link>
        </li>
        <li>
          <router-link v-if="!isAuthenticated" to="/login" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"><button @click="login">Log in</button></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav> -->
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
import {ref} from 'vue'
    export default {
     name:'NavigationVue' , 
     setup(){ 
          
           const popupOpen=ref(false)
        
          const togglePopup=()=>{
            popupOpen.value=!popupOpen.value;
          }

          const { loginWithRedirect ,logout,isAuthenticated} = useAuth0();
          return{
            popupOpen,
            togglePopup,
           isAuthenticated,
            login: () => {
          loginWithRedirect();
        },
        logout: () => {
          logout({ returnTo: window.location.origin });
        }
          }
     } 
    }
</script>

<style scoped>

</style>