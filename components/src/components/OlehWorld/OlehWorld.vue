<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(2)
function incCount() {
  count.value++;
}
</script>

<template>
  <div><button class="foo" @click="incCount">{{count}}</button></div>
</template>

<style scoped>
a {
  color: #42b983;
}
.foo {
  background-color: red;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
