<template>
  <div class="pt-1">
    <template
      v-for="(colName, index) in item.config.selection.setStatusColumn"
      :key="colName + index"
    >
      <a-dropdown class="mr-3" :disabled="!hasSelected">
        <a class="set-status" @click.prevent>
          {{ statusTitle[colName] || defaultStatusTitle(colName) }}
          <fa icon="fa-solid fa-angle-down" />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item
              v-for="param in columns.find((col) => col.dataIndex === colName)
                .widget.params"
              :key="param.id"
              :param="colName"
              @click="setStatus(param, colName)"
            >
              {{ param.value }}
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
    <span class="mr-4">
      <template v-if="hasSelected">
        {{ `Выбрано ${state.selectedRowKeys.length} записей` }}
      </template>
    </span>
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
      :disabled="isSaveBtnDisabled"
      :loading="saveLoading"
      type="primary"
      class="mr-3"
      @click="saveData"
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
      <template #icon>
        <fa class="mr-1" icon="fa-solid fa-check" />
      </template>
      Одобрить
    </a-button>
    <a-dropdown-button
      v-if="item.config.selection.refuse"
      :disabled="!hasSelected"
      class="refuse-button mr-3"
      @click="refuseSelected"
    >
      <template #icon>
        <fa icon="fa-solid fa-angle-down" />
      </template>
      <fa class="mr-1" icon="fa-solid fa-xmark" />
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
    <div v-if="item.config.selection.active" class="mt-4 mb-1">
      <a-button :disabled="!hasSelected" @click="setActive(true)">
        Активировать
      </a-button>
      <a-button :disabled="!hasSelected" class="ml-2" @click="setActive(false)">
        Деактивировать
      </a-button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { cloneDeep, isEmpty } from 'lodash-es'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  columns: Object,
  editData: [Object, String],
  dataSource: [Object, String],
  state: [Object, String],
  saveLoading: Boolean,
  isRowUpdated: Boolean,
})

const emits = defineEmits([
  'update:editData',
  'update:dataSource',
  'update:state',
  'saveRows',
  'saveTable',
])

const editableData = computed({
  get() {
    return props.editData
  },
  set(newValue) {
    emits('update:editData', newValue)
  },
})

const dataSource = computed({
  get() {
    return props.dataSource
  },
  set(newValue) {
    emits('update:dataSource', newValue)
  },
})
const state = computed({
  get() {
    return props.state
  },
  set(newValue) {
    emits('update:state', newValue)
  },
})

const hasSelected = computed(() => state.value.selectedRowKeys.length > 0)

const isSaveBtnDisabled = computed(() => {
  return !(hasSelected.value || props.isRowUpdated) || props.saveLoading
})

const refuseReason = ref('Причина №1')
const refuseMainReason = ref('')
const statusTitle = ref({})

const defaultStatusTitle = (colName) => {
  return props.columns.find((col) => col.dataIndex === colName).title
}

const onDelete = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key)
}

const deleteSelected = () => {
  state.value.selectedRowKeys.map((item) => onDelete(item))
  state.value.selectedRowKeys = []
}

const editSelected = () => {
  state.value.selectedRowKeys.map((item) => edit(item))
}
const saveData = () => {
  if (state.value.selectedRowKeys.length) {
    state.value.selectedRowKeys.map((item) => save(item))
    emits('saveRows')
  } else {
    emits('saveTable')
  }
}
const approveSelected = () => {
  state.value.selectedRowKeys.map(
    (key) => (dataSource.value.filter((item) => key === item.key)[0].status = 0)
  )
}
const refuseSelected = async () => {
  state.value.selectedRowKeys.map(
    (key) => (dataSource.value.filter((item) => key === item.key)[0].status = 2)
  )
}

const setActive = (value) => {
  state.value.selectedRowKeys.map((item) => {
    dataSource.value[item].active = value
  })
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

const setStatus = (param, colName) => {
  state.value.selectedRowKeys.map(
    (id) =>
      (dataSource.value.filter((item) => id === item.key)[0][colName] =
        param.id)
  )

  if (props.item.config.selection.notImmediateUpdate) {
    // изменить заголовок дропдауна
    statusTitle.value[colName] = param.value
  }
}
</script>

<style scoped></style>
