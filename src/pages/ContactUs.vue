

<template>

    <div class="relative flex items-top justify-center min-h-screen bg-blue dark:bg-blue-500 sm:items-down sm:pt-0" style="margin-top: 50px;">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-8 overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="p-6 mr-2 bg-blue-50 dark:bg-blue-500 sm:rounded-lg">
                        <h1 class="text-4xl sm:text-5xl text-blue-500 dark:text-white font-extrabold tracking-tight">
                            Get in touch
                        </h1>
                        <p class="bg-gradient-to-r from-green-400 to-blue-500 ...,text-normal text-lg sm:text-2xl font-medium text-white-500 dark:text-white-500 mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                +251-949963101
                            </div>
                        </div>

                        <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div class="ml-4 text-md tracking-wide font-semibold w-40">
                               endaweke1234@gmail.com
                            </div>
                        </div>
                    </div>

                   <form  class="max-w-sm m-auto">

                <div class="flex flex-col items-center mt-7">

                <label>Name<span class="text-red-500">*</span></label>
                <input type="text" placeholder="Enter your name" v-model="state.name" class="w-full p-2 rounded-xl bg-none border border-gray-500">
                <p v-if="v$.name.$error" class="text-red-600 mt-3">This field cannot be empty</p>

                <label class="mt-4">Email<span class="text-red-500">*</span></label>
                <input type="email" placeholder="Enter your email" v-model="state.email" class="w-full p-2 rounded-xl bg-none border border-gray-500" autocomplete="email">
                <p v-if="v$.email.$error" class="text-red-600 mt-3">{{v$.email.$errors[0].$message}}</p>
                
                <label>Message<span class="text-red-500">*</span></label>
                <input type="text" placeholder="Enter your message" v-model="state.message" class="w-full p-2 rounded-xl bg-none border border-gray-500">
                <p v-if="v$.message.$error" class="text-red-600 mt-3">This field cannot be empty</p>

                </div>

                <button @click="sumbitForm" class="bg-green-500 text-white py-2 px-4 mt-5 rounded">Submit</button>

                </form>
                </div>
            </div>
        </div>
    </div>
   

</template>


<script>
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import {reactive, computed} from "vue";
import useVuelidate from '@vuelidate/core'
import {required, email} from '@vuelidate/validators'
export default {
 name:'ContactUs',
  setup() {
    const state = reactive({
      name: '',
      email: '',
      message:'',
    });
    const rules = computed(() => {
      return {
        name: {required},
        email: {required, email},
        message:{required}
      }
    });
    const v$ = useVuelidate(rules, state);
    const sumbitForm = async () => {
      const isFormCorrect = await v$.value.$validate();
      if(!isFormCorrect) return
      insert_users_messages()

    }

 const { mutate:insert_users_messages,onDone} = useMutation(gql`
      mutation insert_users_messages ($name: String!,$email:String!,$message:String!) {
        insert_users_messages (objects: [{ name: $name, email: $email,message:$message}]) {
          returning {
                id
              }
        }
      }
    `, () => ({
      variables: {
        name: state.name,
        email:state.email,
        message:state.message,
      },
    }))

    
  onDone(() => {
      alert("Message has been sent successfyly")
    })
    return {state, v$, sumbitForm,insert_users_messages}
  }
}
</script>

<style scoped>
</style>








