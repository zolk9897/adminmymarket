<template>
  <a-input v-model:value="value" @change="emits('change')">
    <template v-if="data.prefix" #prefix>
      {{ data.prefix }}
    </template>
    <template v-if="data.suffix" #suffix>
      {{ data.suffix }}
    </template>
  </a-input>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  column: Object,
  widget: Object,
  data: Object,
  editData: Object,
})
const emits = defineEmits(['change'])

const value = ref(props.data.value)

const change = () => {
  props.setData(props.item.key, props.column.key, value)
  emits('change')
}
</script>
