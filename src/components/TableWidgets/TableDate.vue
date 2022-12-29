<template>
  <a-date-picker
    v-if="editableData[item.key] || isEditableItem"
    :value="editableDateFormat"
    mode="date"
    :show-time="false"
    :format="widget.format"
    :value-format="widget.format"
    :locale="locale"
    :allow-clear="false"
    @change="change"
    @blur="isEditableItem = false"
  />
  <div v-else @dblclick="onEditMode">
    {{ textDateFormat }}
  </div>
</template>

<script setup>
import { computed, ref, onBeforeMount } from 'vue'
import locale from 'ant-design-vue/es/date-picker/locale/ru_RU'
import dayjs from 'dayjs'

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
const currentValue = ref()

const editableData = computed({
  get() {
    return props.editData
  },
  set(newValue) {
    emits('update:editData', newValue)
  },
})

const textDateFormat = computed(() =>
  dayjs(props.text * 1000).format(props.widget.format)
)

const editableDateFormat = computed(() => {
  if (props.widget.isEditable) {
    return dayjs(currentValue.value * 1000).format(props.widget.format)
  } else {
    return dayjs(
      editableData.value[props.item.key][props.column.dataIndex] * 1000
    ).format(props.widget.format)
  }
})

const change = (value) => {
  const date = dayjs(value, props.widget.format)
  currentValue.value = date.unix()
  if (props.widget.isEditable) {
    props.setData(props.item.key, props.column.dataIndex, date.unix())
  } else {
    editableData.value[props.item.key][props.column.dataIndex] = date.unix()
  }
  emits('change')
}

const onEditMode = () => {
  if (props.widget.isEditable) {
    isEditableItem.value = true
  }
}

onBeforeMount(() => {
  currentValue.value =
    props.dataSource?.[props.item.key]?.[props.column.dataIndex]
})
</script>
