

<template>
<button @click="showid">ShowId</button>
      <div class="relative flex items-top justify-center min-h-screen bg-blue dark:bg-blue-500 sm:items-down sm:pt-0" style="margin-top: 50px;">
          <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
              <div class="mt-8 overflow-hidden">
                  <div class="grid grid-cols-1 md:grid-cols-2">
  
                     <form @submit="save" class="max-w-sm m-auto" >
  
                  <div class="flex flex-col items-center mt-7">
  
                  <label>Name<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="product name" name="name" v-model="name" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>

                  <label>Slug<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="slug" name="slug" v-model="slug" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>
                  
                  <label>Description<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="product description" name="description" v-model="description" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>

                  <label>image_name<span class="text-red-500">*</span></label>
                  <input type="file" placeholder="image_name" @change="getImagePath"  class="w-full p-2 rounded-xl bg-none border border-gray-500" required>
                  
                  <label>Price<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="product price" name="price" v-model="price" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>

                  <label>Sale Price<span class="text-red-500">*</span></label>
                  <input type="text" placeholder="sale price" name="sale_price" v-model="sale_price" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>
                  
                  </div>
  
                  <button @click="save" class="bg-green-500 text-white py-2 px-4 mt-5 rounded-lg ">Save</button>
            
                  </form>
                  </div>
                  <img :src="image_name" alt="image" height="200" width="300" />
              </div>
          </div>
      </div>
     
  
  </template>
  
  
  <script setup>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  import store from '../store';
  import {ref,onMounted} from 'vue'
  import { useRouter,useRoute} from 'vue-router';
   
   const router=useRouter()
   const route=useRoute()
  
      const name=ref(null)
      const slug=ref(null)
      const description=ref(null)
      const price=ref(null)
      const sale_price=ref(null)
      const image_name=ref(null)
    


    onMounted(() => {
        getProductById()
    })


    const getProductById=()=>{
               
    }


    try {
        var page="http://127.0.0.1:8000/api/product/"+route.params.id;
                axios.get(page).then(({data})=>{
                  console.log(data.name);
                  name.value=data.name
                  slug.value=data.slug
                  description.value=data.description
                  price.value=data.price
                  image_name.value=data.image_name
                  sale_price.value=data.sale_price
                  console.log(sale_price.value)
                })
            
        } catch (err) {
            console.log(err)
        }

    const imagePath=ref('');
    
    const showid=()=>{
        alert(route.params.id)
    }

    function  getImagePath(e){
         const file=e.target.files[0];

         var form=new FormData();
         form.append('image',file);

         axios.post("http://127.0.0.1:8000/api/getImagePath",form).then((res)=>{
            imagePath.value=res.data;
            image_name.value=imagePath.value;
            console.log('New Product Image is',image_name.value);
         });
          
        //  console.log(file)
       }
  
    function save(ev){
        
      ev.preventDefault();
  

      try {
        var page="http://127.0.0.1:8000/api/product/"+route.params.id;
                axios.put(page,{
                    'name':name.value,
                    'slug':slug.value,
                    'description':description.value,
                     'price':price.value,
                    'image_name':image_name.value,
                    'sale_price':sale_price.value,
                }).then(({data})=>{
                  console(data)
                
            Swal.fire({
              toast: true,
              icon: "success",
              title: "You added updated successfully ",
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
            
        } catch (err) {
            console.log(err)
        }
    }
  
  </script>
  
  <style scoped>
  </style>
  
  
  
  
  
  
  
  
  