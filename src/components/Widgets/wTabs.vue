<template>
  <a-tabs
    v-if="item.view === 'tabs'"
    v-model:activeKey="activeTab"
    :size="item.size"
    :type="item.tabType"
  >
    <a-tab-pane
      v-for="(el, index) in item.fieldsData"
      :key="index"
      :style="item.style"
      :class="item.cssClass"
      :tab="item.titles[index]"
      @click.stop="callHandler(item.handler)"
    >
      <WidgetSwitch :item="el" />
    </a-tab-pane>
  </a-tabs>
  <div v-else :style="item.style" :class="item.cssClass">
    <a-radio-group
      v-model:value="activeTab"
      :option-type="item.tabType"
      :options="radioOptions"
    />
    <WidgetSwitch :item="item.fieldsData[activeTab]" />
  </div>
</template>

<script setup>
import WidgetSwitch from './WidgetSwitch.vue'
import { useGlobalJsonDataStore } from '../../stores/global-json'
import { ref, onMounted } from 'vue'
const { callHandler } = useGlobalJsonDataStore()
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

const activeTab = ref(props.item.defaultActive)
const radioOptions = ref([])

onMounted(() => {
  props.item.fields.forEach((el, index) => {
    radioOptions.value.push({ label: props.item.titles[index], value: index })
  })
})
</script>
