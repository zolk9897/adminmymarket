<template>
  <router-view />
</template>
<script setup>
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import { onMounted } from 'vue'

const { getMainJson } = useGlobalJsonDataStore()

onMounted(() => {
  getMainJson()
})
</script>

<style scoped></style>
