<template>
  <div>
    <nav-bar />
    <projects />
    <about />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import About from '../components/About'

export default {
  name: 'main',
  components: {
    NavBar,
    Projects,
    About
  }
}
</script>
