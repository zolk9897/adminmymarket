<template>
  <div class="auth_layout">
    <div class="auth_container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
.auth_layout {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 30px;
  @media (max-width: 640px) {
    padding: 15px;
  }
  .auth_container {
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    min-width: 440px;
    border: 1px solid #ccc;
    @media (max-width: 640px) {
      min-width: 100%;
    }
  }
}
</style>
