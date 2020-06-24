<template>
  <div class="about">
    <div></div>
    <div class="container">
      <div class="about__text">
        <h1 class="about__text__title">
          About Me
          <hr />
        </h1>

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
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
hr {
  border: 2px solid #f6f6f6;
}

.about {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
.container {
  margin: 150px 0;
  border-radius: 2px;
  background-color: #ffffff;
  color: #5e5e5e;
}

.about__text {
  display: flex;
  flex-direction: column;
  font-family: 'Merriweather', serif;
  margin: 30px;
}
.about__img {
  width: 500px;
}

.about__text__content {
  font-size: 15px;
  line-height: 30px;
}
.about__text__title {
  font-size: 35px;
  color: #13152c;
}
</style>
