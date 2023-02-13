<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="message">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: ''
    }
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post('http://localhost:4000/api/message', { message: this.message });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>
