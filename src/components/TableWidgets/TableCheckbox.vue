<template>
  <a-checkbox
    v-if="editableData[item.key]"
    v-model:checked="editableData[item.key][column.dataIndex]"
  />
  <a-checkbox v-else v-model:checked="text" :disabled="true" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  column: Object,
  widget: Object,
  text: Boolean,
  editData: Object,
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
</script>
<style scoped></style>
