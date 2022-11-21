import axios from '@/config/axios.js'
import { createSchema } from '@/config/validate.js'
import { noFormWidgetsNames } from '@/utils/widgetsTypesNames.js'
import { defineStore } from 'pinia'
import * as yup from 'yup'
import mainData from '../JSONData/MainJSON'

export const useGlobalJsonDataStore = defineStore({
  id: 'global-json',
  state: () => {
    return {
      formattingData: {},
      sendData: {},
      validationErrors: {},
      validationConfig: {},
      excludeSend: {},
      oldBlockName: null,
      otherConfig: {},
    }
  },
  actions: {
    //MAIN JSON DATA FUNCTIONS

    async getMainJson() {
      const formattingData = {}
      const sendData = {}
      const excludeSend = {}
      const validationConfig = {}
      const otherConfig = {}

      mainData.data.forEach((data) => {
        let mainEl = data.data

        formattingData[mainEl.page] = []
        sendData[mainEl.page] = {}
        excludeSend[mainEl.page] = []

        otherConfig[mainEl.page] = {}
        if (mainEl.useId) {
          otherConfig[mainEl.page].useId = mainEl.useId
        }

        mainEl.groups.forEach((el) => {
          function getFieldsData(fields) {
            let fieldsData = []
            fields.forEach((item) => {
              const find = mainEl.fields.find((f) => f.name === item)
              if (find && ['div', 'tabs'].includes(find.type)) {
                find.fieldsData = getFieldsData(find.fields)
                fieldsData.push(find)
              } else if (find) {
                if (!noFormWidgetsNames.includes(find.type)) {
                  sendData[mainEl.page][find.name] = null
                  if (find.excludeSend) excludeSend[mainEl.page].push(find.name)
                  if (find.validation)
                    validationConfig[find.name] = find.validation
                }
                fieldsData.push(find)
              }
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
        sendData,
        validationConfig,
        excludeSend,
        otherConfig,
      })
    },
    async callHandler(handlers = [], value = null) {
      if (!handlers.length) return
      for (let i = 0; i < handlers.length; i++) {
        if (this[handlers[i].name]) {
          if (handlers[i].dynamicParam && value) {
            handlers[i].params[handlers[i].dynamicParam] = value
          }
          try {
            await this[handlers[i].name](handlers[i].params)
          } catch (e) {
            return false
          }
        }
      }
    },
    findField(fArr = [], fName) {
      if (!fArr.length) return
      let searchResult = null

      const recursiveSearch = (arr = [], name) => {
        arr.forEach((item) => {
          if (item.name === name) {
            searchResult = item
          } else {
            recursiveSearch(item.fieldsData, name)
          }
        })
      }
      recursiveSearch(fArr, fName)

      return searchResult
    },

    //SEND DATA FUNCTIONS
    async pushData({ pageName, blockName }) {
      await this.validateData(pageName, blockName).then(async () => {
        const data = await this.getBlockData(pageName, blockName)
        console.log('-> Успешно отправлено', data)
        const res = await axios.post('/data', data)
      })
    },
    async getBlockData(pageName, blockName) {
      this.excludeSend[pageName]?.forEach((el) => {
        delete this.sendData[pageName][el]
      })
      let data = {}
      const findBlock = this.findField(
        this.$state.formattingData[pageName],
        blockName
      )
      const sendData = this.sendData
      function getBlocksData(block) {
        block.fieldsData.forEach((el) => {
          if (['div', 'tabs'].includes(el.type)) {
            getBlocksData(el)
          } else {
            if (sendData[pageName][el.name] !== undefined)
              data[el.name] = sendData[pageName][el.name]
          }
        })
      }
      getBlocksData(findBlock)

      return data
    },

    setSendDataPageName(page, data) {
      this.$patch((state) => {
        state.sendData[page] = Object.assign(state.sendData[page], data)
      })
    },

    //VALIDATION FUNCTIONS
    resetValidationErrors() {
      this.validationErrors = {}
    },
    async getValidationConfigBlock(blocks) {
      let config = []
      blocks.forEach((el) => {
        if (this.validationConfig[el])
          config.push({ ...this.validationConfig[el], name: el })
      })
      return config
    },
    async validateData(pageName, blockName) {
      if (!blockName) {
        blockName = this.oldBlockname
      } else {
        this.oldBlockname = blockName
      }
      const findBlock = this.findField(
        this.$state.formattingData[pageName],
        blockName
      )
      let blocks = []
      async function getBlocks(block) {
        block.fieldsData.forEach((el) => {
          if (['div', 'tabs'].includes(el.type)) {
            getBlocks(el)
          } else {
            blocks.push(el.name)
          }
        })
      }
      await getBlocks(findBlock)

      let config = await this.getValidationConfigBlock(blocks)

      const schema = config.reduce(createSchema, {})
      const validateSchema = yup.object().shape(schema)

      this.$patch((state) => {
        state.validationErrors = {}
      })
      await validateSchema
        .validate(this.sendData[pageName], {
          abortEarly: false,
        })
        .catch((err) => {
          const errors = err.inner.reduce((acc, error) => {
            return {
              ...acc,
              [error.path]: error.message,
            }
          }, {})
          this.$patch((state) => {
            state.validationErrors = errors
          })
          throw new Error('Ошибка валидации!')
        })
    },

    //HANDLERS FORM
    editField({ pageName, blockName, fieldName, value }) {
      const groups = this.$state.formattingData[pageName]
      if (typeof blockName === 'string') {
        blockName = [blockName]
      }
      blockName.forEach((block) => {
        const findBlock = this.findField(groups, block)
        if (findBlock) {
          if (findBlock[fieldName]) {
            if (Array.isArray(findBlock[fieldName])) {
              if (value.add)
                findBlock[fieldName] = findBlock[fieldName].concat(value.add)
              if (value.remove)
                findBlock[fieldName] = findBlock[fieldName].filter(
                  (el) => !value.remove.includes(el)
                )
            } else if (typeof findBlock[fieldName] === 'object') {
              Object.assign(findBlock[fieldName], value)
            } else if (typeof findBlock[fieldName] === 'string') {
              findBlock[fieldName] = value
            }
          } else console.warn(`Поле: ${fieldName} не найдено!`)
        } else console.warn(`Блок: ${findBlock} не найден!`)
      })
    },
    addDataToTableField({ pageName, tableName, data }) {
      let resData = {}
      Object.keys(data).forEach((el) => {
        if (typeof data[el] === 'object') {
          resData[el] = data[el].value
        } else resData[el] = this.sendData[pageName][data[el]]
      })
      this.sendData[pageName][tableName].push(resData)
    },
    async validateHandler({ pageName, blockName }) {
      await this.validateData(pageName, blockName)
    },
    async resetBlockData({ pageName, blockName }) {
      const data = await this.getBlockData(pageName, blockName)
      Object.keys(data).forEach((el) => {
        this.sendData[pageName][el] = null
      })
      this.resetValidationErrors()
    },
    goRoute({ name, query }) {
      this.router.push({ path: `/main/${name}`, query })
    },

    //OTHER
    goBack(params) {
      this.router.go(`-${params?.step ? params.step : 1}`)
    },
  },
})
