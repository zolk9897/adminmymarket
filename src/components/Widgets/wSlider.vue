<template>
  <a-slider
    v-model:value="sendData[pageName][item.name]"
    :style="item.style"
    :class="item.cssClass"
  />
</template>

<script setup>
import { onMounted } from 'vue'
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
  sendData[props.pageName][props.item.name] = props.item.value || null
})
</script>
