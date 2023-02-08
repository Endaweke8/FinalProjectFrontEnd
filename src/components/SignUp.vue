<!-- <template>
    <div>
<h1>Register</h1>
<input type="email" v-model="email" placeholder="enter your email">
<br>
<input type="password" v-model="password" placeholder="Enter you password">
<br>
<button @click="Register" class="bg-green-500 px-4 m-3 text-white">Submit</button>
    </div>
</template>

<script setup>
  import AuthenticationService from '../services/AuthenticationService'
   import {ref} from 'vue'
import axios from 'axios';
   const email=ref('email')
   const password=ref('password');


   const Register=async()=>{
    const response=await axios.post('localhost:8081/register',{
        email:email.value,
        password:password.value
    })
    console.log(response)
   }
</script>

<style scoped>

</style> -->