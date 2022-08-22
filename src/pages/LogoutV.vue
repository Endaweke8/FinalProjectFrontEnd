<template>
  <div>
 
  </div>
</template>
<script>
  import { useAuth0 } from '@auth0/auth0-vue';
  export default {
    name:'LogoutV',
    setup() {
      const { logout } = useAuth0();

      return {
        logout: () => {
          logout({ returnTo: window.location.origin });
        }
      };
    }
  };
</script>