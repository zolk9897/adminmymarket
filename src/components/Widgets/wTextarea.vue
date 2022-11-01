<template>
  <a-textarea
    v-model:value="value"
    :auto-size="{ minRows: minRows, maxRows: maxRows }"
    :placeholder="item.description"
    allow-clear
    :style="item.style"
    :class="item.cssClass"
    @blur="change"
  />
</template>
<script setup>
import { onMounted, ref, unref } from 'vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
const emits = defineEmits(['change'])

const value = ref('')

const minRows = ref(2)
const maxRows = ref(5)

const change = (event) => {
  emits('change', props.item.name, unref(value))
}

onMounted(() => {
  if (props.item.value) value.value = props.item.value

  if (props.item.minRows) minRows.value = props.item.minRows
  if (props.item.maxRows) maxRows.value = props.item.maxRows
})
</script>

<style scoped></style>
