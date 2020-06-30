<template>
  <section class="contact-me">
    <div class="contact-me-form">
      <h1>Contact Me!</h1>

      <b-field>
        <b-input
          v-model="formData.email"
          placeholder="Email"
          type="email"
        ></b-input>
      </b-field>
      <b-field>
        <b-input
          placeholder="Number"
          v-model="formData.number"
          type="number"
          min="10"
        >
        </b-input>
      </b-field>

      <b-field>
        <b-input
          placeholder="Name"
          v-model="formData.name"
          type="text"
          required
          pattern="[a-z]*"
        >
        </b-input>
      </b-field>

      <b-field>
        <b-input
          type="textarea"
          minlength="10"
          maxlength="100"
          placeholder="Maxlength automatically counts characters"
          v-model="formData.text"
        >
        </b-input>
      </b-field>
      <div class="buttons">
        <b-button type="is-primary" v-if="!loading && !error.exists" @click="sendData" expanded
          >Send It!</b-button
        >
        <b-button
          type="is-primary"
          v-if="loading && !error.exists"
          @click="sendData"
          expanded
          loading
          >Send It!</b-button
        >
        <b-button
          type="is-danger"
          v-if="error.exists"
          @click="sendData"
          expanded
          >{{error.message}}</b-button
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactMe',
  data() {
    return {
      formData: {
        email: '',
        number: '',
        name: '',
        text: ''
      },
      loading: false,
      error: {
        exists: false,
        message: ''
      }
    }
  },
  methods: {
    async sendData() {
      this.loading = true
      const data = {
        ...this.formData
      }
      try {
        await this.dataValidator(data)
        this.error.exists = false
        this.error.message = ''
      } catch (err) {
        this.error.exists = true
        this.error.message = err.message
      }

      console.log(data)
      this.loading = false
    },
    async dataValidator(data) {
      for (const prop in data) {
        if (data[prop] === '') {
          throw new Error('Complete all the fields')
        }
      }
      return data
    }

  }

}
</script>

<style scoped>
.contact-me {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
h1 {
  font-size: 2em;
}
.contact-me-form {
  grid-column: 2;
}
</style>
