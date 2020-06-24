<template>
  <div class="home">
    <nav-bar />
    <about />
    <projects />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import About from '../components/About'

export default {
  name: 'Home',
  components: {
    NavBar,
    Projects,
    About
  }
}
</script>

<style scoped>
.home {
  /* background-color: #0f1218; */
  /* background-color: #f4f6f9; */
  background-color: #ffffff;
}
</style>
