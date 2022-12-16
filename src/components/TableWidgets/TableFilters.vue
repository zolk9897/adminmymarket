<template>
  <div
    v-if="filtersData"
    class="filters flex flex-wrap items-center"
    :class="`gap-${config.gap || 2}`"
  >
    <template v-for="(filter, index) in filtersData" :key="index">
      <template v-if="haveFilter && filter && filter.key">
        <template v-if="filter.filterType">
          <a-input
            v-if="filter.filterType === 'text'"
            v-model:value="filterField[filter.dataIndex][0]"
            :placeholder="filter.filterTitle || filter.title"
            :style="`width: ${filter.filterWidth || '188px'}`"
            :size="config.filterSize || 'large'"
            :allow-clear="
              filter.filterAllowClear !== undefined
                ? filter.filterAllowClear
                : true
            "
            @press-enter="runFilter()"
          >
            <template #suffix>
              <fa
                v-if="filter.filterIcon"
                :icon="filter.filterIcon"
                style="color: #a9a8a8"
              />
            </template>
          </a-input>
          <a-input
            v-if="filter.filterType === 'number'"
            v-model:value="filterField[filter.dataIndex][0]"
            v-mask="'#############'"
            :placeholder="`${filter.title} от:`"
            :style="`width: ${filter.filterWidth || '188px'}`"
            :allow-clear="
              filter.filterAllowClear !== undefined
                ? filter.filterAllowClear
                : true
            "
            :size="config.filterSize || 'large'"
            @press-enter="runFilter()"
          >
            <template #suffix>
              <fa
                v-if="filter.filterIcon"
                :icon="filter.filterIcon"
                style="color: #a9a8a8"
              />
            </template>
          </a-input>
          <a-input
            v-if="filter.filterType === 'number'"
            v-model:value="filterField[filter.dataIndex][1]"
            v-mask="'#############'"
            :placeholder="`${filter.title} до:`"
            :style="`width: ${filter.filterWidth || '188px'}`"
            :allow-clear="
              filter.filterAllowClear !== undefined
                ? filter.filterAllowClear
                : true
            "
            :size="config.filterSize || 'large'"
            @press-enter="runFilter()"
          >
            <template #suffix>
              <fa
                v-if="filter.filterIcon"
                :icon="filter.filterIcon"
                style="color: #a9a8a8"
              />
            </template>
          </a-input>

          <a-select
            v-if="
              filter.filterType === 'category' || filter.filterType === 'select'
            "
            v-model:value="filterField[filter.dataIndex][0]"
            :placeholder="filter.filterTitle || filter.title"
            :style="`width: ${filter.filterWidth || '188px'}`"
            :allow-clear="
              filter.filterAllowClear !== undefined
                ? filter.filterAllowClear
                : true
            "
            max-tag-count="responsive"
            :mode="filter.filterMultiple ? 'multiple' : null"
            :size="config.filterSize || 'large'"
            @change="runFilter()"
          >
            <a-select-option
              v-for="(el, index2) in filter.widget.params"
              :key="el.id + index2"
              :value="el.id"
            >
              {{ el.value }}
            </a-select-option>
            <a-select-option
              v-if="filter.filterType === 'select'"
              value="Не указано"
            >
              Не указано
            </a-select-option>

            <template #suffixIcon>
              <fa
                v-if="filter.filterIcon"
                :icon="filter.filterIcon"
                style="color: #a9a8a8"
              />
            </template>
          </a-select>
          <a-range-picker
            v-if="filter.filterType === 'daterange'"
            v-model:value="filterField[filter.dataIndex]"
            :show-time="false"
            format="DD.MM.YYYY"
            value-format="DD.MM.YYYY"
            :locale="locale"
            :allow-clear="
              filter.filterAllowClear !== undefined
                ? filter.filterAllowClear
                : true
            "
            :style="`width: ${filter.filterWidth || '384.5px'}`"
            :size="config.filterSize || 'large'"
            @change="runFilter()"
          />
          <a-select
            v-if="filter.filterType === 'checkbox'"
            v-model:value="filterField[filter.dataIndex][0]"
            :allow-clear="
              filter.filterAllowClear !== undefined
                ? filter.filterAllowClear
                : true
            "
            :placeholder="filter.filterTitle || filter.title"
            :style="`width: ${filter.filterWidth || '188px'}`"
            :size="config.filterSize || 'large'"
            :options="checkboxFilterOptions"
            @change="runFilter()"
          >
            <template #suffixIcon>
              <fa
                v-if="filter.filterIcon"
                :icon="filter.filterIcon"
                style="color: #a9a8a8"
              />
            </template>
          </a-select>
        </template>
      </template>

      <!--SEARCH-->
      <!--      TODO переделать весь блок search так как он не универсальный-->
      <template v-if="filter && filter.name">
        <div v-if="filter.type === 'input'" class="flex gap-2">
          <a-input-search
            v-model:value="searchInput"
            placeholder="Поиск"
            :size="config.filterSize || 'large'"
            :class="
              searchInputFields.length > 1 ? 'short-search' : 'long-search'
            "
            :allow-clear="
              filter.filterAllowClear !== undefined
                ? filter.filterAllowClear
                : true
            "
            @search="runSearch(searchInput, filter.fields[searchField])"
          />
          <a-select
            v-if="searchInputFields.length > 1"
            v-model:value="searchField"
            :size="config.filterSize || 'large'"
            :style="`width: ${filter.filterWidth || '188px'}`"
            :field-names="{ label: 'label', value: 'id' }"
            :options="searchInputFields"
            @change="runSearch(searchInput, filter.fields[searchField])"
          />
        </div>

        <div v-if="filter.type === 'switch'" class="flex gap-2">
          <a-tooltip v-if="filter.infoTooltip" :title="filter.infoTooltip">
            <fa icon="fa-circle-info" />
          </a-tooltip>
          <div>{{ filter.label }}</div>
          <a-switch
            v-model:checked="searchSwitch"
            @change="runSearch(searchSwitch, filter.fields[0])"
          />
        </div>
        <div v-if="filter.type === 'checkbox'" class="flex gap-2">
          <a-checkbox
            v-model:checked="searchSwitch"
            @change="runSearch(searchSwitch, filter.fields[0])"
          >
            {{ filter.label }}

            <a-tooltip v-if="filter.infoTooltip" :title="filter.infoTooltip">
              <fa icon="fa-circle-info" />
            </a-tooltip>
          </a-checkbox>
        </div>

        <a-select
          v-if="filter.type === 'select'"
          v-model:value="searchSelect"
          :size="config.filterSize || 'large'"
          :style="`width: ${filter.filterWidth || '188px'}`"
          :options="searchSelectOptions"
          :placeholder="filter.filterTitle || filter.title"
          :allow-clear="
            filter.filterAllowClear !== undefined
              ? filter.filterAllowClear
              : true
          "
          max-tag-count="responsive"
          :mode="filter.filterMultiple ? 'multiple' : null"
          @change="runSearch(searchSelect, filter.fields[0])"
        />
      </template>
    </template>
    <a-button
      v-if="!config.hideSearchBtn"
      :class="config.filterSize || 'large'"
      :style="{ display: config.hideFilterBtn ? 'none' : 'inline-block' }"
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
import { computed, onBeforeMount, ref } from 'vue'
import locale from 'ant-design-vue/es/date-picker/locale/ru_RU'
import { VueMaskDirective } from 'v-mask'

const props = defineProps({
  columns: Array,
  filteredInfo: Object,
  dataSource: Array,
  config: Object,
  searchData: Object,
  haveFilter: Boolean,
})

const searchInput = ref('')
const searchSelect = ref('')
const searchConfig = ref(props.config.search || [])
const searchSwitch = ref(false)
const searchField = ref(0)
const filtersData = ref([])

const vMask = {
  beforeMount: VueMaskDirective.bind,
  updated: VueMaskDirective.componentUpdated,
  unmounted: VueMaskDirective.unbind,
}

const searchInputFields = ref(
  searchConfig?.value
    ?.find((config) => config.type === 'input')
    ?.fields.map((item, index) => {
      const column = props.columns.find((column) => column.dataIndex === item)
      return {
        label: column.title,
        id: index,
        dataIndex: item,
      }
    })
)
const searchSelectOptions = computed(() => {
  if (!props.dataSource) return []

  const select = searchConfig?.value?.find((config) => config.type === 'select')
  const fields = select.fields
    .map((name) => {
      return [...new Set(props.dataSource.map((field) => field[name]))].map(
        (value) => {
          return { label: value, value }
        }
      )
    })
    .flat()
  let res = [...fields]
  if (select.defaultValue) {
    res.unshift(JSON.parse(JSON.stringify(select.defaultValue)))
  }
  return res
})

const checkboxFilterOptions = ref([
  { value: 'true', label: 'Да' },
  { value: 'false', label: 'Нет' },
])

const filterField = ref({})
const emits = defineEmits(['update:filteredInfo', 'update:searchData'])

onBeforeMount(() => {
  props.columns.forEach((column) => {
    if (!column.filterType) return
    if (column.filterType === 'number' || column.filterType === 'daterange') {
      filterField.value[column.dataIndex] = []
    } else if (column.filterType === 'boolean') {
      filterField.value[column.dataIndex] = [false]
    } else filterField.value[column.dataIndex] = []
  })

  if (props.config.filtersPosition) {
    props.config.filtersPosition.forEach((item) => {
      const findSearch = searchConfig.value.find((el) => el.name === item)
      if (findSearch) {
        filtersData.value.push(findSearch)
      } else {
        const findFilter = props.columns.find((el) => el.key === item)
        if (findFilter) filtersData.value.push(findFilter)
      }
    })
  } else {
    props.config.search?.forEach((el) => {
      filtersData.value.push(el)
    })
    props.columns?.forEach((el) => {
      if (el.filterType) filtersData.value.push(el)
    })
  }
  const select = searchConfig?.value?.find((config) => config.type === 'select')
  if (select) {
    if (!select.defaultValue) searchSelect.value = null
    if (select.filterMultiple) searchSelect.value = []
  }
})

const runFilter = () => {
  const formattedFilterData = getFormattedFilterData()
  emits('update:filteredInfo', JSON.parse(JSON.stringify(formattedFilterData)))
}
const runSearch = (value, field) => {
  emits('update:searchData', { value, field })
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
          filterData[key][0] === undefined ||
          (Array.isArray(filterData[key][0]) && !filterData[key][0].length)
        ) {
          filterData[key] = []
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
