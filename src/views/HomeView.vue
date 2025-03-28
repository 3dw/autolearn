<script setup>

</script>

<template>
  <main class="ui container" style="position: relative;">
    <p>
      <router-link to="/about">
        <h1 id="slogan">自主學習 = 學習自主</h1>
        <img id="home" src="../assets/home.webp" alt="Home">
        <div class="click-indicator">
          <i class="huge circular hand point up outline icon"></i>
          <div class="indicator-text">點擊進入</div>
        </div>
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

.click-indicator {
  position: absolute;
  bottom: 15vh;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s infinite;
}

.indicator-text {
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
}

.icon {
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
