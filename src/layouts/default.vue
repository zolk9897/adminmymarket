<template>
  <div>
    <a-layout>
      <Header />
    </a-layout>
    <a-layout>
      <Sidebar />
      <main class="main_layout">
        <router-view />
      </main>
    </a-layout>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
</script>

<style lang="scss" scoped>
.main_layout {
  padding: 30px;
  width: 100%;
  height: 100vh;
  width: 100%;
  background: #f5f5f5;
  overflow-y: auto;
}

:global(.ant-layout-header) {
  height: 48px;
}

:global(.ant-layout) {
  background: #f5f5f5;
}
</style>
