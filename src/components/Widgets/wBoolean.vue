<template>
  <a-switch
    v-if="item.viewType === 'switch'"
    v-model:checked="value"
    :style="item.style"
    :class="item.cssClass"
    @change="change"
  />
  <span v-if="item.viewType === 'switch'" class="ml-3">{{ item.label }}</span>
  <a-checkbox-group
    v-if="item.viewType === 'groupСheckbox'"
    v-model:value="value"
    :options="item.options"
    :style="item.style"
    :class="item.cssClass"
    @change="change"
  />
  <a-checkbox
    v-if="item.viewType === 'checkbox'"
    v-model:checked="value"
    :style="item.style"
    :class="item.cssClass"
    @change="change"
  >
    {{ item.label }}
  </a-checkbox>
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

<style scoped></style>
