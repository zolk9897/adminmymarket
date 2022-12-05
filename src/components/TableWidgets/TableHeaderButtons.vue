<template>
  <div v-for="(btn, btnIndex) in item.config.buttons" :key="btn + btnIndex">
    <a-button
      :type="btn.type"
      :class="btn.cssClass"
      :style="btn.style"
      :disabled="btn.disabled"
      :size="btn.size"
      :loading="loading"
      @click="callHandlers(btn)"
    >
      <template #icon>
        <fa v-if="item.icon" class="mr-2" :icon="item.icon.name" />
      </template>
      {{ btn.label }}
    </a-button>
  </div>
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
const callHandlers = async (btn) => {
  if (btn.showLoading) loading.value = true
  await callHandler(btn.handlers)
  loading.value = false
}
</script>
<style lang="scss" scoped></style>
