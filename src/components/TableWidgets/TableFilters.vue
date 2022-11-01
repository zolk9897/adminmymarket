<template>
  <template v-for="(column, index) in columns" :key="column.dataIndex + index">
    <template v-if="column.filterType">
      <a-input
        v-if="column.filterType === 'text'"
        v-model:value="filterField[column.dataIndex][0]"
        :placeholder="`${column.title}`"
        style="width: 188px"
        @press-enter="runFilter()"
      />
      <a-input
        v-if="column.filterType === 'number'"
        v-model:value="filterField[column.dataIndex][0]"
        :placeholder="`${column.title} от:`"
        style="width: 188px"
        @press-enter="runFilter()"
      />
      <a-input
        v-if="column.filterType === 'number'"
        v-model:value="filterField[column.dataIndex][1]"
        :placeholder="`${column.title} до:`"
        style="width: 188px"
        @press-enter="runFilter()"
      />

      <a-select
        v-if="column.filterType === 'category'"
        v-model:value="filterField[column.dataIndex][0]"
        :placeholder="`${column.title}`"
        style="width: 188px"
        allow-clear
        @change="runFilter()"
      >
        <a-select-option
          v-for="(el, index) in getCategoryFilterData(
            column.dataIndex,
            dataSource
          )"
          :key="el.id + index"
          :value="el.id"
        >
          {{ el.value }}
        </a-select-option>
      </a-select>

      <a-range-picker
        v-if="column.filterType === 'daterange'"
        v-model:value="filterField[column.dataIndex]"
        :show-time="false"
        format="DD.MM.YYYY"
        value-format="DD.MM.YYYY"
        :locale="locale"
        @change="runFilter()"
      />
      <a-select
        v-if="column.filterType === 'checkbox'"
        v-model:value="filterField[column.dataIndex][0]"
        allow-clear
        :placeholder="`${column.title}`"
        style="width: 188px"
        :options="checkboxFilterOptions"
        @change="runFilter()"
      />
    </template>
  </template>
  <a-button type="primary" @click="runFilter()">
    <template #icon>
      <fa icon="fa-solid fa-magnifying-glass" />
    </template>
  </a-button>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { getCategoryFilterData } from '../../utils/filters.js'
import locale from 'ant-design-vue/es/date-picker/locale/ru_RU'

const props = defineProps({
  columns: Array,
  filteredInfo: Object,
  dataSource: Array,
})

const checkboxFilterOptions = ref([
  { value: 'true', label: 'Да' },
  { value: 'false', label: 'Нет' },
])

const filterField = ref({})
const emits = defineEmits(['update:filteredInfo'])

onBeforeMount(() => {
  props.columns.forEach((column) => {
    if (column.filterType) {
      filterField.value[column.dataIndex] =
        column.filterType === 'number' || column.filterType === 'daterange'
          ? [null, null]
          : [null]
    }
  })
})

const runFilter = () => {
  emits('update:filteredInfo', JSON.parse(JSON.stringify(filterField.value)))
}
</script>
<style lang="scss" scoped>
input {
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  height: 40px;
}
button {
  height: 40px;
  width: 40px;
}
.ant-select {
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  height: 40px;
}

.ant-select ::v-deep(.ant-select-selector) {
  border-radius: 2px;
  height: 40px;
  border-bottom: 1px solid #d9d9d9;
}

.ant-select ::v-deep(.ant-select-selection-placeholder) {
  padding: 4px 0;
}

.ant-select ::v-deep(.ant-select-selection-item) {
  padding: 4px 0;
}

.ant-picker {
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  height: 40px !important;
}
</style>
