<template>
  <a-slider
    id="test"
    v-model:value="value"
    :style="item.style"
    :class="item.cssClass"
    @change="change"
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

const value = ref()

onMounted(() => {
  if (props.item.value) value.value = props.item.value
})

const emits = defineEmits(['change'])
const change = () => {
  emits('change', props.item.name, unref(value))
}
</script>
