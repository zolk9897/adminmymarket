<template>
  <span v-if="type === 'text' && !editableData[item.key]" class="mr-2">
    {{ text ? 'Да' : 'Нет' }}
  </span>
  <a-checkbox
    v-else-if="!editableData[item.key]"
    v-model:checked="value"
    :disabled="column.widget.disabled"
    @change="change"
  />
  <a-checkbox
    v-if="editableData[item.key]"
    v-model:checked="editableData[item.key][column.dataIndex]"
    :disabled="column.widget.disabled"
    @change="change"
  />
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  column: Object,
  text: Boolean,
  editData: Object,
  setData: Function,
})

const value = ref(props.text)
const emits = defineEmits(['change', 'update:editData'])
const type = computed(() => props.column.widget.type)

const editableData = computed({
  get() {
    return props.editData
  },
  set(newValue) {
    emits('update:editData', newValue)
  },
})

const change = () => {
  props.setData(props.item.key, props.column.key, value)
  emits('change')
}
</script>
