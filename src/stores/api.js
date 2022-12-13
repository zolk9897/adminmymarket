import axios from '@/config/axios.js'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import { defineStore } from 'pinia'

const emulateResponse = (endpoint, id) => {
  if (endpoint === '/shop') {
    return {
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
    }
  }

  if (endpoint === '/banners') {
    return {
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
    }
  }

  if (endpoint === '/pages') {
    if (id == 2) {
      return {
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
      }
    } else if (id == 1) {
      return {
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
      }
    } else {
      return {
        id_field_label: id,
        create_field_label: new Date().toLocaleDateString('ru'),
        updated_field_label: new Date().toLocaleDateString('ru'),
      }
    }
  }
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
      await new Promise((resolve) =>
        setTimeout(async () => {
          const globalJson = useGlobalJsonDataStore()
          // Тестовый JSON эмулирующий бэк
          const res = emulateResponse(endpoint, id)
          axios.get(endpoint, { params: { id } })
          globalJson.setSendDataPageName(pageName, res)
          await new Promise((resolve, reject) => setTimeout(resolve, 1000))
          resolve()
        }, 100)
      )
    },
    async getDataForTable(endpoint) {
      const query = this.router.currentRoute._value.query
      return (await axios.get(endpoint, { params: query })).data
    },

    async sendOneField({ endpoint, method, value, queryParams }) {
      if (queryParams) {
        return await axios[method](endpoint, null, { params: value })
      } else return await axios[method](endpoint, value)
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
  },
  getters: {},
})
