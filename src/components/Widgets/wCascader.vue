<template>
  <a-cascader
    v-model:value="store.sendData[pageName][item.name]"
    :options="item.options || externalOptions"
    :field-names="item.fieldNames"
    :placeholder="item.description ? item.description.substring(0, 40) : null"
    :style="item.style"
    :class="[item.cssClass, errors && 'error']"
    :size="item.size"
    :disabled="item.disabled"
    max-tag-count="responsive"
    :multiple="item.multiple"
    :expand-trigger="item.expandTrigger"
    :loading="loading"
    :not-found-content="loading ? undefined : null"
    @dropdown-visible-change="
      !!item.externalData ? getOptions($event) : undefined
    "
  >
    <template #notFoundContent>
      {{ loading ? 'Загрузка данных...' : 'Нет данных' }}
    </template>
  </a-cascader>
  <span
    v-if="item.subtitle"
    :style="item.subtitle.style"
    :class="item.subtitle.cssClass"
  >
    {{ item.subtitle.text }}
  </span>
</template>
<script setup>
import { computed, onBeforeMount, ref } from 'vue'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import { useApiStore } from '@/stores/api.js'

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
const externalOptions = ref([])
const loading = ref(false)

onBeforeMount(() => {
  //Default value
  store.sendData[props.pageName][props.item.name] = props.item.value || null
})

const getOptions = async (visible) => {
  if (visible && props.item.externalData && !externalOptions.value.length) {
    loading.value = true
    const API = useApiStore()
    externalOptions.value = await API.getCascaderOptions(
      props.item.externalData.endpoint
    )
    loading.value = false
  }
}
</script>

<style lang="scss">
.ant-select.error .ant-select-selector {
  border-color: var(--errorRed) !important;
}

.ant-select-focused.error {
  box-shadow: 0 0 2px var(--red) !important;
}
</style>
