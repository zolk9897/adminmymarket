<template>
  <a-input-search
    v-if="item.search"
    v-model:value="searchValue"
    class="mb-2"
    placeholder="Поиск.."
  />
  <a-tree
    v-model:selectedKeys="sendData[pageName][item.name].selectedKeys"
    v-model:checkedKeys="sendData[pageName][item.name].checkedKeys"
    :default-expand-all="item.defaultExpandAll"
    :auto-expand-parent="autoExpandParent"
    :checkable="item.checkable"
    :expanded-keys="expandedKeys"
    :show-line="item.showLine"
    :show-icon="item.showIcon"
    :height="item.height"
    :tree-data="item.data"
    :field-names="item.fieldNames"
    @expand="onExpand"
    @check="checkEvent"
    @select="selectEvent"
  >
    <template #title="{ dataRef, title, selected }">
      <div
        :style="
          selected && dataRef.selectColor
            ? `background-color: ${dataRef.selectColor}`
            : ''
        "
        class="node"
        :class="selected && 'selected-node'"
      >
        <fa v-if="dataRef.ico" :icon="dataRef.ico" />
        <span
          v-if="title.indexOf(searchValue) > -1"
          :style="dataRef.titleColor && `color: ${dataRef.titleColor}`"
        >
          {{ title.substr(0, title.indexOf(searchValue)) }}
          <span style="color: #f50">{{ searchValue }}</span>
          {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
        </span>
        <span
          v-else
          :style="dataRef.titleColor && `color: ${dataRef.titleColor}`"
          class="ml-1"
        >
          {{ dataRef.title }}</span
        >
      </div>
    </template>

    <template #switcherIcon="{ dataRef, defaultIcon }">
      <fa v-if="dataRef.switcherIcon" :icon="dataRef.switcherIcon" />
      <component :is="defaultIcon" v-else />
    </template>
  </a-tree>
</template>
<script setup>
import { ref, watch, computed } from 'vue'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
const { sendData, callHandler } = useGlobalJsonDataStore()
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

const searchValue = ref('')
const expandedKeys = ref([])
const autoExpandParent = ref(false)
const dataList = []

const chill = computed(() => props.item.fieldNames?.children || 'children')
const kkey = computed(() => props.item.fieldNames?.key || 'key')
const ttitle = computed(() => props.item.fieldNames?.title || 'title')

const generateList = (data) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i]
    const key = node[kkey.value]
    let res = {
      title: key,
    }
    res[kkey.value] = key
    dataList.push(res)
    if (node[chill.value]) {
      generateList(node[chill.value])
    }
  }
}
generateList(props.item.data)

watch(searchValue, (value) => {
  const expanded = dataList
    .map((item) => {
      if (item[ttitle.value].indexOf(value) > -1) {
        return getParentKey(item[kkey.value], props.item.data)
      }
      return null
    })
    .filter((item, i, self) => item && self.indexOf(item) === i)

  expandedKeys.value = expanded
  searchValue.value = value
  autoExpandParent.value = true
})

const onExpand = (keys) => {
  expandedKeys.value = keys
  autoExpandParent.value = false
}

const getParentKey = (key, tree) => {
  let parentKey
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i]
    if (node[chill.value]) {
      if (node[chill.value].some((item) => item[kkey.value] === key)) {
        parentKey = node[kkey.value]
      } else if (getParentKey(key, node[chill.value])) {
        parentKey = getParentKey(key, node[chill.value])
      }
    }
  }
  return parentKey
}

const checkEvent = () => {
  callHandler(props.item.checkHandlers)
}

const selectEvent = () => {
  callHandler(props.item.selectHandlers)
}
</script>
<style lang="scss" scoped>
:global(.ant-tree .ant-tree-node-selected) {
  background: none !important;
}
:global(.ant-tree .ant-tree-node-content-wrapper:hover) {
  background: none !important;
}
.selected-node {
  background-color: #bfe6ff;
}
.node {
  border-radius: 4px;
  padding: 0 4px;
}
.node:hover:not(.selected-node) {
  background-color: #f2f4f5;
}
</style>
