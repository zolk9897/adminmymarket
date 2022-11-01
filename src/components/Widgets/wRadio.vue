<template>
  <a-radio-group
    v-model:value="value"
    :size="item.size"
    :style="item.style"
    :class="item.cssClass"
    @change="change"
  >
    <template v-if="item.viewType === 'button'">
      <a-radio-button
        v-for="(el, index) in item.options"
        :key="index"
        :value="el.value"
      >
        {{ el.label }}
      </a-radio-button>
    </template>

    <template v-else>
      <a-radio
        v-for="(el, index) in item.options"
        :key="index"
        :value="el.value"
      >
        {{ el.label }}
      </a-radio>
    </template>
  </a-radio-group>
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

<style scoped>
.some-class input {
}
</style>
