<template>
  <router-view />
</template>
<script setup>
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import 'dayjs/locale/ru'
import { onMounted } from 'vue'

const { getMainJson } = useGlobalJsonDataStore()

onMounted(() => {
  getMainJson()
})
</script>

<style scoped></style>
