

<template>

    <div class="relative flex items-top justify-center min-h-screen bg-blue dark:bg-blue-500 sm:items-down sm:pt-0" style="margin-top: 50px;">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class="mt-8 overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-2">

                   <form  class="max-w-sm m-auto" >

                <div class="flex flex-col items-center mt-7">

                <label>Name<span class="text-red-500">*</span></label>
                <input type="file" placeholder="product name" name="name" @change="getImagePath" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>

               
                <label>Name<span class="text-red-500">*</span></label>
                <input type="text" placeholder="sale price" name="name" v-model="uploaddata.name" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>
                 
                <label>Name<span class="text-red-500">*</span></label>
                <input type="email" placeholder="sale price" name="email" v-model="uploaddata.email" class="w-full p-2 rounded-xl bg-none border border-gray-500" required>

                </div>

                <button type="submit"  @click="uploadData" class="bg-green-500 text-white py-2 px-4 mt-5 rounded-lg ">Save</button>
          
                </form>
                </div>
                <img :src="imagePath" alt="image" height="200" width="300" />
            </div>
        </div>
    </div>
   

</template>


<script >
import axios from 'axios';
   export default{
    data(){
        return{
            imagePath:"",
            uploaddata:{
                name:'',
                image:"",
                email:"",
            }
        }
    },
    methods:{
        getImagePath(e){
         const file=e.target.files[0];

         var form=new FormData();
         form.append('image',file);

         axios.post("http://127.0.0.1:8000/api/getImagePath",form).then((res)=>{
            this.imagePath=res.data;
            this.uploaddata.image=this.imagePath;
            console.log(res);
         });
          
        //  console.log(file)
       },
       uploadData(){
         
        axios.post("http://127.0.0.1:8000/api/upload",this.uploaddata).then((res)=>{  
            console.log(res.data);
         });
       }
    }
   }
</script>

<style scoped>
</style>








