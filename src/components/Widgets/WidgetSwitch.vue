<template>
  <div v-if="item.title" :class="topDivClasses">
    <span
      v-if="item.titlePosition !== 'bottom'"
      :class="[
        item.titleClass,
        item.titlePosition === 'left' ? 'order-first' : 'order-last',
      ]"
      :style="item.titleStyle"
    >
      {{ item.titlePosition === 'left' ? item.title + ':' : item.title }}</span
    >
    <div :class="parentClasses">
      <component :is="componentSwitch" :item="item" :page-name="pageName" />

      <span v-if="errors" class="text-sm -mt-3 ml-1 text-error">{{
        errors
      }}</span>
    </div>
    <span
      v-if="item.titlePosition === 'bottom'"
      :class="item.titleClass"
      class="mt-1"
      :style="item.titleStyle"
    >
      {{ item.title }}</span
    >
  </div>
  <div v-else :class="[item.parentClass]">
    <component :is="componentSwitch" :item="item" :page-name="pageName" />

    <span v-if="errors" class="text-sm -mt-3 ml-1 text-error">{{
      errors
    }}</span>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'

const route = useRoute()

const store = useGlobalJsonDataStore()

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

const pageName = route.params.component

const { item } = toRefs(props)

const errors = computed(() => store.validationErrors[props.item.name])

const name = (
  props.item.type.charAt(0).toUpperCase() + props.item.type.slice(1)
).toString()
const componentSwitch = computed(() =>
  defineAsyncComponent(() => import(`../Widgets/w${name}.vue`))
)

const topDivClasses = computed(() => [
  item.value.title && item.value.containerClass
    ? item.value.containerClass
    : 'justify-end',
  item.value.titlePosition === 'left'
    ? 'grid grid-cols-[max-content_max-content]'
    : item.value.titlePosition === 'right'
    ? 'grid grid-cols-[max-content_max-content]'
    : '',
])

const parentClasses = computed(() => [
  item.value.parentClass,
  item.value.titlePosition === 'left'
    ? 'pl-1'
    : item.value.titlePosition === 'top'
    ? 'pt-1'
    : item.value.titlePosition === 'right'
    ? 'pr-1'
    : null,
])
</script>
