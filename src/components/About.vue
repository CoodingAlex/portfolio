<template>
  <div class="about">
    <div class="container">
      <div class="about__text">
        <h1 class="about__text__title">About Me</h1>
        <span class="about__text__content"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          iste ipsa nisi nam delectus ab dolorem exercitationem repudiandae
          autem similique. Maxime quos necessitatibus assumenda deleniti
          dignissimos, esse doloremque consequuntur dicta!Repellendus aspernatur
          repellat perspiciatis vel, iure quod. Aperiam quos iste, modi hic
          aliquid sapiente, fugit totam quia nesciunt, officia exercitationem
          pariatur sunt dolore nostrum molestias dolor architecto at expedita
          sit.</span
        >
      </div>
      <div class="about__img__container">
        <img src="../assets/mi_cara.png" class="about__img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
.about {
  animation-name: about-entry;
  animation-duration: 1s;
}
.container {
  display: flex;
  justify-content: space-between;
  background-color: #171a23;
  margin: 30px 50px;
  color: whitesmoke;
  box-shadow: #44bb81 0px 0px 10px;
}

@keyframes about-entry {
  from {
    margin-right: 900px;
  }
  to {
    margin-right: initial;
  }
}

.about__text {
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  margin: 30px;
}
.about__img {
  width: 500px;
}

.about__text__content {
  font-size: 20px;
}
.about__text__title {
  font-size: 35px;
  color: #44bb81;
}
</style>
