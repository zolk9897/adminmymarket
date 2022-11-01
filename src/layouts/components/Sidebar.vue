<template>
  <a-layout-sider width="250" style="background: #fff">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openedKeys"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <div v-for="item in menu" :key="item.name">
        <a-menu-item
          v-if="!item.subMenu"
          :key="item.name"
          @click="menuClick(item)"
        >
          {{ item.title }}
          <template #icon>
            <fa v-if="item.icon" :icon="item.icon" />
          </template>
        </a-menu-item>
        <SubMenuItem v-else :item="item" />
      </div>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import SubMenuItem from './SubMenuItem.vue'
import mainJSON from '@/JSONData/MainJSON'

const router = useRouter()
const route = useRoute()
const menu = ref([])

const mainData = ref(mainJSON)
const defaultRoutes = [
  {
    name: 'edit-data',
    title: 'Редактирование данных',
    icon: 'fa-pen',
  },
]

const selectedKeys = ref([])
const openedKeys = ref([])

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
