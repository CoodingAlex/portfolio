<template>
  <div class="home">
    <nav-bar />
    <about />
    <projects />
    <contact-me/>
    <footer-bar/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import About from '../components/About'
import ContactMe from '../components/Contact-Me'
import FooterBar from '../components/Footer-Bar'

export default {
  name: 'Home',
  components: {
    NavBar,
    Projects,
    About,
    ContactMe,
    FooterBar
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
