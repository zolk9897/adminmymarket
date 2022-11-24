<template>
  <span v-if="type === 'text'" class="mr-2">
    {{ value === true ? 'Да' : 'Нет' }}
  </span>
  <a-checkbox
    v-else
    v-model:checked="value"
    :disabled="column.widget.disabled"
    @change="change"
  />
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  column: Object,
  text: Boolean,
  editData: Object,
  setData: Function,
})

const value = ref(props.text)
const emits = defineEmits(['change'])
const type = computed(() => props.column.widget.type)

const change = () => {
  props.setData(props.item.key, props.column.key, value)
  emits('change')
}
</script>
