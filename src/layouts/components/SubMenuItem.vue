<template>
  <a-sub-menu :key="item.name">
    <template #title>
      {{ item.title }}
    </template>
    <template #icon>
      <fa v-if="item.icon" :icon="item.icon" />
    </template>
    <div v-for="el in item.subMenu" :key="el.name">
      <a-menu-item v-if="!el.subMenu" :key="el.name" @click="menuClick(el)">
        {{ el.title }}
        <template #icon>
          <fa v-if="el.icon" :icon="el.icon" />
        </template>
      </a-menu-item>
      <SubMenuItem v-else :item="el" />
    </div>
  </a-sub-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const menuClick = (value) => {
  if (value.main) {
    router.push({ path: `/main/${value.name}` })
  } else {
    router.push({ name: value.name })
  }
}
</script>

<style scoped></style>
