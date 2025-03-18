<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="ui menu">
    <RouterLink class="item" to="/"><i class="home icon"></i></RouterLink>
    <RouterLink class="item" to="/about">緣起</RouterLink>
    <RouterLink class="item" to="/doc">自主學習準備課</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>

</style>
