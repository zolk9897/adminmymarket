<template>
  <a-sub-menu :key="item.name">
    <template #title>
      <TitleComponent :item="item" :title-not-collapsed="titleNotCollapsed" />
    </template>
    <template v-if="configStore.collapsedMenu" #expandIcon />
    <div v-for="el in item.subMenu" :key="el.name">
      <a-menu-item v-if="!el.subMenu" :key="el.name" @click="menuClick(el)">
        <span>
          {{ el.title }}
        </span>

        <fa v-if="el.icon" :icon="el.icon" />
      </a-menu-item>
      <SubMenuItem v-else :item="el" title-not-collapsed />
    </div>
  </a-sub-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'
import TitleComponent from '@/layouts/components/TitleComponent.vue'
import { useConfigStore } from '@/stores/config.js'

const router = useRouter()
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  collapsed: {
    type: Boolean,
  },
  titleNotCollapsed: Boolean,
})
const configStore = useConfigStore()

const menuClick = (value) => {
  if (value.main) {
    router.push({ path: `/main/${value.name}` })
  } else {
    router.push({ name: value.name })
  }
}
</script>

<style scoped></style>
