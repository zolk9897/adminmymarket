<template>
  <a-dropdown>
    <a
      v-if="item.button.type === 'link'"
      :class="item.button.cssClass"
      :style="item.button.style"
      class="ant-dropdown-link"
      @click.prevent
    >
      {{ item.button.title }}
      <DownOutlined />
    </a>
    <a-button
      v-else-if="item.button.type === 'button'"
      :type="item.button.buttonType"
      :class="item.button.cssClass"
      :style="item.button.style"
      :size="item.button.size"
      :loading="loading"
      :ghost="item.button.ghost"
    >
      <template #icon>
        <fa v-if="item.button.icon" class="mr-2" :icon="item.button.icon" />
      </template>
      {{ item.button.title }}
    </a-button>
    <template #overlay>
      <a-menu>
        <div v-for="el in item.options" :key="el.name">
          <a-menu-item v-if="!el.subMenu" :key="el.name" @click="menuClick(el)">
            <span>{{ el.title }}</span>
          </a-menu-item>
          <SubMenuItem v-else :item="el" :handlers="item.handlers" />
        </div>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script setup>
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import { onMounted, ref } from 'vue'
import { DownOutlined } from '@ant-design/icons-vue'

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
const loading = ref(false)

onMounted(() => {
  //Default value
  store.sendData[props.pageName][props.item.name] = props.item.value || ''
})

const menuClick = async (value) => {
  store.callHandler(props.item.handlers, value.value)
}
</script>

<style lang="scss" scoped></style>
