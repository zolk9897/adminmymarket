<template>
  <div v-if="loading" class="">
    <a-spin class="mt-2" size="large" />
  </div>

  <div v-show="!loading">
    <a-button class="mb-4" type="primary" @click="save()"> Сохранить </a-button>
    <a-form ref="formRef" name="sendForm" :model="store.sendData">
      <a-tabs v-model:activeKey="activeTab" type="card">
        <a-tab-pane
          v-for="(item, index) in formattingData"
          :key="item.name + index"
          :tab="item.name"
        >
          <template
            v-for="(el, index2) in item.fieldsData"
            :key="el.name + index2"
          >
            <WidgetSwitch
              :item="el"
              :module-name="item.name"
              :page-name="pageName"
            />
          </template>
        </a-tab-pane>
      </a-tabs>
    </a-form>
    <a-button class="mt-4" type="primary" @click="save()"> Сохранить </a-button>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import jsonData from './JsonData'
import WidgetSwitch from '../Widgets/WidgetSwitch.vue'
import { useGlobalJsonDataStore } from '../../stores/global-json'

const store = useGlobalJsonDataStore()
const initData = ref(jsonData)
const formattingData = ref([])
const pageName = initData.value.page

store.addJsonData('edit_page', initData.value)

const formRef = ref()
const loading = ref(false)

const activeTab = ref()

const save = async () => {
  formRef.value
    .validate()
    .then(() => {
      store.save()
    })
    .catch((error) => {
      console.error('error', error)
    })
}

onMounted(async () => {
  loading.value = true
  store[pageName].groups.forEach((el) => {
    function getFieldsData(fields) {
      let fieldsData = []
      fields.forEach((item) => {
        const find = store[pageName].fields.find((f) => f.name === item)
        if (find && find.type === 'div') {
          find.fieldsData = getFieldsData(find.fields)
          fieldsData.push(find)
        } else if (find) fieldsData.push(find)
      })
      return fieldsData
    }

    let fieldsData = getFieldsData(el.fields)

    formattingData.value.push({
      ...el,
      fieldsData,
    })
  })
  setTimeout(() => {
    loading.value = false
  }, 100)
})
</script>
