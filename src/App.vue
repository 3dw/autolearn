<template>
  <nav class="ui menu">
    <RouterLink class="item" to="/"><i class="home icon"></i></RouterLink>
    <RouterLink class="item" to="/about">
      <i class="info icon"></i>
      緣起
    </RouterLink>
    <!-- <RouterLink class="item" to="/doc">自主學習準備課</RouterLink> -->
    <RouterLink class="item fat-only" to="/doc_teens">
      <i class="book icon"></i>
      自主學習準備課-青少年篇
    </RouterLink>
    <RouterLink class="item fat-only" to="/doc_parents">
      <i class="book icon"></i>
      自主學習準備課-家長篇
    </RouterLink>
    <RouterLink class="item fat-only" to="/doc_educators">
      <i class="book icon"></i>
      自主學習準備課-教師篇
    </RouterLink>
    <div class="ui simple dropdown item thin-only">
      <div class="text">
        <i class="book icon"></i>
        自主學習準備課
      </div>
      <i class="dropdown icon"></i>
      <div class="menu">
        <RouterLink class="item" to="/doc_teens">
          <i class="book icon"></i>
          青少年篇
        </RouterLink>
        <RouterLink class="item" to="/doc_parents">
          <i class="book icon"></i>
          家長篇
        </RouterLink>
        <RouterLink class="item" to="/doc_educators">
          <i class="book icon"></i>
          教師篇
        </RouterLink>
      </div>
    </div>

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
