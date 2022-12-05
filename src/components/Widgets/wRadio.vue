<template>
  <a-radio-group
    v-model:value="sendData[pageName][item.name]"
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
        :class="item.buttonClass"
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
  <div
    v-if="item.subtitle"
    :style="item.subtitle.style"
    :class="item.subtitle.cssClass"
  >
    {{ item.subtitle.text }}
  </div>
</template>
<script setup>
import { onMounted, ref, unref } from 'vue'
import { useGlobalJsonDataStore } from '../../stores/global-json.js'
const { callHandler } = useGlobalJsonDataStore()

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  pageName: {
    type: String,
    required: true,
  },
})

const { sendData } = useGlobalJsonDataStore()

onMounted(() => {
  //Default value
  sendData[props.pageName][props.item.name] = props.item.value || ''
})

const change = () => {
  callHandler(props.item.handlers, sendData[props.pageName][props.item.name])
}
</script>

<style scoped></style>
