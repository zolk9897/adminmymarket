<template>
  <a-date-picker
    v-if="editableData[item.key]"
    :value="editableDateFormat"
    mode="date"
    :show-time="false"
    :format="widget.format"
    :value-format="widget.format"
    :locale="locale"
    :allow-clear="false"
    @change="change"
  />
  <div v-else>
    {{ textDateFormat }}
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
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
})

const emits = defineEmits(['update:editData'])

const editableData = computed(() => props.editData)

const textDateFormat = computed(() =>
  new Date(props.text * 1000).toLocaleDateString('ru-RU')
)

const editableDateFormat = computed(() =>
  new Date(
    editableData.value[props.item.key][props.column.dataIndex] * 1000
  ).toLocaleDateString('ru-RU')
)

const change = (value) => {
  const date = dayjs(value, props.widget.format)
  editableData.value[props.item.key][props.column.dataIndex] = date.unix()
}
</script>
