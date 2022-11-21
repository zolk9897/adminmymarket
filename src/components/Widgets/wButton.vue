<template>
  <a-button
    :type="item.buttonType"
    :class="item.cssClass"
    :style="item.style"
    :disabled="item.disabled"
    :size="item.size"
    @click="callHandler(item.handlers)"
  >
    <template v-if="isIcon" #icon>
      <fa class="mr-2" :icon="item.icon.name" />
    </template>
    {{ item.value }}
  </a-button>
</template>
<script setup>
import { computed } from 'vue'
import { useGlobalJsonDataStore } from '../../stores/global-json.js'

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
