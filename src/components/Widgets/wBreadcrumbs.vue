<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(el, index) in item.options" :key="index">
      <span v-if="!el.path">
        {{ el.title }}
      </span>
      <router-link v-else :to="el.path"> {{ el.title }} </router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>
