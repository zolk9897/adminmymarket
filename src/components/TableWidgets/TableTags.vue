<template>
  <div v-if="!editableData[item.key]">
    <a-tag v-for="(tag, index) in text" :key="index" :color="tag.color">
      {{ tag.upperCase ? tag.title.toUpperCase() : tag.title }}
    </a-tag>
  </div>
  <div v-else class="cursor-pointer" @click="showModal">
    <a-tag
      v-for="(tag, index) in editableData[item.key][column.dataIndex]"
      :key="index"
      :color="tag.color"
    >
      {{ tag.upperCase ? tag.title.toUpperCase() : tag.title }}
    </a-tag>
    <EditOutlined class="ml-2" />
  </div>
  <a-modal
    v-model:visible="visibleModal"
    :title="`Редактировать ${column.title}`"
    ok-text="Применить"
    can
    @ok="handleOk"
  >
    <template #footer> </template>
    <a-button type="primary" @click="add">Добавить</a-button>
    <div class="mt-2">
      <a-tag
        v-for="(tag, index) in modalTags"
        :key="index"
        class="cursor-pointer"
        :class="activeId === index ? 'active-tag' : ''"
        :color="tag.color"
        :closable="modalTags.length > 1"
        ok-text="Применить"
        cancel-text="Отмена"
        @click="activeId = index"
        @close.prevent="handleClose(tag)"
      >
        {{ tag.upperCase ? tag.title.toUpperCase() : tag.title }}
      </a-tag>
    </div>
    <div v-if="activeId" class="mt-4">
      <a-input
        v-model:value="modalTags[activeId].title"
        addon-before="Название"
      />
      <div class="cpicker mt-4 flex items-center">
        <div>Цвет:</div>
        <ColorPicker v-model:pureColor="modalTags[activeId].color" />
      </div>
    </div>
  </a-modal>
</template>

<script setup>
import { computed, ref } from 'vue'
import { uid } from 'uid'
import { ColorPicker } from 'vue3-colorpicker'
import { EditOutlined } from '@ant-design/icons-vue'

import 'vue3-colorpicker/style.css'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  text: Object,
  widget: Object,
  column: Object,
  editData: [Object, String],
})
const emits = defineEmits(['update:editData'])

const editableData = computed({
  get() {
    return props.editData
  },
  set(newValue) {
    emits('update:editData', newValue)
  },
})

const visibleModal = ref(false)
const modalTags = ref([])
let activeId = ref(null)

const showModal = () => {
  modalTags.value = editableData.value[props.item.key][props.column.dataIndex]
  visibleModal.value = true
}
const handleOk = () => {
  editableData.value[props.item.key][props.column.dataIndex] = modalTags.value
  visibleModal.value = false
}
const handleClose = (tag) => {
  modalTags.value = modalTags.value.filter((el) => el.id !== tag.id)
}
const add = () => {
  modalTags.value.push({
    id: uid(),
    title: 'Новый',
    color: 'gray',
  })
}
</script>

<style scoped lang="scss">
.active-tag {
  padding: 7px;
}
.cpicker {
  border: 1px solid #efefef;
  border-radius: 5px;
  div {
    border-radius: 5px;
    padding: 4px 10px;
  }
}
</style>
