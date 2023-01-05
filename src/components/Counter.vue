<template>
    <div>
        <button @click="store.increment" class="bg-blue-600 text-white p-3 m-5">+</button>
      Counter value :{{store.count}}
    <button @click="store.decrement" class="bg-blue-600 text-white p-3 m-5">-</button>
    </div>
    <h1>Counter moved to  {{ store.countDigitLength }} digits</h1>
</template>

<script setup>
import {useCounterStore} from '../stores/counter';
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';

const store=useCounterStore();



// const countDigitLength=computed(()=>
//     store.count.toString().length
// )
</script>

<style scoped>

</style>