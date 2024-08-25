<script setup>
import PageHeader from './components/header/PageHeader.vue'
import PageLayout from './components/layouts/DefaultPageLayout.vue'
import PageFooter from './components/header/PageFooter.vue'
</script>

<template>
  <div>
  <page-header /> 
  <page-layout class="content" /> 
  <page-footer/>
</div>
</template>

<style scoped>
.content {
  flex: 1;
  overflow: auto;
}
</style>
