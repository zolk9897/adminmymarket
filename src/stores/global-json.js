import { defineStore } from 'pinia'
import mainData from '../JSONData/MainJSON'

export const useGlobalJsonDataStore = defineStore({
  id: 'global-json',
  state: () => ({
    formattingData: {},
    sendData: [],
    edit_page: [],
  }),
  actions: {
    addJsonData(name, object) {
      this.$patch((state) => {
        state[name] = object
      })
    },

    async getMainJson() {
      const formattingData = {}
      mainData.data.forEach((data, key) => {
        let mainEl = data.data
        this.$patch((state) => {
          state[mainEl.page] = mainEl
        })

        formattingData[mainEl.page] = []

        mainEl.groups.forEach((el) => {
          function getFieldsData(fields) {
            let fieldsData = []
            fields.forEach((item) => {
              const find = mainEl.fields.find((f) => f.name === item)
              if (find && find.type === 'div') {
                find.fieldsData = getFieldsData(find.fields)
                fieldsData.push(find)
              } else if (find) fieldsData.push(find)
            })
            return fieldsData
          }

          let fieldsData = getFieldsData(el.fields)

          formattingData[mainEl.page].push({
            ...el,
            title: data.title,
            fieldsData,
          })
        })
      })
      this.$patch({
        formattingData,
      })
    },
    callHandler(handler = {}) {
      if (handler.name) {
        this[handler.name](handler.params)
      }
    },
    save(params) {
      params.forEach((item) => console.log('Saving data', item))
    },
    editField({ pageName, blockName, fieldName, value }) {
      const findBlock = this.$state[pageName].fields.find(
        (field) => field.name === blockName
      )
      if (findBlock) {
        if (findBlock[fieldName]) {
          if (Array.isArray(findBlock[fieldName])) {
            findBlock[fieldName] = findBlock[fieldName].concat(value.add)
            findBlock[fieldName] = findBlock[fieldName].filter(
              (el) => !value.remove.includes(el)
            )
          } else if (typeof findBlock[fieldName] === 'object') {
            Object.assign(findBlock[fieldName], value)
          } else if (typeof findBlock[fieldName] === 'string') {
            findBlock[fieldName] = value
          }
        } else console.warning(`Поле: ${fieldName} не найдено!`)
      } else console.warning(`Блок: ${findBlock} не найден!`)
    },
  },
  getters: {},
})
