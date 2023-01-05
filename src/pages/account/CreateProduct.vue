<template>
    <div id="createProduct" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">

        <div class="text-gray-900 text-xl">Create Post</div>
        <div class="bg-green-500 w-full h-1"></div>

        <CropperModal
            v-if="showModal"
            :minAspectRatioProp="{width: 16, height: 9}"
            :maxAspectRatioProp="{width: 16, height: 9}"
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        />

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Name"
                    placeholder="Product Name!!!"
                    v-model:input="name"
                    inputType="text"
                    
                />
            </div>
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Slug"
                    placeholder="Product slug"
                    v-model:input="slug"
                    inputType="text"
                    
                />
            </div>
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Price"
                    placeholder="Price"
                    v-model:input="price"
                    inputType="text"
                    
                />
            </div>
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Sale_Price"
                    placeholder="Sale_price"
                    v-model:input="sale_price"
                    inputType="text"
                    
                />
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <DisplayCropperButton
                    label="Product Image"
                    btnText="Add Product Image"
                    @showModal="showModal = true"
                />
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <CroppedImage
                    label="Cropped Image"
                    :image_name="image_name"
                />
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <TextArea
                    label="Description"
                    placeholder="Please enter Product information here!!!"
                    v-model:description="description"
                    
                />
            </div>
        </div>

        <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full px-3">
                <SubmitFormButton
                    btnText="Post Product"
                    @submit="createProduct"
                />
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import CroppedImage from '../../components/global/CroppedImage.vue'
    import TextInput from '../../components/global/TextInput.vue'
    import TextArea from '../../components/global/TextArea.vue'
    import CropperModal from '../../components/global/CropperModal.vue'
    import SubmitFormButton from '../../components/global/SubmitFormButton.vue'
    import DisplayCropperButton from '../../components/global/DisplayCropperButton.vue'
    import { useUserStore } from '../../stores/user-store'
    import { usePostStore } from '../../stores/post-store'
    import { useRouter } from 'vue-router'
    import axios from 'axios'
    import Swal from '../../sweetalert2'
    const userStore = useUserStore()
    const postStore = usePostStore()
    const router = useRouter()
    let showModal = ref(false)
    let name = ref(null)
    let slug = ref(null)
    let description = ref(null)
    let price = ref(null)
    let sale_price = ref(null)
    let imageData = null
    let image_name = ref(null)
    let errors = ref([])
    const setCroppedImageData = (data) => {
        imageData = data
        image_name.value = data.imageUrl
    }
    const createProduct = async () => {
        errors.value = []
        // await postStore.fetchPostsByUserId(userStore.id)
        if (imageData === null) {
            Swal.fire(
                'No cropped image found?',
                'Please crop an image of your choice and complete all other inputs',
                'warning'
            )
            return null
        }
        let data = new FormData();
        // data.append('user_id', userStore.id )
        data.append('name', name.value )
        data.append('slug', slug.value )
        data.append('description', description.value )
        data.append('price', price.value )
        data.append('sale_price', sale_price.value )
        console.log(data)
        if (imageData) {
            data.append('image_name', imageData.file )
            data.append('height', imageData.height )
            data.append('width', imageData.width )
            data.append('left', imageData.left )
            data.append('top', imageData.top )
        }
        try {
            
            await axios.post('http://127.0.0.1:8000/api/saveproduct', data
            // {
            //     'name':name.value,
            //     'slug':slug.value,
            //     'description':description.value,
            //     'price':price.value,
            //     'sale_price':sale_price.value,
            //     'image_name':imageData.file,
            //     'height':imageData.height,
            //     'width':imageData.width,
            //      'left':imageData.left,
            //      'top':imageData.top, 


            // }
            )
            Swal.fire(
                'New product created!',
                'The post you created was called "' + name.value + '"',
                'success'
            )
            
            router.push('/account/profile/'+userStore.id)
        } catch (err) {
            errors.value = err.response.data.errors;
        }
    }
</script>