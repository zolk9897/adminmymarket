<template>
  <a-input
    v-if="item.format === 'text'"
    v-model:value="value"
    v-maska="item.mask?.toString()"
    :placeholder="item.description.substring(0, 40)"
    :style="item.style"
    :class="item.cssClass"
    size="large"
    allow-clear
    @blur="change"
  />
  <a-input-password
    v-if="item.format === 'password'"
    v-model:value="value"
    :placeholder="item.description.substring(0, 40)"
    :style="item.style"
    :class="item.cssClass"
    size="large"
    @blur="change"
  />
  <a-input-number
    v-if="item.format === 'number'"
    v-model:value="value"
    size="large"
    :placeholder="item.description.substring(0, 40)"
    :style="item.style"
    :class="item.cssClass"
    @blur="change"
  />
  <span
    v-if="item.subtitle"
    :style="item.subtitle.style"
    :class="item.subtitle.cssClass"
  >
    {{ item.subtitle.text }}
  </span>
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

const value = ref()

onMounted(() => {
  if (props.item.value) value.value = props.item.value
})

const change = () => {
  emits('change', props.item.name, unref(value))
}
</script>
