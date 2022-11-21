<template>
  <a-textarea
    v-model:value="store.sendData[pageName][item.name]"
    :auto-size="{ minRows: minRows, maxRows: maxRows }"
    :placeholder="item.description"
    allow-clear
    :style="item.style"
    :class="[item.cssClass, errors && 'error']"
  />
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
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

const minRows = ref(2)
const maxRows = ref(5)

const store = useGlobalJsonDataStore()

const errors = computed(() => store.validationErrors[props.item.name])

onMounted(() => {
  if (props.item.minRows) minRows.value = props.item.minRows
  if (props.item.maxRows) maxRows.value = props.item.maxRows

  //Default value
  store.sendData[props.pageName][props.item.name] = props.item.value || ''
})
</script>

<style lang="scss">
.ant-input.error {
  border-color: var(--errorRed) !important;
}

.ant-input:hover.error {
  box-shadow: 0 0 2px var(--red) !important;
}
</style>
