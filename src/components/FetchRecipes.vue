<template>
<div class="flex justify-center">
  <!-- <div class="mb-1 my-3 xl:w-96">
    <label for="exampleSearch2" class="form-label inline-block mb-2 text-gray-700">Search</label>
    <input
      v-model="newRecipie.search"
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
      id="exampleSearch2"
      placeholder="Search Recipie"
    />
  </div> -->
</div>
<div  v-if="result && result.user_recipes" class="grid lg:grid-cols-3 md:grid-cols-2 mx-10 my-10">

<div  v-for="recipie of result.user_recipes" :key="recipie.id" :search="search" class="w-full my-10 max-w-sm shadow-cyan-500/50 hover:bg-violet-100 rounded-lg 
shadow-md dark:bg-gray-800 dark:border-gray-700
transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1
 hover:scale-110 hover:bg-indigo-80 duration-100">
    <router-link to="#">
        <img class="p-8 rounded-t-lg max-h-60 	" :src="recipie.image_url" alt="Food image">
    </router-link>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="  tracking-tight text-gray-900 dark:text-white"><b class="text-xl">Title</b> :{{recipie.title}}</h5>
        </a>
        <p class=" tracking-tight text-gray-900 dark:text-white"> <b class="text-xl">Description </b> :{{recipie.description}}</p>
     <p class=" tracking-tight text-gray-900 dark:text-white"><b class="text-xl">Ingredients </b>:{{recipie.ingredients}}</p>
     <p class="  tracking-tight text-gray-900 dark:text-white"><b class="text-xl">Steps</b> :{{recipie.steps}}</p>
    <p class=" tracking-tight text-gray-900 dark:text-white"><b class="text-xl">Cagegories</b> :{{recipie.categories}}</p>
    <h5 class="  tracking-tight text-gray-900 dark:text-white"><b class="text-xl">Durations</b> :{{recipie.duration}}</h5>
      <svg class="h-6 w-6 text-blue-500 my-10 cursor-pointer"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5
       7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7
        11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
      
       
        <div class="flex justify-between items-center">
    <svg class="w-12 h-12 dark:text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" ></path></svg>
            
    <textarea
      v-model="newRecipie.steps"
      class="
        form-control
        block
        w-full
        px-3
        mx-4
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
      
      rows="1"
      placeholder="Comments"
      ></textarea>
           
            <a href="#" class="text-white bg-blue-100 hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-xm px-5 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="h-8 w-8 text-green-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
                 <path stroke="none" d="M0 0h24v24H0z"/>  
                 <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                 </svg></a>
        </div>
    </div>
     <div class="flex items-center mt-2.5 mb-5">
            <ul class="flex justify-center">
  <li>
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1 cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
    </svg>
  </li>
  <li>
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1 cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
    </svg>
  </li>
  <li>
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1 cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
    </svg>
  </li>
  <li>
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 mr-1 cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
    </svg>
  </li>
  <li>
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500 cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
    </svg>
  </li>
</ul>
        </div>
</div>



</div>

</template>

<script>
import { useQuery} from '@vue/apollo-composable'
import gql from 'graphql-tag'
import {ref} from 'vue'
 const All_POST_QUERY=gql`
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
        name:"FetchRecipies",
  setup (){

const newRecipie=ref({
            search: '',
            image_url:'',
            title:'',
            description:'',
            ingredients:[],
            steps:[],
            categories:[],
            duration:'',
          });
    const {result,loading,error}=useQuery(All_POST_QUERY);
    return{
      result,
      loading,
      error,
      newRecipie
    };
  },

 }
    
</script>

<style scoped>

</style>