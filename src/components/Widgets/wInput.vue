<template>
  <a-input
    v-if="item.format === 'text'"
    v-model:value="store.sendData[pageName][item.name]"
    v-mask="item.mask?.toString()"
    :placeholder="item.description ? item.description.substring(0, 40) : null"
    :style="item.style"
    :class="[item.cssClass, errors && 'error']"
    :size="item.size || 'large'"
    allow-clear
    @press-enter="callHandler(item.handlers)"
  />
  <a-input-password
    v-if="item.format === 'password'"
    v-model:value="store.sendData[pageName][item.name]"
    :placeholder="item.description ? item.description.substring(0, 40) : null"
    :style="item.style"
    :class="[item.cssClass, errors && 'error']"
    :size="item.size || 'large'"
    @press-enter="callHandler(item.handlers)"
  />
  <a-input-number
    v-if="item.format === 'number'"
    v-model:value="store.sendData[pageName][item.name]"
    :size="item.size || 'large'"
    :placeholder="item.description ? item.description.substring(0, 40) : null"
    :style="item.style"
    :class="[item.cssClass, errors && 'error']"
    @press-enter="callHandler(item.handlers)"
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
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import { computed, onMounted } from 'vue'
import { VueMaskDirective } from 'v-mask'

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

const store = useGlobalJsonDataStore()

const errors = computed(() => store.validationErrors[props.item.name])

onMounted(() => {
  //Default value
  store.sendData[props.pageName][props.item.name] = props.item.value || ''
})

const vMask = {
  beforeMount: VueMaskDirective.bind,
  updated: VueMaskDirective.componentUpdated,
  unmounted: VueMaskDirective.unbind,
}
</script>

<style lang="scss" scoped>
.ant-input-affix-wrapper.error {
  border-color: var(--errorRed);
}

.ant-input-affix-wrapper-focused.error {
  box-shadow: 0 0 2px var(--red);
}
</style>
