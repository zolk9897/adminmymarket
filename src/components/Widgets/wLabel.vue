<template>
  <span :style="item.style" :class="item.cssClass"> {{ item.text }} </span>
</template>
<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

const value = ref()

onMounted(() => {
  if (props.item.value) value.value = props.item.value
})
</script>
