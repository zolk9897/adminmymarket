<template>
  <div v-if="loading" class="">
    <a-spin class="mt-2" size="large" />
  </div>

  <div v-if="!loading && !!compData" class="anitransition">
    <template v-if="isSingleTab">
      <a-form
        ref="formRef"
        name="sendForm"
        :layout="singleTabData.layoutForm || 'vertical'"
      >
        <template
          v-for="(el, index) in singleTabData.fieldsData"
          :key="el.name + index"
        >
          <WidgetSwitch :item="el" />
        </template>
      </a-form>
      <a-empty v-if="!singleTabData" description="JSON не найден"> </a-empty>
    </template>
    <a-tabs
      v-else
      animated
      :tab-bar-style="{
        background: '#fff',
        padding: '0 24px',
      }"
    >
      <a-tab-pane
        v-for="(group, index) in compData"
        :key="group.name + index"
        :tab="group.tabName"
      >
        <div v-if="!loading && group">
          <a-form
            ref="formRef"
            name="sendForm"
            :layout="group.layoutForm || 'vertical'"
          >
            <template
              v-for="(el, index2) in group.fieldsData"
              :key="el.name + index2"
            >
              <WidgetSwitch :item="el" />
            </template>
          </a-form>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
  <a-empty
    v-if="!store.formattingData[compName]"
    description="Страница не найдена"
  >
  </a-empty>
</template>
<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import WidgetSwitch from '@/components/Widgets/WidgetSwitch.vue'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import { useRoute } from 'vue-router'

const store = useGlobalJsonDataStore()

const route = useRoute()

const formRef = ref()
const loading = ref(false)

const compName = computed(() => route.params.component)
const compData = computed(() => store.formattingData[compName.value])
const isSingleTab = computed(() => compData.value?.length === 1)
const singleTabData = computed(() => compData.value[0])

const load = () => {
  setMetaTitle()
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 10)
}

watch(compName, () => {
  if (route.name === 'main') {
    load()
  }
})

onMounted(() => {
  setMetaTitle()
})

const setMetaTitle = () => {
  if (store.formattingData[compName.value]) {
    document.title =
      `mymarket - ${store.formattingData[compName.value][0]?.title}` ||
      'mymarket - Admin'
  }
}
</script>

<style lang="scss" scoped>
:deep(.ant-form-item) {
  margin-bottom: 0;
}

:deep(.ant-form-item-control-input) {
  min-height: 0;
}
.anitransition {
  animation: animationPreview 0.4s forwards;
}
</style>
