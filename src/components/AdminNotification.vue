<template>
  <!-- Modal toggle -->


  <!-- Main modal -->


  <div class="m-10">
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="py-3 px-6">Id</th>
            <th scope="col" class="py-3 px-6">
              Type
            </th>
            <th scope="col" class="py-3 px-6">Notifiable Type</th>
            <th scope="col" class="py-3 px-6">Notifiable id</th>
            <th scope="col" class="py-3 px-6">data</th>
            <th scope="col" class="py-3 px-6">read_at</th>
            <th scope="col" class="py-3 px-6">created_at</th>
            <th scope="col" class="py-3 px-6">updated at</th>
            <th colspan="2" scope="col" class="py-3 px-6">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="notification in notifications"
            :key="notification.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ notification.id }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ notification.type }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ notification.notifiable_type }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ notification.notifiable_id }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ notification.data }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ notification.read_at }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ notification.created_at }}
            </td>
            <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
              {{ notification.updated_at }}
            </td>
            <!-- <td class="py-4 px-6">
              <router-link
                :to="`/editnotification/${notification.id}`"
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
            </td> -->
            <td class="py-4 px-6">
              <button
                @click="deleteProduct(product)"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import Swal from 'sweetalert2'
let notifications = ref([]);
const showModal = ref(false);

const show = () => {
  showModal.value = true;
};

const hide = () => {
  showModal.value = false;
};

onMounted(async () => {
  getNotification();
});


const getNotification=async()=>{
    let res=await axios.get('http://127.0.0.1:8000/api/notifications');
    console.log(res.data);
    notifications.value=res.data;

   }




// const deleteProduct = async (product) => {
//         Swal.fire({
//             title: 'Are you sure you want to delete this?',
//             text: 'You won\'t be able to revert this!',
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonText: 'Yes, delete it!',
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//         }).then(async (result) => {
//             if (result.isConfirmed) {
//                 try {
//                     await axios.delete('http://127.0.0.1:8000/api/product/' + product.id)
//                     getAllProducts()
//                     Swal.fire(
//                         'Deleted!',
//                         'Your product has been deleted.',
//                         'success'
//                     )
//                 } catch (err) {
//                     console.log(err)
//                 }
//             }
//         })
//     }
</script>

<style scoped></style>
