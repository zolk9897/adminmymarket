<template>
  <div
    :id="item.id"
    :style="item.style"
    :class="item.cssClass"
    @click.stop="callHandler(item.handlers)"
    @keydown.esc="escClick"
  >
    <template v-for="(el, index) in item.fieldsData" :key="el.name + index">
      <WidgetSwitch :item="el" />
    </template>
  </div>
</template>

<script setup>
import WidgetSwitch from './WidgetSwitch.vue'
import { toRefs } from 'vue'
import { useGlobalJsonDataStore } from '../../stores/global-json'

const { callHandler } = useGlobalJsonDataStore()
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
const { item } = toRefs(props)

const escClick = () => {
  if (item.value.otherHandlers?.end) {
    callHandler(item.value.otherHandlers.end)
  }
}
</script>
