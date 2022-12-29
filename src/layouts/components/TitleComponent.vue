<template>
  <div class="flex items-center h-full w-full">
    <fa v-if="item.icon" :icon="item.icon" class="mr-2" />
    <span v-if="showTitle"> {{ item.title }}</span>
  </div>
</template>

<script setup>
import { useConfigStore } from '@/stores/config.js'
import { computed } from 'vue'
const props = defineProps({
  item: Object,
  titleNotCollapsed: Boolean,
})

const configStore = useConfigStore()

const showTitle = computed(() => {
  if (configStore.collapsedMenu) {
    if (props.titleNotCollapsed) return true
    return false
  }
  return true
})
</script>

<style scoped></style>
