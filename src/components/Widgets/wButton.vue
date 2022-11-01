<template>
  <a-button
    :type="item.buttonType"
    :class="item.cssClass"
    :style="item.style"
    :disabled="item.disabled"
    :size="item.size"
    @click="callHandler(item.handler)"
  >
    <template v-if="isIcon" #icon>
      <component :is="antIcons[item.icon.name]" :style="item.icon.style" />
    </template>
    {{ item.value }}
  </a-button>
</template>
<script setup>
import { computed } from 'vue'
import { useGlobalJsonDataStore } from '../../stores/global-json.js'
import * as antIcons from '@ant-design/icons-vue'
const { callHandler } = useGlobalJsonDataStore()

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

const isIcon = computed(
  () => props.item.icon && Object.keys(props.item.icon).length > 0
)
</script>
