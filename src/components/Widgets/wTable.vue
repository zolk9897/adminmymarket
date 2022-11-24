<template>
  <div v-if="haveFilter || searchConfig" class="pb-6">
    <TableFilters
      v-model:filteredInfo="filteredInfo"
      v-model:search-data="searchData"
      :columns="columns"
      :data-source="dataSource"
      :config="item.config"
      :have-filter="haveFilter"
    />
  </div>
  <a-config-provider :locale="ru_RU">
    <hr v-if="haveFilter" class="pb-6" />
    <a-table
      :class="item.cssClass"
      :columns="columns"
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
    <div class="pt-1">
      <a-button
        v-if="item.config.selection.edit"
        :disabled="!hasSelected"
        class="mr-3"
        @click="editSelected"
      >
        Редактировать
      </a-button>
      <a-button
        v-if="item.config.selection.save"
        :disabled="isEmpty(editableData) || !hasSelected"
        class="mr-3"
        @click="saveSelected"
      >
        Сохранить
      </a-button>
      <a-button
        v-if="item.config.selection.delete"
        class="mr-3"
        danger
        :disabled="!hasSelected"
        @click="deleteSelected"
      >
        Удалить
      </a-button>
      <a-button
        v-if="item.config.selection.approve"
        class="mr-3"
        :disabled="!hasSelected"
        @click="approveSelected"
      >
        <template #icon><CheckOutlined /></template>
        Одобрить
      </a-button>
      <a-dropdown-button
        v-if="item.config.selection.refuse"
        :disabled="!hasSelected"
        class="refuse-button mr-3"
        @click="refuseSelected"
      >
        <template #icon><DownOutlined /></template>
        <CloseOutlined />
        Отказать
        <template #overlay>
          <a-menu class="flex flex-col" style="padding: 9px 12px; width: 170px">
            <a-radio-group v-model:value="refuseReason">
              <a-radio value="Причина №1"> Причина №1 </a-radio>
              <a-radio value="Причина №2"> Причина №2 </a-radio>
              <a-radio value="Своя причина"> Своя причина</a-radio>
            </a-radio-group>
            <a-textarea
              v-model:value="refuseMainReason"
              placeholder="Введите текст"
              :auto-size="{ minRows: 2, maxRows: 5 }"
              style="width: 150px"
            />
          </a-menu>
        </template>
      </a-dropdown-button>
      <template
        v-for="(colName, index) in item.config.selection.setStatusColumn"
        :key="colName + index"
      >
        <a-dropdown class="mr-3" :disabled="!hasSelected">
          <a class="set-status" @click.prevent>
            {{ columns.find((col) => col.dataIndex === colName).title }}
            <DownOutlined />
          </a>

          <template #overlay>
            <a-menu @click="setStatus">
              <a-menu-item
                v-for="param in columns.find((col) => col.dataIndex === colName)
                  .widget.params"
                :key="param.id"
                :param="colName"
              >
                {{ param.value }}
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
      <span class="ml-2">
        <template v-if="hasSelected">
          {{ `Выбрано ${state.selectedRowKeys.length} записей` }}
        </template>
      </span>
    </div>
  </template>
</template>
<script setup>
import { reactive, ref, computed, onMounted, toRefs, watch } from 'vue'
import * as filters from '../../utils/filters.js'
import { cloneDeep, isEmpty } from 'lodash-es'
import {
  DownOutlined,
  CloseOutlined,
  CheckOutlined,
} from '@ant-design/icons-vue'
import dayjs from 'dayjs'
import ru_RU from 'ant-design-vue/es/locale/ru_RU'

import TableFilters from '../TableWidgets/TableFilters.vue'
import TableLink from '../TableWidgets/TableLink.vue'
import TableActions from '../TableWidgets/TableActions.vue'
import TableTags from '../TableWidgets/TableTags.vue'
import TableText from '../TableWidgets/TableText.vue'
import TableDate from '../TableWidgets/TableDate.vue'
import TableCheckbox from '../TableWidgets/TableCheckbox.vue'
import TableSelect from '../TableWidgets/TableSelect.vue'
import TablePopover from '../TableWidgets/TablePopover.vue'
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
const searchConfig = ref(item.value.config?.search)
const searchData = ref({
  text: '',
  field: searchConfig.value?.fields[0],
})

watch(searchData, () => {
  search()
})

const searchedDataSource = ref(null)
const state = reactive({
  selectedRowKeys: [],
})

const dataSource = computed({
  get() {
    return store.sendData[pageName.value][item.value.name] || []
  },
  set(newValue) {
    store.sendData[pageName.value][item.value.name] = newValue
  },
})

const editableData = ref({})

const filteredColumns = item.value.columns.filter((col) => !col.hide)
const filteredInfo = ref({})

const hasSelected = computed(() => state.selectedRowKeys.length > 0)

const refuseReason = ref('Причина №1')
const refuseMainReason = ref('')
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
onMounted(() => {
  store.sendData[pageName.value][item.value.name] = item.value.data
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
    if (col.filterType === 'category')
      col.widget.params = getCategoryFilterData(
        col.key,
        col.widget?.filterParam
      )
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

const onDelete = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key)
}

const deleteSelected = () => {
  state.selectedRowKeys.map((item) => onDelete(item))
  state.selectedRowKeys = []
}

const getFilter = (filterType) => {
  if (filterType === 'number') return filters.numberFilter
  if (filterType === 'category') return filters.categoryFilter
  if (filterType === 'daterange') return filters.dateFilter
  if (filterType === 'checkbox') return filters.checkboxFilter
  if (filterType === 'select') return filters.selectFilter

  return filters.searchFilter
}

const edit = (key) => {
  if (editableData.value[key]) return
  editableData.value[key] = cloneDeep(
    dataSource.value.filter((item) => key === item.key)[0]
  )
}

const save = (key) => {
  Object.assign(
    dataSource.value.filter((item) => key === item.key)[0],
    editableData.value[key]
  )
  delete editableData.value[key]
}

//Изменение данных любой ячейки по индексу и ключу объекта
const setData = (index, key, value) => {
  dataSource.value[index][key] = value
}

const editSelected = () => {
  state.selectedRowKeys.map((item) => edit(item))
}
const saveSelected = () => {
  state.selectedRowKeys.map((item) => save(item))
}
const approveSelected = () => {
  state.selectedRowKeys.map(
    (key) => (dataSource.value.filter((item) => key === item.key)[0].status = 0)
  )
}
const refuseSelected = async () => {
  state.selectedRowKeys.map(
    (key) => (dataSource.value.filter((item) => key === item.key)[0].status = 2)
  )
}
const search = () => {
  searchedDataSource.value = dataSource.value.filter((row) =>
    Object.keys(row).some((colName) => {
      if (!searchConfig.value.selected) {
        if (searchConfig.value.fields.includes(colName)) {
          return searchField(row, colName)
        }
      } else {
        if (!searchData.value.field || searchData.value.field === colName) {
          return searchField(row, colName)
        }
      }
    })
  )
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
          .includes(searchData.value.text.toLowerCase())
  }
  if (col.widget.name === 'date')
    return dayjs(row[colName] * 1000)
      .format(col.widget.format)
      .toLowerCase()
      .includes(searchData.value.text.toLowerCase())
  if (col.widget.name === 'text')
    return String(row[colName])
      .toLowerCase()
      .includes(searchData.value.text.toLowerCase())
  return JSON.stringify(row[colName])
    .toLowerCase()
    .includes(searchData.value.text.toLowerCase())
}

const setStatus = (value) => {
  state.selectedRowKeys.map(
    (id) =>
      (dataSource.value.filter((item) => id === item.key)[0][value.item.param] =
        value.key)
  )
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
</style>
