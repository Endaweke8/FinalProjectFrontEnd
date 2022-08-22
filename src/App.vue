
<template>
  <div >
    <NavigationVue />
<!--   
<router-link to="/">Home</router-link>
<router-link to="/about">About Page</router-link> 
<router-link  to="/profile">Profile</router-link>
<router-link  to="/logout">Logout</router-link>       -->

<router-view></router-view>
<FooterV/>
  </div>
</template>
<script>
import NavigationVue from './components/NavigationVue.vue';
import FooterV from './components/FooterV.vue';

  export default {
    components:{
    NavigationVue,
    FooterV
},
    setup(){
    
    }
    
  }
</script>

<style >
</style>