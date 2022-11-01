<template>
  <div class="relative">
    <p class="mb-1">{{ item.label }}</p>
    <ckeditor
      v-model="editorData"
      tag-name="textarea"
      :editor="editor"
      :class="item.cssClass"
      @input="onEditorInput"
    ></ckeditor>
  </div>
</template>

<script setup>
import { onMounted, ref, unref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
const editor = ClassicEditor
const editorData = ref()

onMounted(() => {
  if (props.item.value) editorData.value = props.item.value
})

const onEditorInput = function () {}
</script>
