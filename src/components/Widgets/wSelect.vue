<template>
  <a-select
    v-model:value="store.sendData[pageName][item.name]"
    :mode="item.mode"
    :placeholder="item.description ? item.description.substring(0, 40) : null"
    :style="item.style"
    :class="[item.cssClass, errors && 'error']"
    :size="item.size"
    :disabled="item.disabled"
    allow-clear
    :show-arrow="item.showArrow"
    :loading="loading"
    max-tag-count="responsive"
    :filter-option="false"
    :not-found-content="loading ? undefined : null"
    @dropdown-visible-change="
      !!item.externalData ? getOptions($event) : undefined
    "
    @search="!!item.search ? search($event) : undefined"
  >
    <template #notFoundContent>
      {{ loading ? 'Загрузка данных...' : 'Нет данных' }}
    </template>
    <template v-if="item.externalData || item.search">
      <a-select-option
        v-for="(el, index) in externalOptions"
        :key="el.id + index"
        :value="el[item.externalData?.value || item.search?.value || 'id']"
      >
        {{ el[item.externalData?.title || item.search?.title || 'title'] }}
      </a-select-option>
    </template>
    <template v-else>
      <a-select-option
        v-for="(el, index) in item.options"
        :key="el.id + index"
        :value="el.id"
      >
        {{ el.name }}
      </a-select-option>
    </template>
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
import { computed, onBeforeMount, ref } from 'vue'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import { useApiStore } from '@/stores/api.js'
import { debounce } from 'lodash-es'

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

const getOptions = async () => {
  if (props.item.externalData && !externalOptions.value.length) {
    loading.value = true
    const API = useApiStore()
    externalOptions.value = await API.getSelectOptions(
      props.item.externalData.endpoint
    )
    loading.value = false
  }
}
const search = debounce(async (value) => {
  const length = props.item.search.minLength || 2
  if (length <= value.length) {
    loading.value = true
    const API = useApiStore()
    externalOptions.value = await API.getSelectOptionsFromSearch(
      props.item.search.endpoint,
      value
    )
    loading.value = false
  }
}, 500)
</script>

<style lang="scss">
.ant-select.error .ant-select-selector {
  border-color: var(--errorRed) !important;
}

.ant-select-focused.error {
  box-shadow: 0 0 2px var(--red) !important;
}
</style>
