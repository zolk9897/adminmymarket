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
            <a @click="onEdit(item.key)">Изменить</a>
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
            <a @click="onDeactivate(item.key, column.deactivate)">
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

const emits = defineEmits(['update:editData', 'update:dataSource'])

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
  Object.assign(
    dataSource.value.filter((item) => key === item.key)[0],
    editableData.value[key]
  )
  delete editableData.value[key]
}

const cancelEdit = (key) => {
  delete editableData.value[key]
}
const count = computed(() => {
  return dataSource.value.length
})

const onCopy = (item) => {
  dataSource.value.push({
    activity: true,
    key: count.value,
    name: item.name,
    visibility: item.visibility,
  })
}
const onDelete = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key)
}
const onDeactivate = (key, field) => {
  dataSource.value.find((item) => key === item.key)[field] =
    !props.item[props.column.deactivate]
}
</script>
<style scoped>
.ant-dropdown-open {
  color: #000;
}
</style>
