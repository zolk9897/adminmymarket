<template>
  <div
    :style="item.style"
    :class="item.cssClass"
    @click.stop="callHandler(item.handler)"
  >
    <span v-if="item.title" class="mb-3 font-medium text-base">
      {{ item.title }}
    </span>

    <template v-for="(el, index) in item.fieldsData" :key="el.name + index">
      <WidgetSwitch :item="el" />
    </template>
  </div>
</template>

<script setup>
import WidgetSwitch from './WidgetSwitch.vue'
import { useGlobalJsonDataStore } from '../../stores/global-json'
const { callHandler } = useGlobalJsonDataStore()
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>
