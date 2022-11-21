<template>
  <div v-if="tooltip" class="flex items-center">
    <span
      v-if="tooltip.showIcon && tooltip.positionIcon === 'left'"
      class="mr-1"
      :style="item.style"
      :class="item.cssClass"
    >
      {{ item.text }}
    </span>
    <a-tooltip
      v-if="tooltip.showIcon"
      :trigger="tooltip.trigger"
      :color="tooltip.color"
      :placement="tooltip.position"
    >
      <template #title>
        <span>{{ tooltip.text }}</span>
      </template>
      <fa :icon="tooltip.icon" />
    </a-tooltip>
    <a-tooltip
      v-else
      :trigger="tooltip.trigger"
      :color="tooltip.color"
      :placement="tooltip.position"
    >
      <template #title>
        <span>{{ tooltip.text }}</span>
      </template>
      <span :style="item.style" :class="item.cssClass">
        {{ item.text }}
      </span>
    </a-tooltip>
    <span
      v-if="tooltip.showIcon && tooltip.positionIcon === 'right'"
      class="ml-1"
      :style="item.style"
      :class="item.cssClass"
    >
      {{ item.text }}
    </span>
  </div>
  <span v-else :style="item.style" :class="item.cssClass">
    {{ item.externalValue ? store.sendData[pageName][item.name] : item.text }}
  </span>
</template>
<script setup>
import { computed, onMounted } from 'vue'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  pageName: {
    type: String,
    required: true,
  },
})
const tooltip = computed(() => props.item.showTooltip)

const store = useGlobalJsonDataStore()

onMounted(() => {
  //Default value
  if (props.item.externalValue) {
    store.sendData[props.pageName][props.item.name] = props.item.text || ''
  }
})
</script>
