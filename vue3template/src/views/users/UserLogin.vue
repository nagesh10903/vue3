<script  setup>
import apiClient from '@/api/clientapi';
import { ref } from 'vue'
const username = ref("")
const email = ref("")

const dologin=() => {
let users=apiClient.getLoginUserLocal(username,email);
if(users.length>0){
    console.log("user=",users[0]);
    return true;
}
return false;
};
</script>


<template>
 
    <form name="login-form" @submit.prevent="dologin()">
          <div class="mb-3">
            <label for="username">Username: </label>
            <input v-model="username" id="username" type="text" placeholder="UserName"/>
          </div>
          <div class="mb-3">
            <label for="email">Email: </label>
            <input id="email" v-model="email" placeholder="Email" type="text"  />
          </div>
          <button class="btn btn-outline-dark" type="submit">
            Login
          </button>
        </form>
       <button>Close</button>
  
   </template>