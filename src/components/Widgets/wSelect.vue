<template>
  <a-select
    v-model:value="store.sendData[pageName][item.name]"
    :mode="item.mode"
    :placeholder="item.description ? item.description.substring(0, 40) : null"
    :style="item.style"
    :class="[item.cssClass, errors && 'error']"
    :size="item.size"
    :disabled="item.disabled"
    not-found-content="Нет данных"
    allow-clear
  >
    <a-select-option
      v-for="(el, index) in item.options"
      :key="el.id + index"
      :value="el.id"
    >
      {{ el.name }}
    </a-select-option>
  </a-select>
  <span
    v-if="item.subtitle"
    :style="item.subtitle.style"
    :class="item.subtitle.cssClass"
  >
    {{ item.subtitle.text }}
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

const store = useGlobalJsonDataStore()
const errors = computed(() => store.validationErrors[props.item.name])

onMounted(() => {
  //Default value
  store.sendData[props.pageName][props.item.name] = props.item.value || null
})
</script>

<style lang="scss">
.ant-select.error .ant-select-selector {
  border-color: var(--errorRed) !important;
}

.ant-select-focused.error {
  box-shadow: 0 0 2px var(--red) !important;
}
</style>
