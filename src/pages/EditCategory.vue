
<template>
  <div id="Add Category" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
      
      <div class="text-gray-900 text-xl">Edit  Category</div>
      <div class="bg-green-500 w-full h-1"></div>
    

      <div class="flex flex-wrap mt-4 mb-6">
          <div class="w-full md:w-1/2 px-3">
              <label 
          class="
              block 
              uppercase 
              tracking-wide 
              text-xs 
              font-bold 
              text-gray-900
              mb-2 
          "
        
      >
         Category Name
      </label>
     
           <input type="text" name="category name" v-model="name" id="" placeholder="Enter the category name" class="appearance-none
              block
              w-full
              bg-white
              text-gray-700
              border
              border-gray-400
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:border-gray-500
              " >
              <p class="text-red-600" v-if="errors.name">* {{ errors.name[0] }}</p>
             
          </div>
          <div class="w-full px-3 mt-5 rounded-lg">
              <SubmitFormButton
                  btnText="Save"
                  @click="EditCategory"
              />
          </div>

       
       
      </div>
      

      </div>

    

    
      
     

      <div class="flex flex-wrap  mb-6">
          
      </div>
      

</template>



<script setup>

import SubmitFormButton from '../components/global/SubmitFormButton.vue'
import axios from 'axios';
import Swal from 'sweetalert2';

import {ref,onMounted} from 'vue'

import { useRoute } from 'vue-router'; 
const route=useRoute();
const endpoint=import.meta.env.VITE_APP_API_URL


  let errors = ref([]);
  const name=ref('')

  
     onMounted(() => {
       getCategories();
     })

const EditCategory = async() => {
  errors.value = [];
 try{
     
let res= await axios.put(`${endpoint}/api/editcategory/` +route.params.id,{
  name:name.value,
})
console.log(res);
Swal.fire({
          toast: true,
          icon: "success",
          title: "You updated category successfully ",
          animation: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 6500,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
          }
      });
 }

catch (err) {
      errors.value = err.response.data.errors;
      console.log(errors.value)
   }
}
 



const getCategories = async () => {
  let res = await axios.get(`${endpoint}/api/getcategory/` +route.params.id)
  name.value = res.data.category.name;
  console.log(res.data.category.name)
};

</script>

<style scoped>
</style>




















