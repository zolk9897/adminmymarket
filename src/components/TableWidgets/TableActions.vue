<template>
  <div class="editable-row-operations">
    <span v-if="editableData[item.key]">
      <a-typography-link @click="saveEdit(item.key)">
        Сохранить
      </a-typography-link>
      <a-popconfirm
        title="Вы действительно хотите отменить?"
        class="cursor-pointer ml-2"
        @confirm="cancelEdit(item.key)"
      >
        Отмена
      </a-popconfirm>
    </span>
    <a-dropdown v-else>
      <a class="ant-dropdown-link" @click.prevent>
        <fa icon="fa-solid fa-ellipsis" />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item v-if="column.edit" key="1">
            <a
              v-if="column.edit.type === 'action' || !column.edit.type"
              @click="onEdit(item.key)"
            >
              Изменить
            </a>
            <router-link v-else :to="item[column.edit.link_field]">
              Изменить
            </router-link>
          </a-menu-item>
          <a-menu-item v-if="column.delete" key="2">
            <a-popconfirm
              title="Действительно хотите удалить?"
              ok-text="Удалить"
              cancel-text="Отмена"
              @confirm="onDelete(item.key)"
            >
              Удалить
            </a-popconfirm>
          </a-menu-item>
          <a-menu-item v-if="column.onCopy" key="3">
            <a @click="onCopy(item)"> Копировать </a>
          </a-menu-item>
          <a-menu-item v-if="column.deactivate" key="4">
            <a @click="onDeactivate(item, column.deactivate)">
              {{ item[column.deactivate] ? 'Деактивировать' : 'Активировать' }}
            </a>
          </a-menu-item>
          <a-menu-item v-if="column.view" key="4">
            <a :href="item[column.view]" target="_blank"> Просмотреть </a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { cloneDeep } from 'lodash-es'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  column: Object,
  text: [Object, String, Number],
  editData: [Object, String],
  dataSource: [Object, String],
})

const emits = defineEmits([
  'update:editData',
  'update:dataSource',
  'saveRow',
  'rowUpdated',
  'search',
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

const onEdit = (key) => {
  editableData.value[key] = cloneDeep(
    dataSource.value.filter((item) => key === item.key)[0]
  )
}

const saveEdit = (key) => {
  if (props.column.sendSingleRow) {
    emits('saveRow', editableData.value[key])
  } else {
    Object.assign(
      dataSource.value.filter((item) => key === item.key)[0],
      editableData.value[key]
    )
    delete editableData.value[key]
    emits('rowUpdated')
  }
}

const cancelEdit = (key) => {
  delete editableData.value[key]
}
const count = computed(() => {
  return dataSource.value.length
})

const onCopy = (item) => {
  dataSource.value.push(Object.assign({}, item, { key: count.value }))
}
const onDelete = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key)
  dataSource.value.forEach((element) => deepRemove(element, key))
  emits('search')
}

const deepRemove = (data, key) => {
  if (data?.children) {
    data.children = data.children.filter((item) => item.key !== key)
    if (data.children.length === 0) {
      delete data.children
      return
    }
    data.children.forEach((element) => deepRemove(element, key))
  }
}

const onDeactivate = (item, field) => {
  const found_record = dataSource.value.find(
    (record) => item.key === record.key
  )
  if (found_record) {
    found_record[field] = !item[field]
    if (found_record?.children) {
      found_record.children.forEach((element) =>
        deepDeactivateAllChild(element, field, found_record)
      )
    }
    return
  }
  dataSource.value.forEach((element) => {
    deepDeactivate(element, field, item)
  })
  emits('search')
}

const deepDeactivate = (data, field, item) => {
  if (data?.children) {
    const found_record = data.children.find((record) => item.key === record.key)
    if (found_record) {
      found_record[field] = !item[field]
      if (found_record?.children) {
        found_record.children.forEach((element) =>
          deepDeactivateAllChild(element, field, found_record)
        )
      }
      if (found_record[field]) {
        data[field] = true
        return true
      }
    }
    return data.children.forEach((element) => {
      const deactivate_result = deepDeactivate(element, field, item)
      if (deactivate_result) data[field] = true
    })
  }
}
const deepDeactivateAllChild = (data, field, item) => {
  data[field] = item[field]

  if (data?.children) {
    data.children.forEach((element) =>
      deepDeactivateAllChild(element, field, item)
    )
  }
}
</script>
<style scoped>
.ant-dropdown-open {
  color: #000;
}
</style>
