<template>
    <div>
        <div class="mx-auto py-4">
            <div class="flex flex-wrap font-bold text-gray-100">

                <div class="text-gray-900 text-xl">Songs</div>
                <div class="bg-green-500 w-full h-1"></div>

                <div class="w-full mt-4" >
                    <RouterLinkButton
                        class="ml-2"
                        btnText="Delete Song"
                        color="red"
                        url="/account/delete-song"
                        v-if="userStore.id== route.params.id"
                    />
                    <RouterLinkButton
                        btnText="Add Song"
                        color="green"
                        url="/account/add-song"
                        
                    />
                </div>
            </div>
        </div>

        <div class="pb-4">
            <SongPlayer />
        </div>
    </div>
</template>

<script setup>
    import SongPlayer from './SongPlayer.vue'
    import RouterLinkButton from '../../global/RouterLinkButton.vue'
    import { useUserStore } from '../../../stores/user-store'
    import { useRoute } from 'vue-router'
    import { onMounted } from 'vue'
    import { useSongStore } from '../../../stores/song-store'
    const songStore = useSongStore()
    const route = useRoute()
    const userStore = useUserStore()
    onMounted(async () => {
        await songStore.fetchSongsByUserId(route.params.id)
    })
</script>