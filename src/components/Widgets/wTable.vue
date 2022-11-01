<template>
  <div
    v-if="columns.some((col) => col.filterType)"
    class="flex flex-wrap gap-2 filters-block pb-6"
  >
    <TableFilters
      v-model:filteredInfo="filteredInfo"
      :columns="columns"
      :data-source="dataSource"
    />
  </div>
  <hr v-if="columns.some((col) => col.filterType)" class="pb-6" />
  <!-- prettier-ignore -->
  <a-table
    :class="item.cssClass"
    :columns="columns"
    :data-source="dataSource"
    :bordered="item.config.bordered"
    :sticky="item.config.sticky"
    :align="item.config.align"
    :pagination="item.config.pagination"
    :row-selection="
      item.config.selection
        ? {
          selectedRowKeys: state.selectedRowKeys,
          onChange: onSelectChange,
          checkStrictly: false,
        }
        : null
    "
    :size="item.config.size"
    @resize-column="handleResizeColumn"
    @change="handleChange"
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
        <TableCheckbox v-model:editData="editableData" :widget="column.widget" :item="record" :column="column" :text="text" />
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
        />
      </template>

      <template v-if="column.widget.name === 'actions'">
        <TableActions
          v-model:editData="editableData"
          v-model:dataSource="dataSource"
          :widget="column.widget"
          :item="record"
          :column="column"
          :text="text"
        />
      </template>
    </template>
  </a-table>
  <template v-if="item.config.selection">
    <div class="pt-6">
      <a-button danger :disabled="!hasSelected" @click="deleteSelected">
        Удалить
      </a-button>
      <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{ `Выбрано ${state.selectedRowKeys.length} записей` }}
        </template>
      </span>
    </div>
  </template>
</template>
<script setup>
import { reactive, ref, computed, onBeforeMount, onMounted, toRefs } from 'vue'
import * as filters from '../../utils/filters.js'

import TableFilters from '../TableWidgets/TableFilters.vue'
import TableLink from '../TableWidgets/TableLink.vue'
import TableActions from '../TableWidgets/TableActions.vue'
import TableTags from '../TableWidgets/TableTags.vue'
import TableText from '../TableWidgets/TableText.vue'
import TableDate from '../TableWidgets/TableDate.vue'
import TableCheckbox from '../TableWidgets/TableCheckbox.vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
defineEmits(['change'])

const { item } = toRefs(props)

const state = reactive({
  selectedRowKeys: [],
})

const dataSource = ref(item.value.data)

const editableData = ref({})

const filteredColumns = item.value.columns.filter((col) => !col.hide)
const filteredInfo = ref({})

const hasSelected = computed(() => state.selectedRowKeys.length > 0)

const columns = computed(() => {
  const filtered = filteredInfo.value || {}
  return filteredColumns.map((col) => {
    return Object.assign(col, {
      filteredValue: filtered[col.dataIndex] || null,
      onFilter: (value, record) => {
        const filter = getFilter(col.filterType)
        return filter(record, value, col, filteredInfo, dataSource.value)
      },
    })
  })
})

onMounted(() => {
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
  filteredColumns.map((col) => {
    if (col.sort) {
      if (item.value.data.every((elem) => typeof elem[col.key] === 'number')) {
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
  })
}

const onDelete = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key)
}

const deleteSelected = () => {
  state.selectedRowKeys.map((item) => onDelete(item))
  state.selectedRowKeys = []
}

const handleChange = (pagination, filters, sorter) => {
  filteredInfo.value = filters
}

const getFilter = (filterType) => {
  if (filterType === 'number') {
    return filters.numberFilter
  } else if (filterType === 'category') {
    return filters.categoryFilter
  } else if (filterType === 'daterange') {
    return filters.dateFilter
  } else if (filterType === 'checkbox') {
    return filters.checkboxFilter
  }
  return filters.searchFilter
}
</script>
