<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(10)
</script>

<template>
  <div><button @click="count++">{{count}} - {{msg}}</button></div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

button {
  background-color: #4e4;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
