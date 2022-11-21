<template>
  <div class="relative">
    <p class="mb-1">{{ item.label }}</p>
    <ckeditor
      v-model="sendData[pageName][item.name]"
      tag-name="textarea"
      :editor="editor"
      :class="item.cssClass"
    ></ckeditor>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
  pageName: {
    type: String,
    required: true,
  },
})
const editor = ClassicEditor

const { sendData } = useGlobalJsonDataStore()

onMounted(() => {
  //Default value
  sendData[props.pageName][props.item.name] = props.item.value || ''
})
</script>
