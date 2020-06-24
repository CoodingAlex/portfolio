<template>
  <div class="container">
    <img src="../assets/logoJs.png" class="js__image" alt="" />
    <span class="header__title"
      >Cooding <br />
      Alex</span
    >
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
  background-color: black;
  height: 400px;
}
.js__image {
  width: 250px;
}
.header__title {
  font-size: 90px;
  font-family: 'Roboto Mono', monospace;
  color: white;
}
</style>
