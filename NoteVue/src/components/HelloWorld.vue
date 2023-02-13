<script setup>
import { ref } from 'vue'
</script>
<template>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <div v-for="n in numberofcpn" :key="n">
    <p>this is the {{ n }} th component
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numberofcpn: 1,
      count: 0
    }
  },
  updated() {
    let n = 1
    console.log(n++)
  }
}
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
