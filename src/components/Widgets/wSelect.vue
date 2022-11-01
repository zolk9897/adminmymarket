<template>
  <a-select
    v-model:value="value"
    :mode="mode"
    :placeholder="item.description.substring(0, 40)"
    :style="item.style"
    :class="item.cssClass"
    :size="item.size"
    not-found-content="Нет данных"
    allow-clear
    @change="change"
  >
    <a-select-option
      v-for="(el, index) in item.options"
      :key="el.id + index"
      :value="el.id"
    >
      {{ el.name }}
    </a-select-option>
  </a-select>
  <span
    v-if="item.subtitle"
    :style="item.subtitle.style"
    :class="item.subtitle.cssClass"
  >
    {{ item.subtitle.text }}
  </span>
</template>
<script setup>
import { ref, unref, onMounted } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
const emits = defineEmits(['change'])

const value = ref()
const mode = props.item.mode ? props.item.mode : ''

const change = () => {
  emits('change', props.item.name, unref(value))
}

onMounted(() => {
  if (props.item.value) value.value = props.item.value
})
</script>

<style scoped>
.required:before {
  display: inline-block;
  margin-right: 4px;
  color: #f5222d;
  font-size: 14px;
  font-family: SimSun, sans-serif;
  line-height: 1;
  content: '*';
}
</style>
