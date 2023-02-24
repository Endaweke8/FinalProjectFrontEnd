<template>
<div class="mb-10">
    <div class="w-full ">
        <div class=" flex mt-10 mr-10">
            <div class="w-1/3">
                <img 
                    class="w-full rounded-lg h-auto shadow-lg" 
                    :src="profileStore.image"
                    alt="Profile Pic"
                >
            </div>
            <div class="w-full pl-4">
                <div class="flex">
                    <div class="w-1/2">
                        <h1 class="text-2xl md:text-4xl test-left text-gray-900">
                            {{ profileStore.firstName }} {{ profileStore.lastName }}
                         
                        </h1>
                        <span class="text-md text-gray-700">
                            <i><b>{{ profileStore.location }}</b></i>
                            <!-- <i><b>London Uk</b></i> -->
                        </span>
                    </div>
                   
                    <div class="w-1/2 mt-2" v-if="userStore.id == route.params.id">
                        <RouterLinkButton
                            btnText="Edit Profile"
                            color="green"
                            url="/account/edit-profile"
                        />
                    </div>
                    <div class="w-1/2 mt-2 ml-2" v-if="userStore.id == route.params.id">
                        <RouterLinkButton
                            btnText="View Order History"
                            color="green"
                            url="/userorderhistory"
                        />
                    </div>
                </div>
                <ProfileInfoSection />
                <ProfileAboutSection />
                
                
            </div>

        </div>
        <CartsByIdSection />
       
             
      
        <!-- <SongsSection />
        <YoutubeVideoSection />
        <PostsSection/> -->
        <!-- <SongsSection />
        <YoutubeVideosSection />
        <PostsSection /> -->
    </div>
</div>
   
   
</template>

<script setup>
import NavigationVue from '../../components/NavigationVue.vue'
import ProfileInfoSection from '../../components/partials/profile/ProfileInfoSection.vue';
import ProfileAboutSection from '../../components/partials/profile/ProfileAboutSection.vue';
import RouterLinkButton from '../../components/global/RouterLinkButton.vue';
import SongsSection from '../../components/partials/profile/SongsSection.vue'
import YoutubeVideoSection from '../../components/partials/profile/YoutubeVideoSection.vue';
import PostsSection from '../../components/partials/profile/PostsSection.vue'
  
    import { useUserStore } from '../../stores/user-store'
    import { useProfileStore } from '../../stores/profile-store'
    import { useSongStore } from '../../stores/song-store'
    import { onMounted } from 'vue'
    import { useRoute } from 'vue-router'
import CartsByIdSection from '../../components/partials/profile/CartsByIdSection.vue';
import FooterSection from '../../components/structure/FooterSection.vue';

import OrderResponse from '../../components/OrderResponse.vue';
    const route = useRoute()
    const userStore = useUserStore()

    const profileStore = useProfileStore()
     const songStore = useSongStore()
    onMounted(async () => {
        await profileStore.fetchProfileById(route.params.id)


    })
</script>
<style scoped>

</style>