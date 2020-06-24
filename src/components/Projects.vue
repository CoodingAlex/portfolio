<template>
  <div class="container">
    <div class="title__projects">
      <h1>
        My projects
        <hr />
      </h1>
    </div>
    <div class="projects__container">
      <div class="project__description">
        <h1 class="project__description__title">Proyecto</h1>
        <span
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          labore quam quibusdam officia reprehenderit optio non, odio minima,
          ipsa suscipit doloremque temporibus quis molestias, tenetur sint
          sapiente ducimus beatae corrupti.</span
        >
      </div>
      <div class="project__img__container">
        <img src="../assets/logoJs.png" class="project__img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// import Projects from '../projectsMocks'
export default {
  name: 'projects',
  data() {
    return {
      projects: []
    }
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
.projects__container {
  display: flex;
  justify-content: space-between;
  /* grid-template-columns: 2fr 1fr; */
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
