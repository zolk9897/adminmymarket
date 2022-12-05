<template>
  <a-button
    :type="item.buttonType"
    :class="item.cssClass"
    :style="item.style"
    :disabled="item.disabled"
    :size="item.size"
    :ghost="item.ghost"
    :loading="loading"
    @click="callHandlers()"
  >
    <template #icon>
      <fa v-if="item.icon" class="mr-2" :icon="item.icon.name" />
    </template>
    {{ item.value }}
  </a-button>
</template>
<script setup>
import { useGlobalJsonDataStore } from '../../stores/global-json.js'
import { ref } from 'vue'

const { callHandler } = useGlobalJsonDataStore()

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

const loading = ref(false)
const callHandlers = async () => {
  if (props.item.showLoading) loading.value = true
  await callHandler(props.item.handlers)
  loading.value = false
}
</script>
