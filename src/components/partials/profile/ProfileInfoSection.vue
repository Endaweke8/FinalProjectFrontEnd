<template>
    <div class="
        w-full
        sm:w-1/2
        font-bold
        text-gray-100
        mt-4
        rounded
        text-center
        bg-green-500
        p-2
        py-1
    ">
      Number of Orders: <span v-if="cartStore.carts">{{ cartStore.carts.quantity }}</span>
    </div>
</template>

<script setup>
    import { useCartStore } from '../../../stores/cart-store';
    const cartStore = useCartStore()
    
</script>