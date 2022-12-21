<template>
  <a-select
    v-if="editableData[item.key]"
    v-model:value="editableData[item.key][column.dataIndex]"
    allow-clear
    :placeholder="`${column.title}`"
    :options="column.widget.params"
    :field-names="{ label: 'value', value: 'id' }"
    @change="emits('change')"
  />
  <a-select
    v-if="isEditableItem"
    v-model:value="itemValue"
    :allow-clear="widget.allowClear"
    :placeholder="`${column.title}`"
    :options="column.widget.params"
    :field-names="{ label: 'value', value: 'id' }"
    :loading="loading"
    :disabled="loading"
    @blur="isEditableItem = false"
    @change="change"
  />

  <div v-if="!editableData[item.key] && !isEditableItem">
    <a-select
      v-if="!column.widget.type"
      :value="initSelectValue"
      :placeholder="`${column.title}`"
      :options="column.widget.params"
      :field-names="{ label: 'value', value: 'id' }"
      :disabled="true"
    />

    <a-tag
      v-if="column.widget.type === 'status'"
      :color="value.color"
      :style="`color:${value.textColor || '#ffffff'}`"
      @dblclick="displaySelect"
    >
      {{ value.value.toUpperCase() }}
    </a-tag>

    <div
      v-if="column.widget.type === 'text'"
      :class="widget.class"
      :style="widget.style"
      @dblclick="displaySelect"
    >
      {{ value.value }}
    </div>
  </div>
</template>

<script setup>
import { computed, watch, ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  column: Object,
  widget: Object,
  text: Number,
  editData: Object,
  dataSource: Object,
  editItem: Object,
  setData: Function,
  config: Object,
})
const emits = defineEmits(['update:editData', 'change'])
const isEditableItem = ref(false)
const itemValue = ref({})
const loading = ref(false)

const editableData = computed({
  get() {
    return props.editData
  },
  set(newValue) {
    emits('update:editData', newValue)
  },
})

const initSelectValue = computed(
  () => props.dataSource?.[props.item.key]?.[props.column.dataIndex]
)
const value = computed(() => {
  if (!props.column.widget.type) return props.text
  return props.column.widget.params.find((param) => param.id === props.text)
})

watch(
  props,
  () => {
    if (props.config.selection?.notImmediateUpdate) {
      // отменить реактивность value
      value.effect.stop()
    }
  },
  { deep: true }
)

watch(
  props.dataSource,
  () => {
    loading.value = false
    itemValue.value = initSelectValue
  },
  { deep: true }
)

const displaySelect = () => {
  if (props.widget.isEditable) {
    isEditableItem.value = true
    itemValue.value = initSelectValue
  }
}

const change = () => {
  if (props.widget.showLoading) loading.value = true
  props.setData(props.item.key, props.column.key, itemValue)
  emits('change')
}
</script>
