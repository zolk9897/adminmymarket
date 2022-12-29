<template>
  <div v-html="text" />
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  column: Object,
  widget: Object,
  data: Object,
  editData: Object,
  text: [String, Object],
})
</script>
