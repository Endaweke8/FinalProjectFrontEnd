<template>
  <div >
    <div  class="grid justify-center">
      <h1>Welcome {{ user.email }}</h1>
      <br>
      <button class="bg-green-500 h-35 pa-15 w-40 mb-10 rounded" @click="togglePopup">Add Your Recipes</button>
    </div>
     <div v-if="popupOpen">
       <AddRecipe/>
     </div>
  </div>
</template>
<script>
import {ref} from 'vue'
  import { useAuth0 } from '@auth0/auth0-vue';
import AddRecipe from '../components/AddRecipe.vue';

  export default {
    setup() {
        const { loginWithRedirect, user, isAuthenticated } = useAuth0();
        const popupOpen=ref(true)
        
          const togglePopup=()=>{
            popupOpen.value=!popupOpen.value;
          }
       
       return {
        popupOpen,
        togglePopup,
            login: () => {
                loginWithRedirect();
            },
            user,
            isAuthenticated
        };
    },
    components: { AddRecipe, }
};
</script>