<template>
    <div class="mt-8 ">
      <div  class="italic mb-3">
    <div class="text-3xl font-bold ">Your Ordered History</div>
  </div>
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    
    <div v-show="isLoading" class="flex items-center mt-12 h-48  mb-12 justify-center">
    <img   class="w-20 h-20 absolute  left-1/2 -ml-2.5" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
  </div>
    <table v-if="isLoading==false" class="w-full text-sm text-left text-gray-500 dark:text-gray-400 z-0">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
             
                <th scope="col" class="py-3 px-6">
                   Transaction Id
                </th>
  
                <th scope="col" class="py-3 px-6">
                    CLient Name
                </th>
                <th scope="col" class="py-3 px-6">
                    Client Id
                </th>
                <th scope="col" class="py-3 px-6">
                    Client Address
                </th>
                <th scope="col" class="py-3 px-6">
                    Orders Details
                </th>
                <th scope="col" class="py-3 px-6">
                    Amount
                </th>
                <th scope="col" class="py-3 px-6">
                    Currency
                </th>
                <th scope="col" class="py-3 px-6">
                    Ordered At
                </th>
            
              
            </tr>
        </thead>
        <tbody>
            <tr v-for="order in orderResponse" :key="order.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
               
                
                <td class="py-4 px-6">
                    {{order.id}}
                </td>
                <td class="py-4 px-6">
                    {{order.client_name}}
                </td>
                <td class="py-4 px-6">
                    {{order.client_id}}
                </td>
                <td class="py-4 px-6">
                    {{order.client_address}}
                </td>
                <td class="py-4 px-6">
                    {{order.order_details}}
                </td>
                <td class="py-4 px-6">
                    {{order.amount}}
                </td>
                <td class="py-4 px-6">
                    birr<!-- {{order.currency}} -->
                </td>
                <td class="py-4 px-6">
                    {{ filterTime( order.created_at)}}
                </td>
               
              
            </tr>
          
        </tbody>
    </table>
  </div>
  <!-- <div class="flex items-center justify-center p-2">
                <v-pagination
                    class="p-10"
                    v-model="page"
                    :pages="pageCount"
                    :range-size="1"
                    active-color="#337aff"
                    @update:modelValue="getOrders"
                />
            </div> -->
    </div>
  </template>

<script setup>
    import axios from 'axios'
    import Swal from 'sweetalert2'
    import {ref,onMounted} from 'vue'
     import { useUserStore } from '../stores/user-store'
    const userStore = useUserStore()
    const orderResponse=ref([]);
    const isLoading=ref(false);
    const findTime=ref(0);
  
    onMounted(() => {
        getOrderResponse();
        isLoading.value=true;
    })
   
    const getOrderResponse=async()=>{
    let res=await axios.get('http://127.0.0.1:8000/api/getOrderResponse/' + userStore.id)
    orderResponse.value = res.data.orderResponse
    console.log('response',res);
    isLoading.value=false;
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

   



</script>