<template>
    <div>
        <div  class="italic mb-3">
  <div class="text-3xl font-bold">Stock Request</div>
</div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg shadow-md">
    <div class="flex justify-between items-center pb-4 bg-gray-200 dark:bg-gray-900">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div @click="searchStock(queryStockRequest)" class="flex absolute inset-y-0 right-0 bg-blue-500 rounded  items-center pl-3 hover:cursor-pointer">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input v-model="queryStockRequest" @keyup="searchStock(queryStockRequest)" type="text" id="table-search-stockrequests" class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for stockrequests">
        </div>
    </div>
    <div v-show="isLoading" class="flex items-center mt-12 h-48  mb-12 justify-center">
  <img   class="w-20 h-20 absolute  left-1/2 -ml-2.5" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
</div>
<div v-if="noStockRequestDisplay">
   
   <div
   v-if="stockrequests.length<1"
   class="flex items-center mt-12 h-48 mb-12 justify-center"
 >
 <div class="text-3xl">Sorry  searched Stock Request not found</div>
 </div>

 </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
             
                <th scope="col" class="py-3 px-6">
                    Id
                </th>

                <th scope="col" class="py-3 px-6">
                    first Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Last Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Email
                </th>
                <th scope="col" class="py-3 px-6">
                    phone
                </th>
                <th scope="col" class="py-3 px-6">
                    Address
                </th>
                <th scope="col" class="py-3 px-6">
                    Stock Type
                </th>
                <th scope="col" class="py-3 px-6">
                    Stock Amount
                </th>
                <th scope="col" class="py-3 px-6">
                    Buying Price
                </th>
                <th scope="col" class="py-3 px-6 col-span-2">
                    Description
                </th>
                <th scope="col" class="py-3 px-6">
                    User Id
                </th>
              
                <!-- <th scope="col" class="py-3 px-6">
                    status
                </th> -->
                <th scope="col" class="py-3 px-6">
                    Requestd at
                </th>
                <th scope="col" class="py-3 px-6" v-if="userStore.role=='customerserviceofficor'">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="stockrequest in stockrequests" :key="stockrequest.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                
                <td class="py-4 px-6">
                    {{stockrequest.id}}
                </td>
                <td class="py-4 px-6">
                    {{stockrequest.firstName}} 
                </td>
                <td class="py-4 px-6">
                    {{stockrequest.lastName}} 
                </td>
                <td class="py-4 px-6">
                    {{stockrequest.email}}
                </td>
                <td class="py-4 px-6">
                   {{stockrequest.phone}}
                </td>
                <td class="py-4 px-6">
                   {{stockrequest.address}}
                </td>
                <td class="py-4 px-6">
                   {{stockrequest.stockType}}
                </td>
                <td class="py-4 px-6">
                   {{stockrequest.amount}}
                </td>
                <td class="py-4 px-6">
                   {{stockrequest.buying_price}}
                </td>
                <td class="py-4 px-6 col-span-2">
                   {{stockrequest.description}}
                </td>
                <td class="py-4 px-6">
                   {{stockrequest.user_id}}
                </td>
                <!-- <td class="py-4 px-6">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Online
                    </div>
                </td> -->
                <td class="py-4 px-6">
                    {{ filterTime( stockrequest.created_at)}}
                </td>
                <!-- <td class="py-4 px-6">
                    <button @click="deletestockrequest(stockrequest.id)"  class="font-medium text-white dark:text-blue-500 bg-red-500 rounded p-2">Delete stockrequest</button>
                </td> -->
                <td class="py-4 px-6" v-if="userStore.role=='customerserviceofficor'">
                    <button   class="font-medium text-white dark:text-blue-500 bg-gray-500 rounded p-2">  <a :href="`mailto:${ stockrequest.email}`">Replay</a></button>
                </td>
            </tr>
          
        </tbody>
    </table>
</div>
<div class="flex items-center justify-center p-2">
                <v-pagination
                    class="p-10"
                    v-model="page"
                    :pages="pageCount"
                    :range-size="1"
                    active-color="#337aff"
                    @update:modelValue="getstockrequests"
                />
            </div>
    </div>
</template>

<script setup>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { onMounted,ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useUserStore } from "../../stores/user-store";


const userStore=useUserStore();


 let stockrequests=ref([]);
 let page = ref(1)
 let pageCount = ref(null)
 let queryStockRequest=ref(null)
 const isLoading=ref(false)
 const findTime=ref(0)
 const noStockRequestDisplay=ref(false)

 onMounted(async() => {
    isLoading.value=true;
    getstockrequests();
 })
 

 const getstockrequests=async()=>{
    let res=await axios.get('http://127.0.0.1:8000/api/get_all_stockrequests?page=' + page.value)
    
    pageCount.value = res.data.page_count
    stockrequests.value = res.data.stockrequests.data
    console.log('response',res);
     isLoading.value=false;

    // if(res.data.products.data){
    //   isLoading.value=false;
    // }
}

const searchStock=async(query)=>{
    noStockRequestDisplay.value=true;
    isLoading.value=true
    let res=await axios.post('http://127.0.0.1:8000/api/searchStockRequests?page=' + page.value,{
      searchData:query,
    })
    isLoading.value=false;
    pageCount.value = res.data.page_count
    stockrequests.value = res.data.stockrequests.data
    console.log('response',res);
    

    

   }

const deletestockrequest = async (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete this stockrequest?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete('http://127.0.0.1:8000/api/stockrequest/' + id)
                    getstockrequests()
                    Swal.fire(
                        'Deleted!',
                        'Stock Request has been deleted successfuly.',
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