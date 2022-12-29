<template>
  <a-upload
    v-if="item.fileType === 'image'"
    v-model:file-list="fileList"
    list-type="picture-card"
    class="image-uploader"
    :show-upload-list="false"
    action="https://ekat.sergeivl.ru/api/admin/files/upload"
    :max-count="item.maxCount"
    :accept="item.accept"
    :style="item.style"
    :class="item.cssClass"
    @change="handleChange"
  >
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <fa v-if="loading" icon="fa-solid fa-spinner" />
      <fa v-else :icon="item.button?.icon || 'fa-solid fa-plus'" />
      <div class="ant-upload-text">
        {{ item.button?.text ? item.button.text : 'Загрузить' }}
      </div>
    </div>
  </a-upload>
  <a-upload
    v-else
    v-model:file-list="fileList"
    action="https://ekat.sergeivl.ru/api/admin/files/upload"
    :list-type="item.fileType === 'text' ? 'text' : 'picture'"
    :max-count="item.maxCount"
    :accept="item.accept"
    :style="item.style"
    :class="item.cssClass"
    @change="handleChange"
  >
    <a-button
      v-if="!fileList?.length"
      :ghost="item.button ? item.button.ghost : true"
      :block="item.button ? item.button.block : false"
      :type="errors ? 'danger' : item.button?.type || 'primary'"
      :disabled="item.disabled"
    >
      <fa class="mr-2" :icon="item.button?.icon || 'fa-solid fa-upload'" />
      {{ item.button?.text ? item.button.text : 'Загрузить' }}
    </a-button>
  </a-upload>
  <span
    v-if="item.subtitle"
    :style="item.subtitle.style"
    :class="item.subtitle.cssClass"
  >
    {{ item.subtitle.text }}
  </span>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
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
    // getBase64(info.file.originFileObj, (base64Url) => {
    //   loading.value = false
    // })
    let ids = null
    if (info.fileList.length > 1) {
      info.fileList.forEach((el) => {
        ids.push(el.response.data.id)
      })
    } else {
      ids = info.fileList[0].response.data.id
    }
    store.sendData[props.pageName][props.item.name] = ids
    // console.log('-> info', info)
  }
  if (info.file.status === 'error') {
    loading.value = false
    console.error('upload error')
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
