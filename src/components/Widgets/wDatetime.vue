<template>
  <a-date-picker
    v-if="!item.range"
    v-model:value="value"
    :mode="item.mode"
    :show-time="item.time"
    :format="item.displayFormat"
    :value-format="item.format"
    :locale="locale"
    :style="item.style"
    :class="item.cssClass"
    @change="change"
  />
  <a-range-picker
    v-if="item.range"
    v-model:value="value"
    :show-time="item.time"
    :format="item.displayFormat"
    :value-format="item.format"
    :locale="locale"
    :style="item.style"
    :class="item.cssClass"
    @change="change"
  />
</template>
<script setup>
import { onMounted, ref, unref } from 'vue'
import locale from 'ant-design-vue/es/date-picker/locale/ru_RU'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
const emits = defineEmits(['change'])

const value = ref()

onMounted(() => {
  if (props.item.value) value.value = props.item.value
})

const change = () => {
  emits('change', props.item.name, unref(value))
}
</script>

<style scoped></style>
