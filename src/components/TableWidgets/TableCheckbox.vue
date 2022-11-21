<template>
  <a-checkbox
    v-if="editableData[item.key]"
    v-model:checked="editableData[item.key][column.dataIndex]"
  />
  <a-checkbox v-else v-model:checked="value" :disabled="true" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  column: Object,
  text: Boolean,
  editData: Object,
})

const emits = defineEmits(['update:editData'])

const value = computed(() => props.text)

const editableData = computed(() => props.editData)
</script>
