<template>
  <div class="bg-white">
    <div class="pt-6 pl-8 mb-1">
      <a-breadcrumb>
        <a-breadcrumb-item v-for="(el, index) in data.breadcrumbs" :key="index">
          <span v-if="!el.path">
            {{ el.title }}
          </span>
          <router-link v-else :to="el.path"> {{ el.title }} </router-link>
        </a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <a-page-header
      :title="data.title"
      class="bg-white"
      :ghost="false"
      @back="() => $router.go(-1)"
    >
      <template #extra>
        <a-button
          v-for="(item, index) in data.operations"
          :key="index"
          :type="item.type"
          :disabled="item.disabled"
          :size="item.size"
          :ghost="item.ghost"
          :loading="loading"
          @click="callHandlers(item)"
        >
          {{ item.text }}
          <template #icon>
            <fa v-if="item.icon" class="mr-2" :icon="item.icon" />
          </template>
        </a-button>
      </template>
    </a-page-header>
  </div>
</template>

<script setup>
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import { ref } from 'vue'

const { callHandler } = useGlobalJsonDataStore()
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
const loading = ref(false)
const callHandlers = async (btn) => {
  if (btn.showLoading) loading.value = true
  await callHandler(btn.handlers)
  loading.value = false
}
</script>

<style lang="scss" scoped>
:global(.ant-page-header) {
  padding: 0 24px;
}
</style>
