<script setup>
import { ref,computed } from 'vue'
import {  useStore } from "vuex";

const store=useStore();
const isLoggedinUser =computed(()=>store.getters['userlogin/isLoggedinUser']);

const userLoggedin = ref(isLoggedinUser.value);
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