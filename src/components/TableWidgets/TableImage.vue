<template>
  <a-image v-if="text" :width="widget?.width" :src="text" />
  <FileImageOutlined v-else />
</template>

<script setup>
import { computed } from 'vue'
import { FileImageOutlined } from '@ant-design/icons-vue'

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
