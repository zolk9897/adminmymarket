import axios from '@/config/axios.js'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import { defineStore } from 'pinia'

const emulateResponse = async (endpoint, id, data = {}) => {
  const complexRoutes = ['/pages']
  const complexPath = `${endpoint}/${id}`
  const responses = {
    '/add/accesses': { ...data, accessId: Math.floor(Math.random() * 100) },
    '/add/role': {
      title: data.role_name,
      dataIndex: `roleId_new_role_${Math.floor(Math.random() * 100)}`,
      key: `roleId_new_role_${Math.floor(Math.random() * 100)}`,
      widget: {
        name: 'checkbox',
      },
      width: 150,
      changeHandlers: [
        {
          name: 'sendOneFieldFromTable',
          params: {
            endpoint: '/changeUserRoleCell',
            rowId: 'accessID',
          },
        },
      ],
      filteredValue: null,
    },
    getTestSelectOptions: [
      {
        title: 'Test 1',
        id: 1,
      },
      {
        title: 'Test 2',
        id: 2,
      },
      {
        title: 'Test 3',
        id: 3,
      },
      {
        title: 'Test 4',
        id: 4,
      },
    ],
    '/shop': {
      analytics_table: [
        {
          offer: 'Sony PlayStation 5',
          city: 'Москва',
          clicks: 123,
          expense: 63699,
        },
      ],
      statistics_block1_title: '123',
      statistics_block2_title: '123',
      statistics_block3_title: '63699₽',
      statistics_block4_title: '63699',
      statistics_block5_title: '839839₽',
    },
    '/banners': {
      active_switch: true,
      id: id,
      block__content1_inputs_link: '00000000000',
      block__content1_inputs_name: 'NEw Data',
      block__content1_uploadD: null,
      block__content1_uploadM: null,
      block__content2_inputs_link: '11aa11',
      block__content2_inputs_name: 'Sony Playstation 5',
      block__content2_uploadD: null,
      block__content2_uploadM: null,
      id_text: id,
      sort_input: '400',
      title_name_input: 'New Value 234',
    },
    '/pages/2': {
      id_field_label: id,
      create_field_label: 'Alex 29.11.2022 18:56:00',
      updated_field_label: 'Alex 29.11.2022 18:56:00',
      active_switch: true,
      page_name_input: 'Доставка',
      page_slug_input: 'delivery',
      sorting_input: '1',
      link_input: '/main/delivery',
      editor_field:
        'Test content Test content Test content Test content Test content Test content ',
    },
    '/pages/1': {
      id_field_label: id,
      create_field_label: 'Alex 29.11.2022 18:56:00',
      updated_field_label: 'Alex 29.11.2022 18:56:00',
      active_switch: true,
      page_name_input: 'О компании',
      page_slug_input: 'about-company',
      sorting_input: '1',
      link_input: '/main/about_company',
      editor_field:
        'Test content Test content Test content Test content Test content Test content ',
    },
    pages: {
      id_field_label: id,
      create_field_label: new Date().toLocaleDateString('ru'),
      updated_field_label: new Date().toLocaleDateString('ru'),
    },
    getCascaderOptions: [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
    ],
  }

  if (complexRoutes.includes(endpoint)) {
    return (
      responses[complexPath] || { ...data, id: Math.floor(Math.random() * 100) }
    )
  } else
    return (
      responses[endpoint] || { ...data, id: Math.floor(Math.random() * 100) }
    )
}

export const useApiStore = defineStore({
  id: 'api',
  state: () => {
    return {
      testEndpoint: 'https://ekat.sergeivl.ru/api/tests/request',
    }
  },
  actions: {
    async getDataFromCompName({ endpoint, id, pageName }) {
      const globalJson = useGlobalJsonDataStore()
      // Тестовый JSON эмулирующий бэк
      const res = await emulateResponse(endpoint, id)
      axios.get(endpoint, { params: { id } })
      await globalJson.setSendDataPageName(pageName, res)
      // await new Promise((resolve, reject) => setTimeout(resolve, 2000))
    },
    async getDataForTable(endpoint) {
      const query = this.router.currentRoute._value.query
      return (await axios.get(endpoint, { params: query })).data
    },
    async sendOneField({ endpoint, method, value, queryParams }) {
      const reqMethod = method.toLowerCase()
      if (!axios[reqMethod]) {
        return Promise.reject(new SyntaxError('Unknown method'))
      } else if (['get', 'options'].includes(reqMethod)) {
        return Promise.reject(
          new Error('Prevent this method with edit data actions')
        )
      }

      if (queryParams) {
        axios[reqMethod](endpoint, null, { params: value })
      } else axios[reqMethod](endpoint, value)

      // TODO: раскоментировать на запрос к апи, когда появится ендпоинт
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(emulateResponse(endpoint, null, value))
        }, 600)
      })
    },
    async createNewPageFromId(endpoint) {
      // await axios.post(endpoint)
      return {
        data: {
          id: 555,
        },
        count: 12,
      }
    },
    async deleteFromId(endpoint, id) {
      await axios.delete(endpoint, { params: { id } })
    },
    async getSelectOptions(endpoint) {
      const res = await emulateResponse(endpoint)
      axios.get(endpoint)
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      return res
    },
    async getSelectOptionsFromSearch(endpoint, value) {
      const res = await emulateResponse(endpoint)
      axios.get(endpoint)
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      return res
    },
    async getCascaderOptions(endpoint) {
      const res = await emulateResponse(endpoint)
      axios.get(endpoint)
      await new Promise((resolve, reject) => setTimeout(resolve, 1000))
      return res
    },
  },
  getters: {},
})
