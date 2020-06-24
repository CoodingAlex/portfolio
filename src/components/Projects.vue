<template>
  <div>
    <div class="container">
      <div class="projects__container">
        <div class="project__description">
          <h1>Proyecto</h1>
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
  </div>
</template>

<script>
export default {
  name: 'projects'
}
</script>

<style scoped>
.container {
  margin: 30px 50px;
  background: black;
}
.projects__container {
  display: flex;
  color: whitesmoke;
  justify-content: space-between;
}
.project__description {
  font-family: 'Roboto', sans-serif;
  margin: 30px;
}
.project__img {
  width: 300px;
  margin: 30px;
}
</style>
