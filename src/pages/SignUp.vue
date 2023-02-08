

<template>
<NavigationVue />
<SignUp />


   

</template>


<script setup>
import NavigationVue from '../components/NavigationVue.vue';
import SignUp from '../components/SignUp.vue'

import store from '../store';
import { useRouter
 } from 'vue-router';
 import {ref} from 'vue'

 const router=useRouter()

 const show=ref(false)

  const user={
    name:'',
    email:'',
    password:'',
    password_confirmation:'',
  }

  function register(ev){
    ev.preventDefault();
    store.dispatch('register',user).then((res)=>{
        console.log(res)
        router.push({
            name:"LoginV"
        })
    })
  }

</script>

<style scoped>
</style>








