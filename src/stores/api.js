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
}

export const useApiStore = defineStore({
  id: 'api',
  state: () => {
    return {}
  },
  actions: {
    async getDataFromCompName({ endpoint, id, pageName }) {
      await new Promise((resolve) =>
        setTimeout(() => {
          const globalJson = useGlobalJsonDataStore()
          // Тестовый JSON эмулирующий бэк
          const res = emulateResponse(endpoint, id)
          axios.get(endpoint, { params: { id } })
          globalJson.setSendDataPageName(pageName, res)
          resolve()
        }, 1000)
      )
    },

    async sendOneField({ endpoint, method, value, queryParams }) {
      if (queryParams) {
        await axios[method](endpoint, null, { params: value })
      } else await axios[method](endpoint, value)
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
