<template>
    <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">

        <div class="text-gray-900 text-xl">Edit Profile</div>
        <div class="bg-green-500 w-full h-1"></div>

        <CropperModal
        
        v-if="showModal"
            :minAspectRatioProp="{width: 8, height: 8}"
            :maxAspectRatioProp="{width: 8, height: 8}"
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        />
 
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="First Name"
                    placeholder="John"
                    v-model:input="firstName"
                    inputType="text"
                    :error="errors.first_name ? errors.first_name[0] : ''"
                />
            </div>
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Last Name"
                    placeholder="Doe"
                    v-model:input="lastName"
                    inputType="text"
                    :error="errors.last_name ? errors.last_name[0] : ''"
                />
            </div>
        </div>
        

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Email"
                    placeholder="email@gmail.com"
                    v-model:input="email"
                    inputType="text"
                    :error="emailError ? 'email already exist or incorrect email format' : ''"
                />
            </div>
        </div>
        
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput 
                    label="Location"
                    placeholder="Madrid, ES"
                    v-model:input="location"
                    inputType="text"
                />
                
            </div>

        </div>
        <button @click="changePasswordField=!changePasswordField" class="bg-green-500 p-3 m-2 rounded text-white">Change Password</button>

      

        <div v-if="changePasswordField" class="w-full max-w-xs">
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Old Password
      </label>
      <input v-model="oldPassword" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="oldpassword" type="text" placeholder="old Password">
      <p class="text-red-500" v-if="oldPasswordError">{{ oldPasswordError }}</p>

    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        New Password
      </label>
      <input v-model="newPassword" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="oldpassword" type="text" placeholder="New Password">
      <p class="text-red-500" v-if="errors.newPassword">{{ errors.newPassword }}</p>
    </div>
   
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Confirm New Password
      </label>
      <input v-model="newPassword_confirmation" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="oldpassword" type="text" placeholder="Confirm New Password">
      <p class="text-red-500" v-if="errors.newPassword">{{ errors.newPassword_confirmation }}</p>
    </div>
    <div class="flex items-center justify-between">
      <button @click="changePasswordField=false" class="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Cancel
      </button>
      <button @click="updatePassword" class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Save
      </button>
     
    </div>
  </div>

</div>
      
        
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <DisplayCropperButton
                    label="Profile Image"
                    btnText="Update Profile Image"
                    @showModal="showModal = true"
                />
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <CroppedImage
                    label="Cropped Image"
                    :image="image"
                />
            </div>
        </div>
      
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <TextArea
                    label="Description"
                    placeholder="Please enter some information here!!!"
                    v-model:description="description"
                />
            </div>
        </div>

        <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full px-3">
                <SubmitFormButton
                    btnText="Update Profile"
                    @click="updateUser"
                />
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useUserStore } from '../stores/user-store' 
    import CroppedImage from '../components/global/CroppedImage.vue'
    import TextInput from '../components/global/TextInput.vue'
    import TextArea from '../components/global/TextArea.vue'
    import CropperModal from '../components/global/CropperModal.vue'
    import SubmitFormButton from '../components/global/SubmitFormButton.vue'
    import DisplayCropperButton from '../components/global/DisplayCropperButton.vue'
    import Swal from "sweetalert2";
    import axios from 'axios'

    const router = useRouter()
    const userStore = useUserStore()

    let showModal = ref(false)
    let firstName = ref(null)
    let lastName = ref(null)
    let email = ref(null)
    let location = ref(null)
    let description = ref(null)
    let imageData = null
    let image = ref(null)
    let errors = ref([])
    let emailError=ref();
    let oldPassword = ref(null)
    let newPassword=ref(null);
    let newPassword_confirmation = ref(null)
    let changePasswordField=ref(false)
    let oldPasswordError=ref(null)

    onMounted(() => {
        userStore.fetchUser()
        firstName.value = userStore.firstName || null
        lastName.value = userStore.lastName || null
        email.value = userStore.email || null
        location.value = userStore.location || null
        description.value = userStore.description || null
        image.value = userStore.image || null
        
    })

    const setCroppedImageData = (data) => {
        imageData = data
        image.value = data.imageUrl
    }

    const updatePassword=async()=>{
        oldPasswordError.value=null
        try {
         const res= await axios.post('http://127.0.0.1:8000/api/password/' + userStore.id + '?_method=PUT',{
                oldPassword:oldPassword.value,
                newPassword:newPassword.value,
                newPassword_confirmation:newPassword_confirmation.value
            })
          if(res.data.success=='true'){
            changePasswordField.value=false
            Swal.fire({
          toast: true,
          icon: "success",
          title:
            " Dear " + firstName.value + "Your password is updated ",
          animation: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
          }
            
        } catch (err) {
            errors.value = err.response.data.errors;
            if(errors.value=='The old password did not match or incorrect'){
                oldPasswordError.value='The old password did not match or incorrect';
            }
            console.log(errors.value)
            // emailError.value=err.response.data.errors;
            // console.log(err.response.data.message);
        }
    }

    const updateUser = async () => {
        
        errors.value = []

        let data = new FormData();

        data.append('first_name', firstName.value || '')
        data.append('last_name', lastName.value || '')
        data.append('email', email.value || '')
        data.append('location', location.value || '')
        data.append('description', description.value || '')

        if (imageData) {
            data.append('image', imageData.file || '')
            data.append('height', imageData.height || '')
            data.append('width', imageData.width || '')
            data.append('left', imageData.left || '')
            data.append('top', imageData.top || '')
        }
         
       

        try {
            await axios.post('http://127.0.0.1:8000/api/users/' + userStore.id + '?_method=PUT',data)

            await userStore.fetchUser()
            Swal.fire({
          toast: true,
          icon: "success",
          title:
            " Dear " + firstName.value + "  Your profile is updated ",
          animation: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

            router.push('/profile' )
        } catch (err) {
            errors.value = err.response.data.errors;
            emailError.value=err.response.data.errors;
            console.log(err.response.data.message);
        }
    }
</script>