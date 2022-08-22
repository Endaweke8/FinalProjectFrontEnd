<template>
<div class="flex flex-col 
                    items-center  mt-6 mb-10">
           <div class="block p-6 shadow-cyan-500/50 rounded-lg shadow-lg bg-white px-10">

    <div class="form-group mb-6 mt-6 ">
        <input v-model="newRecipie.image_url" class="form-control block
        w-full
        my-4
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter image url please"/>
      <input v-model="newRecipie.title" class="form-control block
        w-full
        my-4
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Recipe title">
    </div>
    <div class="form-group mb-6">
          <textarea
          v-model="newRecipie.description"
      class="
        form-control
        block
        w-full
        px-3
        my-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Recipe Description"
    ></textarea>
      <textarea v-model="newRecipie.ingredients" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Ingredients"></textarea>

       
    </div>
    <div class="form-group mb-6">
      <textarea
      v-model="newRecipie.steps"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Steps"
    ></textarea>
    
     <textarea v-model="newRecipie.categories" class="form-control block
        w-full
        px-3
        my-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="Catagories"></textarea>
        
         <input v-model="newRecipie.duration" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        placeholder="duration">
    </div>
    
    <button  class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" @click="insert_user_recipes()">Send</button>

</div>
</div>

</template>

<script>
import {useQuery, useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import {ref,computed} from 'vue'
   
 const MESSAGES=gql`
 {
    user_recipes {
    
    image_url
    title
    description
    ingredients
    steps
    categories
    duration
 
  }}
 `;

   export default {



setup(){

 const newRecipie=ref({
            image_url:'',
            title:'',
            description:'',
            ingredients:[],
            steps:[],
            categories:[],
            duration:'',
            ingredientsRows:1,
            methodRows:1
          });

          const {result,loading,error}=useQuery(MESSAGES);
          const user_recipes = computed(() => result.value?.user_recipes ?? [])

 const { mutate: insert_user_recipes,onDone } = useMutation(gql`
      mutation insert_user_recipes ($image_url: String!,$title:String!,$description:String!,$ingredients: String!,$steps:String!,$categories:String!,$duration:String!) {
        insert_user_recipes (objects: [{ image_url: $image_url, title: $title,description:$description,ingredients: $ingredients, steps: $steps,categories:$categories,duration: $duration}]) {
          returning {
                id
              }
        }
      }
    `, () => ({
      variables: {
        image_url: newRecipie.value.image_url,
        title:newRecipie.value.title,
        description:newRecipie.value.description,
        ingredients:newRecipie.value.ingredients,
        steps:newRecipie.value.steps,
        categories:newRecipie.value.categories,
        duration:newRecipie.value.duration,
      },

     update: (cache, { data: { insert_user_recipes } }) => {
    let data = cache.readQuery({ query: MESSAGES })
    data = {
      ...data,
      user_recipes: [
        ...data.user_recipes,
        insert_user_recipes,
      ],
    }
    cache.writeQuery({ query: MESSAGES, data })
  },
    

    }))
  onDone(() => {
      console.log("Peace beka endexu")
           newRecipie.value.image_url=''
           newRecipie.value.title=''
            newRecipie.value.description=''
            newRecipie.value.ingredients=[]
            newRecipie.value.steps=[]
            newRecipie.value.categories=[]
            newRecipie.value.duration=''
      alert("You added successfly")
    })


 const popupOpen=ref(false)
        
          const togglePopup=()=>{
            popupOpen.value=!popupOpen.value;
          }
           const addNewIngredient=()=>{
            newRecipie.value.ingredientsRows++;
           }
           const AddNewStep=()=>{
            newRecipie.value.methodRows++;
           }
    

        return{
            result,
            loading,
            error,
            user_recipes,
            newRecipie,
            togglePopup,
            popupOpen,
            addNewIngredient,
            AddNewStep,
            insert_user_recipes, 

          }
        


}

    }
</script>

<style scoped>

</style>