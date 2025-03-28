<template>
  <nav class="ui menu">
    <RouterLink class="item" to="/"><i class="home icon"></i></RouterLink>
    <RouterLink class="item" to="/about">緣起</RouterLink>
    <RouterLink class="item" to="/doc">自主學習準備課</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 添加全局導航守衛，在每次路由切換後捲動到頁面頂部
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})
</script>



<style scoped>

</style>
