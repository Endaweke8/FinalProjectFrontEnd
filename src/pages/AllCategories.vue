<template>
    <div>
        <div  class="italic mb-3">
  <div class="text-3xl font-bold">Categories</div>
</div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg shadow-md">
    
    <div v-show="isLoading" class="flex items-center mt-12 h-48  mb-12 justify-center">
  <img   class="w-20 h-20 absolute  left-1/2 -ml-2.5" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
</div>




    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
             
                <th scope="col" class="py-3 px-6">
                    Id
                </th>

                <th scope="col" class="py-3 px-6">
                    Name
                </th>
              
                <th scope="col" class="py-3 px-6">
                    status
                </th>
                <!-- <th scope="col" class="py-3 px-6">
                    status
                </th> -->
                <th scope="col" class="py-3 px-6">
                    Added at
                </th>
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="category in categories" :key="category.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                
                <td class="py-4 px-6">
                    {{category.id}}
                </td>
              
                <td class="py-4 px-6">
                    {{category.name}}
                </td>
                <td class="py-4 px-6">
                  {{category.status}}
                </td>
                <!-- <td class="py-4 px-6">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                    </div>
                </td> -->
                <td class="py-4 px-6">
                    {{ filterTime( category.created_at)}}
                </td>
                <td class="py-4 px-6" v-if="userStore.role == 'socialmediamanager'">
              <router-link
                :to="`/editcategory/${category.id}`"
                class="font-medium text-green-600 dark:text-red-500 hover:underline"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </router-link>
              Edit Category
            </td>
            <td class="py-4 px-6">
                    <div v-if="category.status=='inactive'"><button @click="makeActive(category.id)"  class="font-medium text-white dark:text-blue-500 bg-green-500 hover:bg-green-700 rounded p-2">Make it active</button></div>
                    <div v-if="category.status=='active'"><button @click="makeDeActive(category.id)"  class="font-medium text-black dark:text-blue-500 bg-yellow-400 hover:bg-green-700 rounded p-2">Make it inactive</button></div>
            </td>
                <td class="py-4 px-6">
                    <button @click="removeCategory(category.id)"  class="font-medium text-white dark:text-blue-500 bg-red-500 rounded p-2">Delete Category</button>
                </td>
             
               
            </tr>
          
        </tbody>
    </table>
</div>

    </div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useUserStore } from '../stores/user-store';
const userStore=useUserStore();
 let categories=ref([]);
 const isLoading=ref(false)
 const findTime=ref(0)

 const endpoint=import.meta.env.VITE_APP_API_URL
 onMounted(async() => {
    isLoading.value=true;
    getCategories();
 })
 

 const getCategories=async()=>{
   try {

    let res=await axios.get(`${endpoint}/api/get_all_categories`)
    categories.value = res.data.category
    console.log('category response',res.data.category);
     isLoading.value=false;
    
   } catch (error) {
    isLoading.value=false;
   }
}


const makeActive = async (id) => {
        Swal.fire({
            title: 'Are you sure you want to post this category?',
            text: 'User may navigate it',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, make it!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.put(`${endpoint}/api/make_category_active/` + id,{
                       status:"active",
                    })
                    getCategories()
                    Swal.fire(
                        'Activated!',
                        'Your Category  has been Posted.',
                        'success'
                    )
                } catch (err) {
                    console.log(err)
                }
            }
        })
    }

    const makeDeActive = async (id) => {
        Swal.fire({
            title: 'Are you sure you want to remove form post this category?',
            text: 'User may not navigate it',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, make it!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.put(`${endpoint}/api/make_category_active/` + id,{
                       status:"inactive",
                    })
                    getCategories()
                    Swal.fire(
                        'De Activated!',
                        'Your Category  has been Removed from posts.',
                        'success'
                    )
                } catch (err) {
                    console.log(err)
                }
            }
        })
    }
const removeCategory = async (id) => {
        Swal.fire({
            title: 'Are you sure you want to remove this category?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, remove it!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`${endpoint}/api/category/` + id)
                    getCategories()
                    Swal.fire(
                        'Deleted!',
                        'Your Category  has been deleted.',
                        'success'
                    )
                } catch (err) {
                    console.log(err)
                }
            }
        })
    }



     

    const filterTime = (created_at) => {
  const currentTime = new Date();

  findTime.value = parseInt((currentTime - Date.parse(created_at)) / (1000));
  if(findTime.value>60)
  {
    findTime.value = parseInt((currentTime - Date.parse(created_at)) / (1000*60));
    if(findTime.value>60)
  {
    findTime.value = parseInt((currentTime - Date.parse(created_at)) / (1000 * 60*60));
     
  if (findTime.value > 24) {
    findTime.value =parseInt((currentTime - Date.parse(created_at)) / (1000 * 60 * 60 * 24));  
    if (findTime.value >= 7) {
      findTime.value = parseInt(
        (currentTime - Date.parse(created_at)) / (1000 * 60 * 60 * 24 * 7)
      );
      if (findTime >= 4) {
        findTime.value = parseInt(
          (currentTime - Date.parse(created_at)) / (1000 * 60 * 60 * 24 * 7 * 4)
        );
        return `${findTime.value} monthes ago`;
      }
      return `${findTime.value} weeks ago`;
    }
    return `${findTime.value} days ago`;
  } 
    return `${findTime.value} hours ago`;
  }

    return `${findTime.value} minutes ago`;
  }
 
  return `${findTime.value} seconds ago`;

}


//  const showModal=ref(false)
//  const hideModal=ref(true)
// const editMode=ref(false)

//  let form=ref({
//     name:'',
//     icon:'',
//     description:''
//  });


// const createService=async()=>{
// await axios.post('/api/create_service',form.value)
// .then(response=>{
//     getServices()
//     closeModal()
//     toast.fire({
//         icon:"success",
//         title:'Service add Successfuly'
//     })
// })
// }

// const updateService=async()=>{
// await axios.post('/api/update_service/'+form.value.id,form.value)
// .then(()=>{
//     getServices()
//     closeModal()
//     toast.fire({
//         icon:"success",
//         title:'Service Updated Successfuly'
//     })
// })
// }

//  const openModal=()=>{
//     showModal.value=!showModal.value
//     editMode.value=false
//  }

//  const closeModal=()=>{
//     showModal.value=!hideModal.value
//     form.value=({})
//     editModal.value=false
//  }

//  onMounted(async() => {
//     getServices();
//  })




// const editModal=(service)=>{
//     editMode.value=true
//     showModal.value=!showModal.value
//     form.value=service

// }


// const deleteService=(id)=>{
//     Swal.fire({
//         title:"Are you sure ?",
//         text:"You can't go back",
//         icon:'Warning',
//         showCancelButton:true,
//         confirmButtonColor:'#3085d6',
//         cancelButtonColor:"#d33",
//         confirmButtonText:'Yes, delete it !'
//     }) .then((result)=>{
//         if(result.value){
//             axios.get('/api/delete_service/'+id)
//             .then(()=>{
//                 Swal.fire(
//                     'Delete',
//                     "Survice",
//                     'success',
//                 )
//                 getServices()
//             })
//         }
//     }) 
// }
</script>


<style scoped>

</style>