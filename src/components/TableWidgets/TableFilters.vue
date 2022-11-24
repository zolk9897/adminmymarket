<template>
  <template v-if="searchConfig">
    <div class="flex gap-2 pb-2">
      <a-input-search
        v-model:value="searchInput"
        placeholder="Поиск"
        :class="
          searchFields.length > 0 && searchConfig.selected
            ? 'short-search'
            : 'long-search'
        "
        @search="runSearch()"
      />
      <a-select
        v-if="searchFields.length > 0 && searchConfig.selected"
        v-model:value="searchField"
        style="width: 188px"
        :field-names="{ label: 'label', value: 'id' }"
        :options="searchFields"
        @change="runSearch()"
      >
      </a-select>
    </div>
  </template>
  <div v-if="haveFilter" class="filters flex flex-wrap gap-2">
    <template
      v-for="(column, index) in columns"
      :key="column.dataIndex + index"
    >
      <template v-if="column.filterType">
        <a-input
          v-if="column.filterType === 'text'"
          v-model:value="filterField[column.dataIndex][0]"
          :placeholder="`${column.title}`"
          style="width: 188px"
          :size="config.filterSize || 'large'"
          @press-enter="runFilter()"
        />
        <a-input
          v-if="column.filterType === 'number'"
          v-model:value="filterField[column.dataIndex][0]"
          :placeholder="`${column.title} от:`"
          style="width: 188px"
          :size="config.filterSize || 'large'"
          @press-enter="runFilter()"
        />
        <a-input
          v-if="column.filterType === 'number'"
          v-model:value="filterField[column.dataIndex][1]"
          :placeholder="`${column.title} до:`"
          style="width: 188px"
          :size="config.filterSize || 'large'"
          @press-enter="runFilter()"
        />

        <a-select
          v-if="
            column.filterType === 'category' || column.filterType === 'select'
          "
          v-model:value="filterField[column.dataIndex][0]"
          :placeholder="`${column.title}`"
          style="width: 188px"
          allow-clear
          :size="config.filterSize || 'large'"
          @change="runFilter()"
        >
          <a-select-option
            v-for="(el, index2) in column.widget.params"
            :key="el.id + index2"
            :value="el.id"
          >
            {{ el.value }}
          </a-select-option>
          <a-select-option
            v-if="column.filterType === 'select'"
            value="Не указано"
          >
            Не указано
          </a-select-option>
        </a-select>

        <a-range-picker
          v-if="column.filterType === 'daterange'"
          v-model:value="filterField[column.dataIndex]"
          :show-time="false"
          format="DD.MM.YYYY"
          value-format="DD.MM.YYYY"
          :locale="locale"
          style="width: 384.5px"
          :size="config.filterSize || 'large'"
          @change="runFilter()"
        />
        <a-select
          v-if="column.filterType === 'checkbox'"
          v-model:value="filterField[column.dataIndex][0]"
          allow-clear
          :placeholder="`${column.title}`"
          style="width: 188px"
          :size="config.filterSize || 'large'"
          :options="checkboxFilterOptions"
          @change="runFilter()"
        />
      </template>
    </template>

    <a-button
      :class="config.filterSize || 'large'"
      type="primary"
      @click="runFilter()"
    >
      <template #icon>
        <fa icon="fa-solid fa-magnifying-glass" />
      </template>
    </a-button>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from 'vue'
import locale from 'ant-design-vue/es/date-picker/locale/ru_RU'

const props = defineProps({
  columns: Array,
  filteredInfo: Object,
  dataSource: Array,
  config: Object,
  searchData: Object,
  haveFilter: Boolean,
})

const searchInput = ref('')
const searchConfig = ref(props.config.search)
const searchField = ref(0)
const searchFields = ref(
  searchConfig.value?.fields?.map((item, index) => {
    const column = props.columns.find((column) => column.dataIndex === item)
    return {
      label: column.title,
      id: index,
      dataIndex: item,
    }
  })
)

const checkboxFilterOptions = ref([
  { value: 'true', label: 'Да' },
  { value: 'false', label: 'Нет' },
])

const filterField = ref({})
const emits = defineEmits(['update:filteredInfo', 'update:searchData'])

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
  const formattedFilterData = getFormattedFilterData()
  emits('update:filteredInfo', JSON.parse(JSON.stringify(formattedFilterData)))
}
const runSearch = () => {
  emits('update:searchData', {
    text: searchInput.value,
    field: searchConfig.value.fields[searchField.value],
  })
}
const getFormattedFilterData = () => {
  const filterData = Object.assign({}, filterField.value)
  for (var key in filterData) {
    if (filterData[key]) {
      if (filterData[key].length === 2) {
        if (!filterData[key][0] && !filterData[key][1]) filterData[key] = null
      } else {
        if (
          filterData[key][0] === null ||
          filterData[key][0] === '' ||
          filterData[key][0] === undefined
        ) {
          filterData[key] = null
        }
      }
    }
  }
  return filterData
}
</script>
<style lang="scss" scoped>
::v-deep(.ant-input) {
  border-radius: 4px;
}
::v-deep(.ant-btn) {
  border-radius: 0px 4px 4px 0 !important;
}
::v-deep(.ant-select-selector) {
  border-radius: 4px !important;
}
.short-search {
  width: 200px;
}
.long-search {
  width: 400px;
}
.filters {
  .ant-btn {
    border-radius: 4px !important;
  }
  input {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
  }
  .ant-input-group-wrapper {
    :v-deep(.ant-input) {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
    }
  }

  .small {
    height: 25.6px;
    width: 25.6px;

    .svg-inline--fa {
      vertical-align: 0.1em;
    }
  }
  .large {
    height: 40px;
    width: 40px;
  }

  .ant-select {
    border-top: 1px solid #d9d9d9 !important;
    border-left: 1px solid #d9d9d9 !important;
    border-right: 1px solid #d9d9d9 !important;
    border-radius: 4px !important;
  }

  .ant-select ::v-deep(.ant-select-selector) {
    border-radius: 4px !important;
    border-bottom: 1px solid #d9d9d9 !important;
  }

  .ant-picker {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
  }
}
</style>
