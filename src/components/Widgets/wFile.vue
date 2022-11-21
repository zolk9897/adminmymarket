<template>
  <a-upload
    v-if="item.fileType === 'image'"
    v-model:file-list="fileList"
    list-type="picture-card"
    class="image-uploader"
    :show-upload-list="false"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :max-count="item.maxCount"
    :style="item.style"
    :class="item.cssClass"
    @change="handleChange"
  >
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <LoadingOutlined v-if="loading"></LoadingOutlined>
      <PlusOutlined v-else></PlusOutlined>
      <div class="ant-upload-text">Загрузить</div>
    </div>
  </a-upload>
  <a-upload
    v-else
    v-model:file-list="fileList"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :list-type="item.fileType === 'image' ? 'picture' : 'text'"
    :max-count="item.maxCount"
    :style="item.style"
    :class="item.cssClass"
  >
    <a-button
      v-if="!fileList?.length"
      ghost
      :type="errors ? 'danger' : 'primary'"
    >
      <UploadOutlined />
      Загрузить
    </a-button>
  </a-upload>
</template>
<script setup>
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import { computed, onMounted, ref } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'
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

const value = ref()
const fileList = ref([])
const imageUrl = ref('')
const loading = ref(false)
const store = useGlobalJsonDataStore()

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

const handleChange = (info) => {
  if (info.file.status === 'uploading') {
    loading.value = true
    return
  }
  if (info.file.status === 'done') {
    getBase64(info.file.originFileObj, (base64Url) => {
      imageUrl.value = base64Url
      loading.value = false
    })
  }
  if (info.file.status === 'error') {
    loading.value = false
    imageUrl.value = 'https://picsum.photos/200' // TODO Delete - Example
    console.log('upload error')
  }
}

const errors = computed(() => store.validationErrors[props.item.name])

onMounted(() => {
  //Default value
  store.sendData[props.pageName][props.item.name] = null
})
</script>

<style scoped>
.image-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}
.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
