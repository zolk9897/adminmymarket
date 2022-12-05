<template>
  <div class="main">
    <div class="item-block" :style="item.style" :class="item.cssClass">
      <template v-for="(el, index) in item.fieldsData" :key="el.name + index">
        <WidgetSwitch :item="el" />
      </template>
    </div>
    <div class="code-block">
      <div v-if="sendData.ui_kit.info_switch" class="relative">
        <div class="absolute top-[-24px] bg-white">
          {{ item.infoTitle }}
        </div>
        <div class="w-[200px]">{{ item.info }}</div>
      </div>
      <div class="buttons-block">
        <a-button
          size="small"
          shape="circle"
          @click="visibleCode = !visibleCode"
        >
          <template #icon>
            <fa icon="fa-solid fa-code" />
          </template>
        </a-button>
        <a-button size="small" shape="circle" @click="copyCode">
          <template #icon>
            <fa icon="fa-regular fa-copy" />
          </template>
        </a-button>
      </div>
      <div v-if="visibleCode">
        <pre v-if="code" v-highlightjs>
        <code class="json">{{ code }}</code>
      </pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import WidgetSwitch from './WidgetSwitch.vue'
import { useGlobalJsonDataStore } from '../../stores/global-json'
import { onMounted, ref } from 'vue'

const { sendData, getJsonCode } = useGlobalJsonDataStore()
const visibleCode = ref(false)

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
const code = ref('')
onMounted(() => {
  code.value = getJsonCode({ pageName: 'ui_kit', blockName: props.item.name })
})
const copyCode = () => {
  navigator.clipboard.writeText(JSON.stringify(code.value, null, 4))
}
</script>

<style lang="scss" scoped>
.main {
  border: 1px solid #f0f0f0;
  padding: 10px;
}
.item-block {
  padding: 20px;
}
.code-block {
  border-top: 1px solid #f0f0f0;
  padding: 10px;

  .buttons-block {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
}
</style>
