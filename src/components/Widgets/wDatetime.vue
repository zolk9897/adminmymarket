<template>
  <a-date-picker
    v-if="!item.range"
    v-model:value="sendData[pageName][item.name]"
    :mode="item.mode"
    :show-time="item.time"
    :format="item.displayFormat"
    :value-format="item.format"
    :locale="locale"
    :style="item.style"
    :class="item.cssClass"
  />
  <a-range-picker
    v-else
    v-model:value="sendData[pageName][item.name]"
    :show-time="item.time"
    :format="item.displayFormat"
    :value-format="item.format"
    :locale="locale"
    :style="item.style"
    :class="item.cssClass"
  />
</template>
<script setup>
import { onMounted } from 'vue'
import locale from 'ant-design-vue/es/date-picker/locale/ru_RU'
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

const { sendData } = useGlobalJsonDataStore()

onMounted(() => {
  //Default value
  sendData[props.pageName][props.item.name] = null
})
</script>

<style scoped></style>
