import { defineStore } from 'pinia'
import { useGlobalJsonDataStore } from '@/stores/global-json.js'
import axios from '@/config/axios.js'
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
          //Тестовый JSON эмулирующий бэк
          const res = {
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
          axios.get(endpoint)
          globalJson.setSendDataPageName(pageName, res)
          resolve()
        }, 1000)
      )
    },
  },
  getters: {},
})
