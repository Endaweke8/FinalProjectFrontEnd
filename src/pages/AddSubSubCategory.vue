

<template>
  


   <div >
       <h2 class="font-semibold text-xl text-gray-800 leading-tight">New Category</h2>
   </div>

   <div class="py-12">
       <div class="max-w-md mx-auto sm:px-6 lg:px-8 bg-white">
         

        <div>
                       
         <InputLabel for="category_id" value="categoryid" />
                   <div >
                    <select
                           v-model="category.category_id"
                           id="category_id"
                           name="category_id"
                           class="
                           w-full 
                           mt-1
                           mb-2
                           block
                           pl-3
                           pr-10
                           py-2
                           text-base
                           border-gray-300
                           focus:outline-none
                           focus:ring-indigo-500
                           focus:border-indigo-500
                           sm:text-sm
                           rounded-md
                           "
                       >
                           <option
                              v-for="category in categories" :key="category.id" 
                           >
                             {{category.name}}
                               
                      
                              
                           </option>
                       </select>

                   </div>
                       <!-- <InputError class="mt-2" :message="form.errors.skill_id" /> -->
                   </div>
             

            <div class="p-4" >

           

            <div>

               

                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="category.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <!-- <InputError class="mt-2" :message="div.errors.name" /> -->
            </div>


         

            <div class="flex items-center justify-end mt-4">
               

                <PrimaryButton @click="AddCategory" class="ml-4" >
                    Save
                </PrimaryButton>
            </div>
        </div>
       
       </div>
   </div>

</template>

<script setup>
import { ref,onMounted } from 'vue';
import  axios  from 'axios';

import InputLabel from '../components/InputLabel.vue';
import PrimaryButton from '../components/PrimaryButton.vue';
import TextInput from '../components/TextInput.vue';

const name=ref('');
const categories=ref([])

const category={
      name:'',
      category_id:'',
   
    }
    onMounted(() => {
        getCategories();  
    })

const AddCategory = async() => {
    alert(category.name)
  let res= await axios.post("http://127.0.0.1:8000/api/addsubcategory",category)
  console.log(res);
}

const getCategories = async () => {
  let res = await axios.get("http://127.0.0.1:8000/api/getcategories")
   console.log(res)
  categories.value = res.data.categories;
  
};

</script>