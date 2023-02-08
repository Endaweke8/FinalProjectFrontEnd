
<template>
    <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">

        <div class="text-gray-900 text-xl mb-3">Edit Product</div>
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
             <input type="text" name="product name" v-model="name" id="" placeholder="Enter the product name" class="appearance-none
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
            <div class="w-full md:w-1/2 px-3">
               <input type="text" v-model="category" placeholder="Enter the product category" class="appearance-none
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
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
             <input type="text" name="" v-model="subcategory" id="" placeholder="Enter the product subcategory"  class="appearance-none
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
            <div class="w-full md:w-1/2 px-3">
               <input type="text" v-model="subcategory1" placeholder="Enter the product subcategory1" class="appearance-none
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
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
             <input type="text" name="" v-model="slug" id="" placeholder="Enter the product slug" class="appearance-none
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
            <div class="w-full md:w-1/2 px-3">
               <input type="text" v-model="price" class="appearance-none 
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
                " placeholder="Enter the product price">
            </div>
        </div>
        
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
             <input type="text" name="" v-model="sale_price" id="" placeholder="Enter the product sale Price" class="appearance-none
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
            
        </div>


        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
             <input type="text" name="" v-model="productquantity" id="" placeholder="Enter the product quantity" class="appearance-none
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
            
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
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
                    placeholder="Please Enter the product information here!!!"
                    v-model="description"
                ></textarea>
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
             <input type="file" name="" @change="getImagePath" id="" placeholder="Enter the product image" class="appearance-none
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
            <img :src="image_name" alt="image" height="200" width="300" />
           
        </div>

        </div>

      

      
        
       

        <div class="flex flex-wrap mt-3 mb-6">
            <div class="w-full px-3">
                <SubmitFormButton
                    btnText="Edit Product"
                    @click="save"
                />
            </div>
        </div>
        

</template>
  
  <script setup>
  import SubmitFormButton from '../components/global/SubmitFormButton.vue';
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
      const category=ref(null)
      const subcategory=ref(null)
      const subcategory1=ref(null)

      const price=ref(null)
      const sale_price=ref(null)
      const image_name=ref(null)
      const productquantity=ref(null);
    


    onMounted(() => {
        getProductById()
    })


    const getProductById=()=>{
               
    


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
                  category.value=data.category
                  subcategory.value=data.subcategory
                  subcategory1.value=data.subcategory1
                  productquantity.value=data.productquantity
                })
            
        } catch (err) {
            console.log(err)
        }
    }
    const imagePath=ref('');
    
  

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
           const res=axios.put(page,{
                    'name':name.value,
                    'slug':slug.value,
                    'category':category.value,
                    'subcategory':subcategory.value,
                    'subcategory1':subcategory1.value,
                    'description':description.value,
                     'price':price.value,
                    'image_name':image_name.value,
                    
                    'sale_price':sale_price.value,
                    'productquantity':productquantity.value,
                });
 
                
            Swal.fire({
              toast: true,
              icon: "success",
              title: "You  updated successfully ",
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
                 
               
            
        } catch (err) {
            console.log(err)
        }
    }
  
  </script>
  
  <style scoped>
  </style>
  
  
  
  
  
  
  
  
  