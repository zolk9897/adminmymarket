<template>
  <template v-if="editableData[item.key] || isEditableItem">
    <a-textarea
      v-if="isTextArea"
      v-model:value="itemValue"
      :rows="textAreaRows"
      @press-enter.prevent="sendFieldData"
      @change="change"
      @blur="isEditableItem = false"
    />
    <a-input
      v-else
      v-model:value="itemValue"
      style="margin: -5px 0"
      @press-enter="sendFieldData"
      @change="change"
      @blur="isEditableItem = false"
    />
  </template>
  <div
    v-else
    ref="textValue"
    :class="widget.class"
    :style="widget.style"
    @dblclick="onEditMode"
  >
    {{ text }}
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount, onMounted } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  column: Object,
  widget: Object,
  text: [Object, String, Number],
  editData: [Object, String],
  dataSource: Object,
  setData: Function,
})

const emits = defineEmits(['update:editData', 'change'])
const isEditableItem = ref(false)
const itemValue = ref()
const textValue = ref(null)
const isTextArea = ref(false)
const textAreaRows = ref(2)

const editableData = computed({
  get() {
    return props.editData
  },
  set(newValue) {
    emits('update:editData', newValue)
  },
})

const calcInputRows = () => {
  const elHeight = textValue.value.clientHeight
  const lineHeight = parseInt(getComputedStyle(textValue.value).lineHeight)
  const linesCount = Math.round(elHeight / lineHeight)
  if (linesCount > 1) {
    isTextArea.value = true
    textAreaRows.value = linesCount
  }
}

const onEditMode = () => {
  if (props.widget.isEditable) {
    isEditableItem.value = true
  }
}

const change = () => {
  if (editableData?.value[props.item.key]) {
    editableData.value[props.item.key][props.column.dataIndex] = itemValue
  }
  if (!props.widget.isEditable) {
    emits('change')
  }
}

const sendFieldData = () => {
  if (props.widget.isEditable) {
    props.setData(props.item.key, props.column.dataIndex, itemValue)
    emits('change')
  }
}

onBeforeMount(() => {
  itemValue.value = props.dataSource?.[props.item.key]?.[props.column.dataIndex]
})

onMounted(() => {
  calcInputRows()
})
</script>
