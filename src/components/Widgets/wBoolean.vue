<template>
  <template v-if="item.viewType === 'switch'">
    <span v-if="item.labelBefore" class="mr-3">{{ item.label }}</span>
    <a-switch
      v-if="item.viewType === 'switch'"
      v-model:checked="sendData[pageName][item.name]"
      :disabled="item.disabled"
      :style="item.style"
      :class="item.cssClass"
      @change="change"
    />
    <span v-if="!item.labelBefore" class="ml-3">{{ item.label }}</span>
  </template>
  <a-checkbox-group
    v-if="item.viewType === 'groupСheckbox'"
    v-model:value="sendData[pageName][item.name]"
    :options="item.options"
    :style="item.style"
    :class="item.cssClass"
  />
  <a-checkbox
    v-if="item.viewType === 'checkbox'"
    v-model:checked="sendData[pageName][item.name]"
    :style="item.style"
    :class="item.cssClass"
  >
    {{ item.label }}
  </a-checkbox>
</template>
<script setup>
import { onMounted } from 'vue'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
const { callHandler } = useGlobalJsonDataStore()

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
const { sendData } = useGlobalJsonDataStore()
onMounted(() => {
  //Default value
  sendData[props.pageName][props.item.name] =
    props.item.viewType === 'groupСheckbox'
      ? props.item.value
      : !!props.item.value
})

const change = () => {
  const currentValue = sendData[props.pageName][props.item.name]
  const handlers = Array.isArray(props.item.handlers)
    ? props.item.handlers
    : props.item.handlers[`${currentValue}Handlers`]

  callHandler(handlers, currentValue)
}
</script>

<style scoped></style>
