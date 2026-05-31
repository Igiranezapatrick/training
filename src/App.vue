<script setup>
import navbar from './components/navbar.vue'
import { RouterView } from 'vue-router'
import Footer from './components/footer.vue'
</script>
<template>
  <navbar/>
  <RouterView/>
  <Footer/>
</template>