<template>
    <div>

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <div class="flex justify-between items-center pb-4 bg-white dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users">
        </div>
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
                    Email
                </th>
                <th scope="col" class="py-3 px-6">
                    role
                </th>
                <th scope="col" class="py-3 px-6">
                    status
                </th>
                <th scope="col" class="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                
                <td class="py-4 px-6">
                    {{user.id}}
                </td>
                <td class="py-4 px-6">
                    {{user.name}}
                </td>
                <td class="py-4 px-6">
                    {{user.email}}
                </td>
                <td class="py-4 px-6">
                   {{user.role}}
                </td>
                <td class="py-4 px-6">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                    </div>
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
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

 let users=ref([]);


 onMounted(async() => {
    getUsers();
 })

 const getUsers=async()=>{
   let response=await axios.get('http://127.0.0.1:8000/api/get_all_users')
   console.log('response',response);

   users.value=response.data.users
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