<template>
  <div :class="item.parentClass">
    <a-form-item
      v-if="item.type !== 'div'"
      :label="item.title"
      :rules="[
        {
          required: item.required,
          message: 'Это поле должно быть заполнено!',
          trigger: 'blur',
        },
      ]"
    >
      <component :is="componentSwitch" :item="item" @change="setValue" />
    </a-form-item>

    <component
      :is="componentSwitch"
      v-if="item.type === 'div'"
      :item="item"
      @change="setValue"
    />
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
import { useEditDataStore } from '@/stores/edit-data'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

const store = useEditDataStore()
const name = (
  props.item.type.charAt(0).toUpperCase() + props.item.type.slice(1)
).toString()
const componentSwitch = computed(() =>
  defineAsyncComponent(() => import(`../Widgets/w${name}.vue`))
)

defineEmits('change')
const setValue = (name, value) => {
  store.setValue(name, value)
}
</script>
