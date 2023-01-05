<template>
    <div>
        <Counter />
<h1>Counte {{ store.count }}</h1>
<h1 v-if="authStore.isAuthenticated">User Name is {{ authStore.fullname }}</h1>
    </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia';
  import {useCounterStore} from '../stores/counter';
  import {useAuthStore} from '../stores/auth';
import Counter from './Counter.vue';
  
  

  const store=useCounterStore();
  const authStore=useAuthStore();
  const {isAuthenticated,user}=storeToRefs(authStore);


  console.log(store.count);
  console.log(isAuthenticated);
  console.log(user.name)

</script>

<style scoped>

</style>