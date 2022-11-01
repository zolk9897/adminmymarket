<template>
  <a-input
    v-if="editableData[item.key]"
    v-model:value="editableData[item.key][column.dataIndex]"
    style="margin: -5px 0"
  />
  <div v-else :class="widget.class" :style="widget.style">
    {{ text }}
  </div>
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
  text: [Object, String, Number],
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
</script>
<style scoped></style>
