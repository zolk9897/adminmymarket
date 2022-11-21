<template>
  <a-layout-header
    :style="{ background: '#197AEB', padding: 0 }"
    class="flex items-center justify-between"
  >
    <div class="logo ml-2 text-[#fff] font-bold text-base">LOGO</div>
    <div class="flex items-center px-4">
      <a-dropdown v-if="mode === 'development'" class="mr-4">
        <template #overlay>
          <a-menu>
            <a-menu-item key="1" @click="resetSendData()">
              Clear SendData
            </a-menu-item>
          </a-menu>
        </template>
        <a-button type="dashed" ghost> DEV </a-button>
      </a-dropdown>
      <div>
        <router-link to="/main/profile">
          <a-avatar style="color: #f56a00; background-color: #fde3cf">
            U
          </a-avatar>
        </router-link>
        <router-link class="text-[#fff] ml-1" to="/main/profile">
          Vendor Name
        </router-link>
      </div>

      <a-button type="link">
        <template #icon>
          <LogoutOutlined style="color: #fff" />
        </template>
      </a-button>
    </div>
  </a-layout-header>
</template>

<script setup>
import { LogoutOutlined } from '@ant-design/icons-vue'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
const { resetSendData } = useGlobalJsonDataStore()

const mode = import.meta.env.MODE
</script>
<style scoped>
a:hover {
  color: #fff;
}
</style>
