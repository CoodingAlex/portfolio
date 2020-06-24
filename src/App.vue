<template>
  <div>
    <NavBar />
    <Projects />
    <About />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import About from './components/About'

export default {
  name: 'app',
  components: {
    NavBar,
    Projects,
    About
  }
}
</script>
