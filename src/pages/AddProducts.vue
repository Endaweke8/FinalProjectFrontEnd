

<template>

      <div class="relative flex items-top justify-center min-h-screen bg-blue dark:bg-blue-500 sm:items-down sm:pt-0" style="margin-top: 50px;">
          <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
              <div class="mt-8 overflow-hidden">
                  <div class="grid grid-cols-1 md:grid-cols-2">
  
                     <form @submit="save" class="max-w-sm m-auto" >
  
                  <div class="flex flex-col items-center mt-7">
  
                  <label>Name<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="product name" name="name" v-model="product.name" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>
                  <label>Category<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="product category" name="category" v-model="product.category" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>
                  <label>Subcategory<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="product subcategory" name="subcategory" v-model="product.subcategory" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>
                  <label>Another Subcategory<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="product additional subcategory" name="subcategory1" v-model="product.subcategory1" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>
                  
                  <label>Slug<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="slug" name="slug" v-model="product.slug" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>
                  
                  <label>Description<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="product description" name="description" v-model="product.description" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>

                  <label>image_name<span class="text-red-500">*</span></label>
                  <input type="file" placeholder="image_name" @change="getImagePath" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>
                  
                  <label>Price<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="product price" name="price" v-model="product.price" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>

                  <label>Sale Price<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="sale price" name="sale_price" v-model="product.sale_price" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>
                  
                  </div>
  
                  <button type="submit" class="bg-green-500 text-white py-2 px-4 mt-5 rounded-lg ">Save</button>
            
                  </form>
                  </div>
                  <img :src="imagePath" alt="image" height="200" width="300" />
              </div>
          </div>
      </div>
     
  
  </template>
  
  
  <script setup>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import store from '../store';
  import {ref} from 'vue'
  import { useRouter
   } from 'vue-router';
   
   const router=useRouter()
  
    const product={
      name:'',
      category:'',
      subcategory:'',
      subcategory1:'',
      slug:'',
      description:'',
      image_name:'',
      price:'',
      sale_price:'',
    }

    const imagePath=ref('');

    function  getImagePath(e){
         const file=e.target.files[0];

         var form=new FormData();
         form.append('image',file);

         axios.post("http://127.0.0.1:8000/api/getImagePath",form).then((res)=>{
            imagePath.value=res.data;
            product.image_name=imagePath.value;
            console.log(product.image_name);
         });
          
        //  console.log(file)
       }
  
    function save(ev){
      ev.preventDefault();
      store.dispatch('save',product).then((res)=>{
        Swal.fire({
              toast: true,
              icon: "success",
              title: "You added product successfully ",
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
          console.log(res)
          router.push({
              name:"AdminDashboard"
          })
      })
    }
  
  </script>
  
  <style scoped>
  </style>
  
  
  
  
  
  
  
  
  