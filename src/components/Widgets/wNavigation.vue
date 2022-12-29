<template>
  <div class="main w-[600px]">
    <div
      class="grid grid-cols-2 gap-4"
      :style="item.style"
      :class="item.cssClass"
    >
      <span
        v-for="(el, index) in item.fields"
        :key="index"
        class="item-block font-semibold border-b text-lg cursor-pointer"
        @click="scrollToEmFromId(el.id)"
      >
        <fa icon="fa-solid fa-circle" />
        {{ el.text }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})

const scrollToEmFromId = (id) => {
  const el = document.getElementById(id)
  el.scrollIntoView({ behavior: 'smooth' }) 
}
</script>

<style lang="scss" scoped>
.main {
  border: 1px solid #f0f0f0;
  padding: 20px;
  margin-bottom: 20px;

  .item-block {
    svg {
      width: 6px;
    }

    &:hover {
      color: #0027;
      transition: color 300ms ease;
    }
  }
}
</style>
