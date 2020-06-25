<template>
  <div class="about">
    <div></div>
    <div class="container">
      <div class="about__text">
        <h1 class="about__text__title">
          About Me
          <hr />
        </h1>

        <span class="about__text__content">{{ aboutContent }}</span>
      </div>
      <div class="about__img__container">
        <img
          src="https://res.cloudinary.com/dcoxmw8gn/image/upload/v1593036511/mi_cara_editada_ibtej4.png"
          class="about__img"
          alt=""
        />
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { getAbout } from '../api'
export default {
  name: 'about',
  data() {
    return {
      aboutContent: ''
    }
  },
  methods: {
    async getAboutContent() {
      const { data } = await getAbout()
      this.aboutContent = data
    }
  },
  created() {
    this.getAboutContent()
  }
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
