<script setup>

</script>

<template>
<span class="default-menu">
    <nav>
        <router-link  to="/">Home</router-link>
        <span></span>
        <router-link  to="/welcome">Welcome</router-link>
        <span></span>
        <router-link to="/about">About</router-link>
      </nav>
    </span>

</template>
<style scoped>
.default-menu {
height: 50px;

nav>span {
  padding-left: 20px;
  }
}


</style>

