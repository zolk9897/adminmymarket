<template>
  <a-popover placement="topLeft" class="px-[9px] py-[7px]">
    <template #content>
      <template v-if="column.widget.type === 'columns'">
        <div
          v-for="(info, index) in text.offerInfo"
          :key="info.param + index"
          class="flex justify-between min-w-[350px] py-[5px]"
        >
          <span class="text-[#8c8c8c]">{{ info.param }}</span>
          <span class="text-[#262626]">{{ info.value }}</span>
        </div>
      </template>
      <template v-if="column.widget.type === 'text'">
        <div class="max-w-[350px]">
          <span class="text-[#262626]">
            {{
              text.text.length > 400
                ? text.text.substr(0, 600) + '...'
                : text.text
            }}
          </span>
        </div>
      </template>
    </template>

    <a v-if="widget.type === 'external'" :href="text.link">
      {{ text.title || text.text }}
    </a>
    <router-link v-else :to="text.link">
      {{ text.title || text.text }}
    </router-link>
  </a-popover>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  text: [Object, String],
  widget: Object,
  editData: [Object, String],
  column: Object,
})

const editableData = computed(() => {
  return props.editData
})
</script>
