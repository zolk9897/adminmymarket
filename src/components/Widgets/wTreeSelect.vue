<template>
  <a-tree-select
    v-model:value="store.sendData[pageName][item.name]"
    tree-default-expand-all
    tree-checkable
    :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
    multiple
    :tree-data="item.options"
    :style="item.style"
    :placeholder="item.description ? item.description.substring(0, 40) : null"
    :class="[item.cssClass]"
    :show-checked-strategy="SHOW_PARENT"
  >
  </a-tree-select>
</template>
<script setup>
import { onMounted } from 'vue'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import { TreeSelect } from 'ant-design-vue'

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

const SHOW_PARENT = TreeSelect.SHOW_PARENT
const store = useGlobalJsonDataStore()
onMounted(() => {
  //Default value
  store.sendData[props.pageName][props.item.name] = props.item.value || ''
})
</script>
<style lang="scss">
.ant-select-tree-treenode-selected {
  background-color: #f5f5f5 !important;
}

.ant-select-tree-node-selected {
  background-color: #f5f5f5 !important;
}

.ant-select-tree-node-content-wrapper:hover {
  background-color: red;
}
</style>
