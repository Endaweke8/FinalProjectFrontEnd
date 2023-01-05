

<template>
    <div class="py-2">
        <p class="text-gray-900 text-lg">
            <b>About me</b>
        </p>
        <p class="text-md md:text-lg text-gray-600 leading-normal">
            {{profileStore.description  }}
        </p>
    </div>
</template>

<script setup>
    import { useProfileStore } from '../../../stores/profile-store'
    // const userStore=useUserStore()
    const profileStore = useProfileStore()
</script>