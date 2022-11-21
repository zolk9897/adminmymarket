<template>
  <a-popover placement="topLeft" class="px-[9px] py-[7px]">
    <template #content>
      <div
        v-for="(el, index) in text.offerInfo"
        :key="el.param + index"
        class="flex justify-between min-w-[350px] py-[5px]"
      >
        <span class="text-[#8c8c8c]">{{ el.param }}</span>
        <span class="text-[#262626]">{{ el.value }}</span>
      </div>
    </template>

    <a v-if="widget.type === 'external'" :href="text.link">
      {{ text.title }}
    </a>
    <router-link v-else :to="text.link">{{ text.title }} </router-link>
  </a-popover>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  text: Object,
  widget: Object,
  editData: [Object, String],
  column: Object,
})
</script>
