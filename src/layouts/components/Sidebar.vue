<template>
  <a-layout-sider
    v-model:collapsed="configStore.collapsedMenu"
    width="250"
    collapsible
    theme="light"
    collapsed-width="50"
  >
    <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openedKeys"
      mode="inline"
      :style="{
        overflow: 'auto',
        height: '100vh',
        borderRight: 0,
        paddingBottom: '60px',
      }"
    >
      <div v-for="item in menu" :key="item.name">
        <a-menu-item
          v-if="!item.subMenu"
          :key="item.name"
          @click="menuClick(item)"
        >
          <TitleComponent :item="item" />
        </a-menu-item>
        <SubMenuItem v-else :item="item" />
      </div>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SubMenuItem from './SubMenuItem.vue'
import mainJSON from '@/JSONData/MainJSON'
import TitleComponent from './TitleComponent.vue'
import { useConfigStore } from '@/stores/config.js'

const router = useRouter()
const route = useRoute()
const menu = ref([])

const mainData = ref(mainJSON)
const defaultRoutes = []

const selectedKeys = ref([])
const openedKeys = ref([])

const configStore = useConfigStore()

onMounted(() => {
  setActiveItem()
  menu.value = defaultRoutes
  menu.value = menu.value.concat(mainData.value.menu)
})

const setActiveItem = () => {
  let activeItem = route.params.component ? route.params.component : route.name
  selectedKeys.value.push(activeItem)

  function getParentSubMenu(el) {
    if (el.subMenu) {
      const find = el.subMenu.find((item) => item.name === activeItem)
      if (!find) {
        el.subMenu.forEach((item) => {
          getParentSubMenu(item)
        })
      } else {
        openedKeys.value = find.subMenuParents
      }
    }
  }
  mainData.value.menu.forEach((el) => {
    getParentSubMenu(el)
  })
}

watch(
  () => route.name,
  async () => {
    setActiveItem()
  }
)

const menuClick = (value) => {
  if (value.main) {
    router.push({ path: `/main/${value.name}` })
  } else {
    router.push({ name: value.name })
  }
}
</script>

<style lang="scss"></style>
