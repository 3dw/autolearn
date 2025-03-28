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
    <div class="ui simple dropdown item thin-only" @click="toggleDropdown" ref="dropdown">
      <div class="text">
        <i class="book icon"></i>
        自主學習準備課
      </div>
      <i class="dropdown icon"></i>
      <div class="menu" :class="{ 'visible': isDropdownOpen }">
        <RouterLink class="item" to="/doc_teens" @click="closeDropdown">
          <i class="book icon"></i>
          青少年篇
        </RouterLink>
        <RouterLink class="item" to="/doc_parents" @click="closeDropdown">
          <i class="book icon"></i>
          家長篇
        </RouterLink>
        <RouterLink class="item" to="/doc_educators" @click="closeDropdown">
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
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isDropdownOpen = ref(false)
const dropdown = ref(null)

// 添加全局導航守衛，在每次路由切換後捲動到頁面頂部
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

// 切換下拉選單的開關狀態
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// 關閉下拉選單
const closeDropdown = () => {
  isDropdownOpen.value = false
}

// 點擊外部區域時關閉下拉選單
onMounted(() => {
  document.addEventListener('click', (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target) && isDropdownOpen.value) {
      isDropdownOpen.value = false
    }
  })
})
</script>

<style scoped>
.ui.dropdown .menu.visible {
  display: block !important;
  visibility: visible !important;
}

/* 確保在觸控設備上有更好的點擊區域 */
.ui.dropdown.item {
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

/* 增加觸控區域的大小 */
.ui.dropdown .item {
  padding: 12px 16px !important;
}
</style>
