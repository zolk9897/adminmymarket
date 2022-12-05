<template>
  <div v-if="!editableData[item.key]">
    <a v-if="widget.type === 'external'" :href="text.link">{{ text.title }}</a>
    <router-link v-else :to="text.link">{{ text.title }}</router-link>
    <div v-if="text.description">{{ text.description }}</div>
  </div>
  <div v-else class="cursor-pointer flex items-center" @click="showModal">
    <span>{{ editableData[item.key][column.dataIndex].title }}</span>
    <EditOutlined class="ml-2" />
  </div>
  <a-modal
    v-model:visible="visibleModal"
    :title="`Редактировать ${column.title}`"
    ok-text="Применить"
    cancel-text="Отмена"
    @ok="handleOk"
  >
    <a-input v-model:value="modalTitle" addon-before="Имя" class="pb-8" />
    <a-input v-model:value="modalLink" addon-before="Ссылка" />
  </a-modal>
</template>

<script setup>
import { computed, ref } from 'vue'
import { EditOutlined } from '@ant-design/icons-vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  text: Object,
  widget: Object,
  editData: [Object, String],
  column: Object,
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
const modalTitle = ref('')
const modalLink = ref('')
const showModal = () => {
  modalTitle.value =
    editableData.value[props.item.key][props.column.dataIndex].title
  modalLink.value =
    editableData.value[props.item.key][props.column.dataIndex].link
  visibleModal.value = true
}
const handleOk = () => {
  editableData.value[props.item.key][props.column.dataIndex] = {
    title: modalTitle.value,
    link: modalLink.value,
  }
  visibleModal.value = false
}
</script>
