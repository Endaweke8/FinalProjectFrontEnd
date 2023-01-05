import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";



export const useAuthStore=defineStore('auth',()=>{
  const isAuthenticated=ref(false);
  const user=reactive({});
  const fullname=computed(()=>`${user.value.first_name}  ${user.value.last_name}`)
   
    
  
      async function logout(){
        this.$state={isAuthenticated:false,user:{}};
      }
    async  function login(){
       const res=await fetch('https://reqres.in/api/users/2?delay=2');
       const {data}=await res.json();
       console.log(data)
       this.user.value=data;
       this.isAuthenticated=true;
      }
      return {isAuthenticated,user,fullname,logout,login}
    }
)