
<template>
    <div id="Add Category" class="container h-screen max-w-4xl mx-auto pt-20 pb-20 px-6">
        
        <div class="text-gray-900 text-xl">Add Category</div>
        <div class="bg-green-500 w-full h-1"></div>

        <!-- <CropperModal
        
        v-if="showModal"
            :minAspectRatioProp="{width: 8, height: 8}"
            :maxAspectRatioProp="{width: 8, height: 8}"
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        /> -->
 
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
             <input type="text" name="category name" v-model="category.name" id="" placeholder="Enter the category name" class="appearance-none
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
            <div class="w-full px-3">
                <SubmitFormButton
                    btnText="Save"
                    @click="AddCategory"
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



   let errors = ref([]);

   const name=ref('');

    const category={
      name:'',
   
       }

const AddCategory = async() => {
    errors.value = [];
   try{
       
  let res= await axios.post("http://127.0.0.1:8000/api/addcategory",category)
  console.log(res);
  Swal.fire({
            toast: true,
            icon: "success",
            title: "You added category successfully ",
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
   

 
  
  </script>
  
  <style scoped>
  </style>
  
  
  
  
  
  
  
  
  











