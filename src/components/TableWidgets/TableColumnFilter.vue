<template>
  <div style="padding: 8px">
    <a-input
      v-if="column.filterType === 'text'"
      ref="searchInput"
      v-model:value="filterField[column.dataIndex][0]"
      :placeholder="column.filterTitle || 'Поиск'"
      style="width: 188px; margin-bottom: 8px; display: block"
      @change="(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])"
      @press-enter="handleSearch(confirm)"
    />
    <div class="flex justify-between items-center gap-2">
      <a-input
        v-if="column.filterType === 'number'"
        ref="fromInput"
        v-model:value="filterField[column.dataIndex][0]"
        v-mask="'#############'"
        placeholder="от:"
        :value="selectedKeys[0]"
        style="width: 92px; margin-bottom: 8px; display: block"
        @press-enter="handleSearch(confirm)"
      />

      <a-input
        v-if="column.filterType === 'number'"
        v-model:value="filterField[column.dataIndex][1]"
        v-mask="'#############'"
        placeholder="до:"
        :value="selectedKeys[1]"
        style="width: 92px; margin-bottom: 8px; display: block"
        @press-enter="handleSearch(confirm)"
      />
    </div>
    <a-select
      v-if="column.filterType === 'category' || column.filterType === 'select'"
      ref="selectInput"
      v-model:value="filterField[column.dataIndex][0]"
      :placeholder="column.filterTitle || column.title"
      style="width: 188px; margin-bottom: 8px; display: block"
      allow-clear
      max-tag-count="responsive"
      :mode="column.filterMultiple ? 'multiple' : null"
      @change="handleSearch(null)"
    >
      <a-select-option
        v-for="(el, index2) in column.widget.params"
        :key="el.id + index2"
        :value="el.id"
      >
        {{ el.value }}
      </a-select-option>
      <a-select-option v-if="column.filterType === 'select'" value="Не указано">
        Не указано
      </a-select-option>

      <template #suffixIcon>
        <fa
          v-if="column.filterIcon"
          :icon="column.filterIcon"
          style="color: #a9a8a8"
        />
      </template>
    </a-select>
    <div
      v-if="!['category', 'select'].includes(column.filterType)"
      class="flex justify-between items-center gap-2"
    >
      <a-button
        type="primary"
        size="small"
        class="w-1/2"
        @click="handleSearch(confirm)"
      >
        <template #icon><SearchOutlined /></template>
        Поиск
      </a-button>
      <a-button
        size="small"
        class="w-1/2"
        @click="handleReset(clearFilers, confirm, column.dataIndex)"
      >
        Сбросить
      </a-button>
    </div>
    <a-button
      v-else
      size="small"
      style="width: 188px"
      @click="handleReset(clearFilers, confirm, column.dataIndex)"
    >
      Сбросить
    </a-button>
  </div>
</template>

<script setup>
import { computed, ref, watch, toRefs, onBeforeMount } from 'vue'
import { SearchOutlined } from '@ant-design/icons-vue'
import { VueMaskDirective } from 'v-mask'
import { getFormattedFilterData } from '@/utils/filters.js'

const props = defineProps({
  filteredInfo: Object,
  column: Object,
  columns: Array,
  selectedKeys: Array,
  setSelectedKeys: Function,
  confirm: Function,
  clearFilers: Function,
  columnFilterFocus: Boolean,
})
const emits = defineEmits(['update:filteredInfo'])

const vMask = {
  beforeMount: VueMaskDirective.bind,
  updated: VueMaskDirective.componentUpdated,
  unmounted: VueMaskDirective.unbind,
}
const filterField = ref({})
const searchInput = ref()
const selectInput = ref()
const fromInput = ref()

const { columnFilterFocus, column } = toRefs(props)

const filterInfo = computed({
  get() {
    return props.filteredInfo
  },
  set(newValue) {
    emits('update:filteredInfo', newValue)
  },
})

const handleSearch = (confirm) => {
  if (confirm) confirm()
  filterInfo.value = getFormattedFilterData(filterField.value)
}

const handleReset = (clearFilters, confirm, dataIndex) => {
  filterInfo.value[dataIndex] = []
  filterField.value[dataIndex] = []
  clearFilters({ confirm: true })
  confirm()
}

watch(
  columnFilterFocus,
  (value) => {
    if (value) {
      setTimeout(() => {
        if (searchInput.value) searchInput.value.focus()
        if (fromInput.value) fromInput.value.focus()
        if (selectInput.value) selectInput.value.focus()
      }, 100)
    }
  },
  { immediate: true }
)

onBeforeMount(() => {
  props.columns.forEach((column) => {
    if (column.filterType) filterField.value[column.dataIndex] = []
  })
})
</script>
