<template>
  <router-link
    v-if="item.mode === 'router'"
    :to="item.link"
    :style="item.style"
    :class="item.cssClass"
  />
  <a v-else :href="item.link" :style="item.style" :class="item.cssClass">
    {{ item.text }}
  </a>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>
