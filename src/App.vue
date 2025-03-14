<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="ui menu">
    <RouterLink class="item" to="/">Home</RouterLink>
    <RouterLink class="item" to="/about">About</RouterLink>
    <RouterLink class="item" to="/doc">Docs</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>

</style>
