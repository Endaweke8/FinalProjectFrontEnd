
<template>
    <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        
        <div class="text-gray-900 text-xl">Add Stock</div>
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
           Stock Name
        </label>
             <input type="text" name="stock name" v-model="stock.name" id="" placeholder="Enter the stock name" class="appearance-none
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
           stock amount
        </label>
               <input type="text" v-model="stock.amount" placeholder="Enter the stock amount" class="appearance-none
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
                <p class="text-red-600" v-if="errors.amount">* {{ errors.amount[0] }}</p>
            </div>
        </div>
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
           stock sale_price
        </label>
             <input type="text" name="" v-model="stock.sale_price" id="" placeholder="Enter the stock sale Price" class="appearance-none
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
                <p class="text-red-600" v-if="errors.sale_price">* {{ errors.sale_price[0] }}</p>
            </div>
            
        </div>

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
           stock slug
        </label>
             <input type="text" name="" v-model="stock.slug" id="" placeholder="Enter the stock slug" class="appearance-none
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
                <p class="text-red-600" v-if="errors.slug">* {{ errors.slug[0] }}</p>
            </div>
          
        </div>
        
     

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
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
           stock description
        </label>
                <textarea
                    class=" appearance-none
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
            focus:border-gray-500"
                cols="30" 
                rows="10"
                    placeholder="Please Enter the stock information here!!!"
                    v-model="stock.description"
                ></textarea>
                <p class="text-red-600" v-if="errors.description">* {{ errors.description[0] }}</p>
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
             <input type="file" name="" @change="getImagePath" id="" placeholder="Enter the stock image" class="appearance-none
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
            </div>
            <img :src="imagePath" alt="image" height="200" width="300" />
           
        </div>

        </div>

      

      
        
       

        <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full px-3">
                <SubmitFormButton
                    btnText="Add stock"
                    @click="save"
                />
            </div>
        </div>
        

</template>


  
  <script setup>
 
import SubmitFormButton from '../components/global/SubmitFormButton.vue'
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import store from '../store';
  import {ref} from 'vue'
  import { useRouter
   } from 'vue-router';
   
   const router=useRouter()
   const name=ref('');
   let errors = ref([]);
   const category=ref('');
    const stock={
      name:'',
      amount:'',
      sale_price:'',
      description:'',
      slug:'',
      image_name:'',
    }

    const imagePath=ref('');
    function  getImagePath(e){
         const file=e.target.files[0];

         var form=new FormData();
         form.append('image',file);

         axios.post("http://127.0.0.1:8000/api/getImagePath",form).then((res)=>{
            imagePath.value=res.data;
            stock.image_name=imagePath.value;
            console.log(stock.image_name);
         });
          
        //  console.log(file)
       }
  
       const save=async(ev)=>{
        errors.value = [];
        await  ev.preventDefault();
     try {
        const res= await axios.post('http://127.0.0.1:8000/api/savestock',stock)
            console.log(res)
            Swal.fire({
            toast: true,
            icon: "success",
            title: "You added stock successfully ",
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
       
    
    
     
      

               
     } catch (err) {
        errors.value = err.response.data.errors;
        console.log(errors.value)
     }
    }
  
  </script>
  
  <style scoped>
  </style>
  
  
  
  
  
  
  
  
  