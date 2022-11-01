<template>
  <a-timeline>
    <a-timeline-item
      v-for="(timeLineItem, index) in item.items"
      :key="timeLineItem.date + index"
    >
      {{ timeLineItem.date }} {{ timeLineItem.action }}
    </a-timeline-item>
  </a-timeline>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>
