<script setup>
import { ref } from 'vue'

const userLoggedin = ref(true)

function isuserLoggedin() {
  return userLoggedin.value;
}
function setUserLoggedin(status) {
   userLoggedin.value=status;
}

function toggleUserLoggedin() {
   userLoggedin.value=!userLoggedin.value;
}
</script>

<template>
   <div class="login-menu">
    <nav>
      <router-link v-if="!userLoggedin" to="/login">Login</router-link>
      <router-link v-else to="/myaccount">My Account</router-link> 
   </nav>  
</div>
</template>
<style scoped>

.login-menu {
  position: fixed;
  display: flex;
  top: 0; left: 1; right: 0;
  padding-right: 5%;
  width: 20%;
  z-index: 9999;
  justify-content:flex-end;
  font-size: smaller;
}
</style>