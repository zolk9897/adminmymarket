<template>
  <div
    v-if="haveFilter || (searchConfig && item.config.buttons)"
    class="flex items-center justify-between flex-wrap pb-6"
  >
    <TableFilters
      v-model:filteredInfo="filteredInfo"
      v-model:search-data="searchData"
      :columns="columns"
      :data-source="dataSource"
      :config="item.config"
      :have-filter="haveFilter"
    />
    <TableHeaderButtons v-if="item.config.buttons" :item="item" />
  </div>
  <a-config-provider :locale="ru_RU">
    <hr v-if="haveFilter" class="pb-6" />
    <a-table
      :loading="loading"
      :class="item.cssClass"
      :columns="columns.filter((col) => !col.hide)"
      :data-source="searchedDataSource ? searchedDataSource : dataSource"
      :bordered="item.config.bordered"
      :sticky="item.config.sticky"
      :align="item.config.align"
      :pagination="item.config.pagination"
      :row-selection="rowSelection"
      :size="item.config.size"
      @resize-column="handleResizeColumn"
    >
      <template #bodyCell="{ column, text, record }">
        <template v-if="column.widget.name === 'link'">
          <TableLink
            v-model:editData="editableData"
            :item="record"
            :widget="column.widget"
            :text="text"
            :column="column"
          />
        </template>
        <template v-if="column.widget.name === 'tags'">
          <TableTags
            v-model:editData="editableData"
            :item="record"
            :widget="column.widget"
            :column="column"
            :text="text"
          />
        </template>

        <template v-if="column.widget.name === 'checkbox'">
          <TableCheckbox
            v-model:editData="editableData"
            :item="record"
            :column="column"
            :text="text"
            :set-data="setData"
            @change="
              store.callHandler(column.changeHandlers, null, {
                key: column.key,
                rowItem: record,
              })
            "
          />
        </template>

        <template v-if="column.widget.name === 'text'">
          <TableText
            v-model:editData="editableData"
            :widget="column.widget"
            :item="record"
            :column="column"
            :text="text"
          />
        </template>

        <template v-if="column.widget.name === 'date'">
          <TableDate
            v-model:editData="editableData"
            :widget="column.widget"
            :item="record"
            :column="column"
            :text="text"
            @change="
              store.callHandler(column.changeHandlers, null, {
                key: column.key,
                rowItem: record,
              })
            "
          />
        </template>

        <template v-if="column.widget.name === 'select'">
          <TableSelect
            v-model:editData="editableData"
            v-model:dataSource="dataSource"
            :item="record"
            :column="column"
            :widget="column.widget"
            :text="text"
            :set-data="setData"
            :config="item.config"
            @change="
              store.callHandler(column.changeHandlers, null, {
                key: column.key,
                rowItem: record,
              })
            "
          />
        </template>

        <template v-if="column.widget.name === 'input'">
          <TableInput
            v-model:editData="editableData"
            v-model:dataSource="dataSource"
            :item="record"
            :column="column"
            :widget="column.widget"
            :data="text"
            @change="
              store.callHandler(column.changeHandlers, null, {
                key: column.key,
                rowItem: record,
              })
            "
          />
        </template>

        <template v-if="column.widget.name === 'popover'">
          <TablePopover
            v-model:editData="editableData"
            :item="record"
            :widget="column.widget"
            :text="text"
            :column="column"
          />
        </template>

        <template v-if="column.widget.name === 'actions'">
          <TableActions
            v-model:editData="editableData"
            v-model:dataSource="dataSource"
            :item="record"
            :column="column"
            :text="text"
            @row-updated="isRowUpdated = true"
            @save-row="saveRow"
          />
        </template>

        <template v-if="column.widget.name === 'image'">
          <TableImage
            v-model:editData="editableData"
            v-model:dataSource="dataSource"
            :item="record"
            :column="column"
            :widget="column.widget"
            :text="text"
          />
        </template>
      </template>
    </a-table>
  </a-config-provider>
  <template v-if="item.config.selection">
    <BottomButtons
      v-model:editData="editableData"
      v-model:dataSource="dataSource"
      v-model:state="state"
      :item="item"
      :columns="columns"
      :save-loading="saveLoading"
      :is-row-updated="isRowUpdated"
      @save-rows="saveSelectedRows"
      @save-table="saveTable"
    />
  </template>
</template>
<script setup>
import {
  reactive,
  ref,
  computed,
  onMounted,
  toRefs,
  watch,
  onBeforeMount,
} from 'vue'
import * as filters from '../../utils/filters.js'
import dayjs from 'dayjs'
import ru_RU from 'ant-design-vue/es/locale/ru_RU'
import { useApiStore } from '@/stores/api.js'

import TableFilters from '../TableWidgets/TableFilters.vue'
import TableLink from '../TableWidgets/TableLink.vue'
import TableActions from '../TableWidgets/TableActions.vue'
import TableTags from '../TableWidgets/TableTags.vue'
import TableText from '../TableWidgets/TableText.vue'
import TableDate from '../TableWidgets/TableDate.vue'
import TableCheckbox from '../TableWidgets/TableCheckbox.vue'
import TableSelect from '../TableWidgets/TableSelect.vue'
import TableInput from '../TableWidgets/TableInput.vue'
import TablePopover from '../TableWidgets/TablePopover.vue'
import TableHeaderButtons from '../TableWidgets/TableHeaderButtons.vue'
import BottomButtons from '../TableWidgets/BottomButtons.vue'
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

const { item, pageName } = toRefs(props)
const store = useGlobalJsonDataStore()
const apiStore = useApiStore()
const saveLoading = ref(false)
const isRowUpdated = ref(false)
const searchConfig = ref(item.value.config?.search)
const searchData = ref({
  value: '',
  field: searchConfig.value,
})
const handlers = {
  sendRow: [
    {
      name: 'sendOneFieldFromTable',
      params: {
        endpoint: apiStore.testEndpoint,
        fullRow: true,
      },
    },
  ],
  pushData: [
    {
      name: 'pushData',
      params: {
        pageName: props.pageName,
        blockName: props.item.name,
        endpoint: apiStore.testEndpoint,
        validate: false,
      },
    },
  ],
}

watch(searchData, () => {
  search()
})

const searchedDataSource = ref(null)
const state = reactive({
  selectedRowKeys: [],
})

const loading = ref(true)

const dataSource = computed({
  get() {
    return store.sendData[pageName.value][item.value.name] || []
  },
  set(newValue) {
    store.sendData[pageName.value][item.value.name] = newValue
  },
})

const editableData = ref({})

const filteredInfo = ref({})

const columns = computed(() => {
  const filtered = filteredInfo.value || {}
  return item.value.columns.map((col) => {
    return Object.assign(col, {
      filteredValue: filtered[col.dataIndex] || null,
      onFilter: (value, record) => {
        const filter = getFilter(col.filterType)
        return filter(record, value, col, filteredInfo, dataSource.value)
      },
    })
  })
})

const rowSelection = computed(() => {
  return props.item.config.selection
    ? {
        selectedRowKeys: state.selectedRowKeys,
        onChange: onSelectChange,
        checkStrictly: false,
      }
    : null
})

const haveFilter = computed(() => {
  return columns.value.some((col) => col.filterType)
})

onMounted(async () => {
  await store.getTableData(pageName.value, props.item)
  loading.value = false
  dataSource.value.map((item, index) => Object.assign(item, { key: index }))
  renderColumns()
})

const onSelectChange = (selectedRowKeys) => {
  state.selectedRowKeys = selectedRowKeys
}

const handleResizeColumn = (w, col) => {
  col.width = w
}

const renderColumns = () => {
  item.value.columns.map((col) => {
    if (col.sort) {
      if (dataSource.value.every((elem) => typeof elem[col.key] === 'number')) {
        col = Object.assign(col, {
          sorter: (a, b) => a[col.key] - b[col.key],
        })
      } else {
        col = Object.assign(col, {
          sorter: (a, b) =>
            String(a[col.key]).localeCompare(String(b[col.key])),
        })
      }
    }
    if (col.filterType === 'category')
      col.widget.params = getCategoryFilterData(col.key, col.filterParam)
  })
}
const getCategoryFilterData = (columnName, param) => {
  const unicVariantSet = param
    ? new Set(dataSource.value.map((item) => item[columnName][param]))
    : new Set(dataSource.value.map((item) => item[columnName]))

  return Array.from(unicVariantSet).map((item, index) => {
    return {
      id: index,
      value: item,
    }
  })
}

const getFilter = (filterType) => {
  if (filterType === 'number') return filters.numberFilter
  if (filterType === 'category') return filters.categoryFilter
  if (filterType === 'daterange') return filters.dateFilter
  if (filterType === 'checkbox') return filters.checkboxFilter
  if (filterType === 'select') return filters.selectFilter

  return filters.searchFilter
}

//Изменение данных любой ячейки по индексу и ключу объекта
const setData = (index, key, value) => {
  dataSource.value[index][key] = value.value
}

const saveRow = async (rowItem) => {
  await store.callHandler(handlers.sendRow, null, { rowItem })
  delete editableData.value[rowItem.key]
}

const saveSelectedRows = async () => {
  saveLoading.value = true
  const selectedRows = []
  for (const key in dataSource.value) {
    if (Object.values(state.selectedRowKeys).includes(Number(key))) {
      selectedRows.push(dataSource.value[key])
    }
  }
  await store.callHandler(handlers.sendRow, null, { rowItem: selectedRows })
  saveLoading.value = false
}

const saveTable = async () => {
  saveLoading.value = true
  await store.callHandler(handlers.pushData)
  saveLoading.value = false
}

const search = () => {
  if (
    searchData.value.value === undefined ||
    (Array.isArray(searchData.value.value) && !searchData.value.value.length)
  ) {
    searchedDataSource.value = null
  } else {
    searchedDataSource.value = dataSource.value.filter((row) =>
      Object.keys(row).some((colName) => {
        if (searchData.value.field === colName) {
          return searchField(row, colName)
        }
      })
    )
  }
}
const searchField = (row, colName) => {
  const col = columns.value.find((col) => col.dataIndex === colName)
  if (colName === 'key') return false
  if (col.widget.name === 'select') {
    const data = col.widget.params.find((param) => param.id === row[colName])
    return !data
      ? false
      : JSON.stringify(data)
          .toLowerCase()
          .includes(searchData.value?.value?.toLowerCase())
  }
  if (col.widget.name === 'date')
    return dayjs(row[colName] * 1000)
      .format(col.widget.format)
      .toLowerCase()
      .includes(searchData.value?.value?.toLowerCase())
  if (col.widget.name === 'text')
    return String(row[colName])
      .toLowerCase()
      .includes(searchData.value?.value?.toLowerCase())
  if (col.widget.name === 'multiselect') {
    const val = JSON.parse(JSON.stringify(searchData.value.value))
    return val.includes(String(row[colName]))
  }
  if (col.widget.name === 'checkbox') {
    if (!searchData.value.value) return true
    return row[colName] === searchData.value.value
  }
  return JSON.stringify(row[colName])
    .toLowerCase()
    .includes(searchData.value?.value?.toLowerCase())
}
</script>
<style lang="scss" scoped>
.refuse-button {
  :deep(.ant-btn) {
    color: #ff4d4f;

    &:hover {
      border-color: #ff4d4f;
    }

    &:focus {
      border-color: #ff4d4f;
    }

    &:hover[disabled] {
      border-color: #efefef;
    }

    &[disabled] {
      color: rgba(0, 0, 0, 0.25);
    }
  }
}

:deep(.ant-radio-wrapper) {
  padding-bottom: 10px;
}

.set-status {
  color: #8c8c8c;
}

.set-status:hover {
  color: #262626;
}

.set-status[disabled] {
  color: #8c8c8c;
}

.hidden {
  display: none;
  width: 0;
}
</style>
