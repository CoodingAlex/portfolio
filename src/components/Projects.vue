<template>
  <div class="container">
    <div class="title__projects">
      <h1>
        Projects
        <hr />
      </h1>
    </div>
    <div
      v-for="p in projects"
      :key="p.id"
      :class="p.left ? 'project__container left' : 'project__container right'"
    >
      <div class="project__description">
        <h1 class="project__description__title">{{ p.title }}</h1>
        <span>{{ p.content }}</span>
      </div>
      <div class="project__img__container">
        <img :src="p.img" class="project__img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Projects from '../projectsMocks'
export default {
  name: 'projects',
  data() {
    return {
      projects: []
    }
  },
  methods: {
    async getProjects() {
      const data = await Projects
      let bool = false
      this.projects = data.map(p => {
        bool = !bool
        return { ...p, left: !bool }
      })
    }
  },
  created() {
    this.getProjects()
  }
}
</script>

<style scoped>
.title__projects {
  font-size: 35px;
  color: #13152c;
}
.title__projects h1 {
  font-size: 35px;
}
hr {
  border: 2px solid #f6f6f6;
}
.project__description__title {
  color: #13152c;
}
.container {
  font-family: 'Merriweather', serif;
  margin: 50px 90px;
  color: #5e5e5e;
  background-color: #ffffff;
}

.left {
  flex-direction: row;
}

.right {
  flex-direction: row-reverse;
}

.project__container {
  display: flex;
  margin: 100px 0;
  justify-content: space-between;
  grid-column: 2;
  color: #5e5e5e;
  justify-content: space-between;
}
.project__description {
  margin: 30px;
}
.project__img__container {
  background-color: #f1f1f1;
  border-radius: 5px;
}
.project__img {
  width: 300px;
  margin: 30px;
}
</style>
