<template>
  <a-upload
    v-model:file-list="fileList"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :list-type="item.fileType === 'image' ? 'picture' : 'text'"
    :max-count="item.maxCount"
    :style="item.style"
    :class="item.cssClass"
  >
    <a-button>
      <UploadOutlined />
      Загрузить
    </a-button>
  </a-upload>
</template>
<script setup>
import { onMounted, ref, unref } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
const emits = defineEmits(['change'])

const value = ref()
const fileList = ref()

onMounted(() => {
  // if (props.item.value)
  //   value.value = props.item.value
})

const change = () => {
  emits('change', props.item.name, unref(value))
}
</script>

<style scoped></style>
