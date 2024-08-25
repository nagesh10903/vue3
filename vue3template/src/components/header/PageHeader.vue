<script  setup>
import DefaultMenu from '../menu/DefaultMenu.vue';
import LoginMenu from '../menu/LoginMenu.vue';



</script>


<template>  
    <div class="main-menu">
    <default-menu />
    </div>
    <div>
  <login-menu />
    </div>
</template>

<style  scoped>

.main-menu {
  position: fixed;
  display: flex;
  top: 0; left: 0; right: 0;
  width: 70%;
  z-index: 9999;
  padding-left: 10%;
  justify-content:flex-start;
}


</style>