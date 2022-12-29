<template>
  <div v-if="isHeaderVisible" class="flex items-center justify-between pb-6">
    <div v-if="item.config.title" class="font-medium text-base">
      {{ item.config.title }}
    </div>
    <div class="flex gap-3 items-center">
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
  </div>
  <a-config-provider :locale="ru_RU">
    <hr v-if="isHeaderVisible" class="pb-6" />
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
      :custom-row="item.config.customRow ? getCustomRow : null"
      :scroll="item.config.scroll || null"
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
            v-model:dataSource="dataSource"
            :widget="column.widget"
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

        <template v-if="column.widget.name === 'date'">
          <TableDate
            v-model:editData="editableData"
            v-model:dataSource="dataSource"
            :widget="column.widget"
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
            @search="search"
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
        <template v-if="column.widget.name === 'html'">
          <TableHTML
            v-model:editData="editableData"
            v-model:dataSource="dataSource"
            :item="record"
            :column="column"
            :widget="column.widget"
            :text="text"
          />
        </template>
      </template>
      <template
        #customFilterDropdown="{
          selectedKeys,
          column,
          setSelectedKeys,
          confirm,
          clearFilters,
        }"
      >
        <TableColumnFilter
          v-model:filteredInfo="filteredInfo"
          :column="column"
          :columns="columns"
          :selected-keys="selectedKeys"
          :set-selected-keys="setSelectedKeys"
          :confirm="confirm"
          :clear-filers="clearFilters"
          :column-filter-focus="columnFilterFocus"
        />
      </template>

      <template #customFilterIcon="{ filtered, column }">
        <SearchOutlined
          v-if="!['category', 'select'].includes(column.filterType)"
          :style="{ color: filtered ? '#108ee9' : undefined }"
        />
        <FilterOutlined
          v-else
          :style="{ color: filtered ? '#108ee9' : undefined }"
        />
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
import { reactive, ref, computed, onMounted, toRefs, watch } from 'vue'
import * as filters from '../../utils/filters.js'
import { useRoute, useRouter } from 'vue-router'
import ru_RU from 'ant-design-vue/es/locale/ru_RU'
import { useApiStore } from '@/stores/api.js'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons-vue'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'

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
import TableHTML from '../TableWidgets/TableHTML.vue'
import BottomButtons from '../TableWidgets/BottomButtons.vue'
import TableColumnFilter from '../TableWidgets/TableColumnFilter.vue'

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
const router = useRouter()
const route = useRoute()
const { item, pageName } = toRefs(props)
const store = useGlobalJsonDataStore()
const apiStore = useApiStore()
const saveLoading = ref(false)
let isRowUpdated = ref(false)
const searchConfig = ref(item.value.config?.search)
const searchData = ref({
  value: '',
  field: searchConfig.value,
})
const searchedDataSource = ref(null)
const state = reactive({
  selectedRowKeys: [],
})
const loading = ref(true)
const editableData = ref({})
const filteredInfo = ref({})
const columnFilterFocus = ref(false)
const lastSelectedRow = ref(null)

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

watch(route, async () => {
  if (item.value.config.routeUpdate) {
    loading.value = true
    await store.getTableData(pageName.value, props.item)
    if (!props.item.config.noAutokey) {
      dataSource.value.map((item, index) => Object.assign(item, { key: index }))
    }
    loading.value = false
  }
})

const isHeaderVisible = computed(
  () =>
    item.value.config.title ||
    haveFilter ||
    (searchConfig.value && item.value.config.buttons)
)

const dataSource = computed({
  get() {
    return store.sendData[pageName.value][item.value.name] || []
  },
  set(newValue) {
    store.sendData[pageName.value][item.value.name] = newValue
  },
})

const columns = computed(() => {
  const filtered = filteredInfo.value || {}
  return item.value.columns.map((col) => {
    return Object.assign(col, {
      customFilterDropdown: col.columnFilter,

      filteredValue: filtered[col.dataIndex] || null,
      onFilter: (value, record) => {
        const filter = getFilter(col.filterType)
        return filter(record, value, col, filteredInfo, dataSource.value)
      },
      onFilterDropdownVisibleChange: (visible) => {
        columnFilterFocus.value = visible
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
  return (
    columns.value.some((col) => col.filterType) &&
    !props.item.config.hideHeaderFilters
  )
})

onMounted(async () => {
  await store.getTableData(pageName.value, props.item)
  loading.value = false
  if (!props.item.config.noAutokey) {
    dataSource.value.map((item, index) => Object.assign(item, { key: index }))
  }
  renderColumns()
})

const getCustomRow = (record) => {
  const rowsList = {
    changeRouteIdRow: {
      onClick: (event) => {
        if (lastSelectedRow.value) {
          lastSelectedRow.value.classList.toggle('active')
        }
        const selectedRow = event.path.find((item) => item.localName === 'tr')
        selectedRow.classList.toggle('active')
        router.replace({ path: route.path, query: { id: record.key } })
        lastSelectedRow.value = selectedRow
      },
      class: 'clickable-row selectable-row',
    },
  }
  return rowsList[props.item.config.customRow]
}

const onSelectChange = (selectedRowKeys) => {
  state.selectedRowKeys = selectedRowKeys
}

const handleResizeColumn = (w, col) => {
  col.width = w
}

const renderColumns = () => {
  item.value.columns.map((col) => {
    if (col.columnFilter) filteredInfo.value[col.dataIndex] = []
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
  dataSource.value[index][key] = value.value || value
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
    !searchData.value.value ||
    (Array.isArray(searchData.value.value) && !searchData.value.value.length)
  ) {
    searchedDataSource.value = null
  } else {
    searchedDataSource.value = filters.search(
      dataSource,
      searchData,
      item,
      columns
    )
  }
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

:deep(.selectable-row:hover) {
  cursor: pointer;
}

:deep(.selectable-row.active) {
  background-color: #bae7ff !important;
}

:deep(.selectable-row.active:hover > td) {
  background-color: #bae7ff !important;
}

:deep(tr.active.selectable-row > td.ant-table-cell-row-hover) {
  background-color: #bae7ff !important;
}
</style>
