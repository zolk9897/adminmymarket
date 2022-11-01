<template>
  <a-date-picker
    v-if="editableData[item.key]"
    :value="
      new Date(
        editableData[item.key][column.dataIndex] * 1000
      ).toLocaleDateString('ru-RU')
    "
    mode="date"
    :show-time="false"
    format="DD.MM.YYYY"
    value-format="DD.MM.YYYY"
    :locale="locale"
    :allow-clear="false"
    @change="change"
  />
  <div v-else :class="widget.class" :style="widget.style">
    {{ new Date(text * 1000).toLocaleDateString('ru-RU') }}
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
const formatDate = ref()
const emits = defineEmits(['update:editData'])

const editableData = computed({
  get() {
    return props.editData
  },
  set(newValue) {
    emits('update:editData', newValue)
  },
})

const change = (value) => {
  const date = dayjs(value, 'DD.MM.YYYY')
  editableData.value[props.item.key][props.column.dataIndex] = date.unix()
}
</script>
<style scoped></style>
