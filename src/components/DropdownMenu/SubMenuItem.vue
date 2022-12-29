<template>
  <a-sub-menu :key="item.name">
    <template #title>
      {{ item.title }}
    </template>
    <div v-for="el in item.subMenu" :key="el.name">
      <a-menu-item v-if="!el.subMenu" :key="el.name" @click="menuClick(el)">
        <span>
          {{ el.title }}
        </span>
      </a-menu-item>
      <SubMenuItem v-else :item="el" :handlers="handlers" />
    </div>
  </a-sub-menu>
</template>

<script setup>
import { useGlobalJsonDataStore } from '@/stores/global-json.js'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  handlers: {
    type: Array,
    default: () => [],
  },
})
const { callHandler } = useGlobalJsonDataStore()

const menuClick = (value) => {
  callHandler(props.handlers, value.value)
}
</script>

<style scoped></style>
