<template>
  <div class="container">
    <img src="../assets/logoJs.png" class="js__image" alt="" />
    <div class="deader__title">
      <span class="header__title__header">Hey I’m Alex</span><br />
      <span class="header__title__content"
        >Full stack developer <br />jr from mexico</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  padding: 0 50px;
  align-items: center;
  background-color: #191a1d;
  height: 100vh;
}
.js__image {
  width: 250px;
}
.header__title__content {
  font-size: 40px;
  font-family: 'Roboto', monospace;
  color: rgba(172, 172, 172, 0.904);
}
.header__title__header {
  font-size: 80px;
  font-family: 'Roboto Mono', monospace;
  color: white;
}
</style>
