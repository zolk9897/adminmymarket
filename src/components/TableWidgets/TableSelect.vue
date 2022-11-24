<template>
  <a-select
    v-if="editableData[item.key]"
    v-model:value="editableData[item.key][column.dataIndex]"
    allow-clear
    show-search
    :placeholder="`${column.title}`"
    :options="column.widget.params"
    :field-names="{ label: 'value', value: 'id' }"
    @change="emits('change')"
  />
  <div v-else>
    <a-select
      v-if="!column.widget.type"
      v-model:value="value"
      :placeholder="`${column.title}`"
      :options="column.widget.params"
      :field-names="{ label: 'value', value: 'id' }"
      :disabled="true"
    />

    <a-tag
      v-if="column.widget.type === 'status'"
      :color="value.color"
      :style="`color:${value.textColor || '#ffffff'}`"
    >
      {{ value.value.toUpperCase() }}
    </a-tag>
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
  text: Number,
  editData: Object,
})
const emits = defineEmits(['change'])
const value = computed(() => {
  if (!props.column.widget.type) return props.text
  return props.column.widget.params.find((param) => param.id === props.text)
})

const editableData = computed(() => props.editData)
</script>
