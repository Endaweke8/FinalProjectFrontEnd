<template>
  <button
    class="float-right inline-block bg-gray-700 hover:bg-gray-400 rounded-xl border-3 hover:border-white font-bold text-white no-underline text-3xl px-4 py-3"
    @click="$emit('submit', true)"
  >
    {{ btnText }}
  </button>
</template>

<script setup>
import { defineProps, toRefs } from "vue";

const props = defineProps({ btnText: String });
const { btnText } = toRefs(props);
</script>
