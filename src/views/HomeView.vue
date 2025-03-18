<script setup>

</script>

<template>
  <main class="ui container" style="position: relative;">
    <p>
      <router-link to="/about">
        <h1 id="slogan">自主學習 = 學習自主</h1>
        <img id ="home" src="../assets/home.webp" alt="Home">
      </router-link>
    </p>
  </main>
</template>

<style scoped>
#slogan {
  text-align: center;
  font-size: 2em;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  position: absolute;
  top: 45vh;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
#home {
  width: 100%;
  height: calc(100vh - 70px);
  object-fit: cover;
}
</style>
