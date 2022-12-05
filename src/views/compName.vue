<template>
  <div v-if="loading" class="great_loader">
    <a-spin class="mt-2" size="large" />
  </div>
  <PageHeader v-if="useTitle" :data="useTitle" :class="isSingleTab && 'pb-4'" />
  <div v-if="!!compData">
    <div v-show="!loading" v-if="isSingleTab" class="p-8 anitransition">
      <template
        v-for="(el, index) in singleTabData.fieldsData"
        :key="el.name + index"
      >
        <WidgetSwitch :item="el" />
      </template>
    </div>
    <a-tabs
      v-else
      v-model:active-key="activeTab"
      animated
      :tab-bar-style="{
        background: '#fff',
        padding: '0 24px',
      }"
      @change="setTabUrl"
    >
      <a-tab-pane
        v-for="(group, index) in compData"
        :key="index"
        :tab="group.tabName"
      >
        <div v-show="!loading" v-if="group" class="p-8 anitransition">
          <template
            v-for="(el, index2) in group.fieldsData"
            :key="el.name + index2"
          >
            <WidgetSwitch :item="el" />
          </template>
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
import { computed, onBeforeMount, ref, watch } from 'vue'
import WidgetSwitch from '@/components/Widgets/WidgetSwitch.vue'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import { useRoute, useRouter } from 'vue-router'
import { debounce } from 'lodash-es'
import { useApiStore } from '@/stores/api.js'
import PageHeader from '@/components/PageHeader.vue'

const store = useGlobalJsonDataStore()
const api = useApiStore()

const route = useRoute()
const router = useRouter()

const loading = ref(true)
const activeTab = ref(0)
const thisId = ref(null)

const compName = computed(() => route.params.component)
const compData = computed(() => store.formattingData[compName.value])
const isSingleTab = computed(() => compData.value?.length === 1)
const singleTabData = computed(() => compData.value[0])
const useTitle = computed(() => store.otherConfig[compName.value].useTitle)

//SET METADATA AND LOADING
const load = async () => {
  loading.value = true
  setMetaTitle()
  if (!route.query.id) thisId.value = null
  if (route.query.id !== thisId.value) {
    await getUseIdData()
  }
  setTimeout(() => {
    loading.value = false
  }, 500)
}

watch(compName, () => {
  if (route.name === 'main') {
    load()
  }
})

watch(route, () => {
  load()
})

//VALIDATION
const validate = debounce(async function () {
  try {
    if (Object.entries(store.validationErrors).length) {
      await store.validateData(compName.value)
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
}, 1000)

store.$subscribe(({ type, events }) => {
  if (
    Object.entries(store.validationErrors).length &&
    type === 'direct' &&
    events.type === 'set'
  ) {
    validate()
  }
})

onBeforeMount(async () => {
  loading.value = true
  setActiveTab()
  setMetaTitle()
  await getUseIdData()
  store.resetValidationErrors()
  loading.value = false
})

const getUseIdData = async () => {
  const config = store.otherConfig[compName.value].useId
  if (config) {
    const id = route.query.id
    thisId.value = id
    if (id) {
      await api.getDataFromCompName({ ...config, id, pageName: compName.value })
    }
  }
}

const setActiveTab = () => {
  const tab = route.query.tab
  if (tab) activeTab.value = Number(tab)
}

const setMetaTitle = () => {
  if (store.formattingData[compName.value]) {
    document.title =
      `mymarket - ${store.formattingData[compName.value][0]?.title}` ||
      'mymarket - Admin'
  }
}

const setTabUrl = () => {
  const query = { ...route.query, tab: activeTab.value }
  router.replace({ path: route.path, query })
}
</script>

<style lang="scss" scoped>
.anitransition {
  animation: animationPreview 0.4s forwards;
}
:global(.ant-tabs-top > .ant-tabs-nav) {
  margin: 0;
}
</style>
