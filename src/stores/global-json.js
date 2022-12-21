import axios from '@/config/axios.js'
import { createSchema } from '@/config/validate.js'
import { useApiStore } from '@/stores/api.js'
import { noFormWidgetsNames } from '@/utils/widgetsTypesNames.js'
import { defineStore } from 'pinia'
import * as yup from 'yup'
import mainData from '../JSONData/MainJSON'
import { findField, getValueFromNode } from '@/utils/global-json-helpers.js'

export const useGlobalJsonDataStore = defineStore({
  id: 'global-json',
  state: () => {
    return {
      formattingData: {},
      sendData: {},
      defaultSendData: {},
      validationErrors: {},
      validationConfig: {},
      excludeSend: {},
      excludeReset: {},
      oldBlockName: null,
      otherConfig: {},
    }
  },
  actions: {
    //MAIN JSON DATA FUNCTIONS

    async getMainJson() {
      const formattingData = {}
      const sendData = {}
      const defaultSendData = {}
      const excludeSend = {}
      const excludeReset = {}
      const validationConfig = {}
      const otherConfig = {}

      mainData.data.forEach((data) => {
        let mainEl = data.data
        //Форматированный JSON файл
        formattingData[mainEl.page] = []
        //Хранилище данных всех json
        sendData[mainEl.page] = {}
        //Копия данных для ресета
        defaultSendData[mainEl.page] = {}
        //Поля которые ненужно отправлять
        excludeSend[mainEl.page] = []
        //Поля которые ненужно сбрасывать
        excludeReset[mainEl.page] = {}

        otherConfig[mainEl.page] = {}
        // useId для динамических страниц что бы полчать данные
        otherConfig[mainEl.page].useId = mainEl.useId || null
        // Блок с header title(breadcrumbs, buttons and more)
        otherConfig[mainEl.page].useTitle = mainEl.useTitle || null

        mainEl.groups.forEach((el) => {
          function getFieldsData(fields) {
            let fieldsData = []
            fields.forEach((item) => {
              // Поиск блока
              const find = mainEl.fields.find((f) => f.name === item)
              // Если это parent то вытаскиваем children
              if (find && ['div', 'tabs', 'code'].includes(find.type)) {
                find.fieldsData = getFieldsData(find.fields)
                fieldsData.push(find)
              } else if (find) {
                // Проверка что это компоненты данные которых нужны в sendData
                if (!noFormWidgetsNames.includes(find.type)) {
                  // Значения по умолчанию
                  sendData[mainEl.page][find.name] = find.value || null
                  // Добавляем значение по умолчанию в отдельный объект для дальнейшего использования
                  if (find.type === 'table') {
                    defaultSendData[mainEl.page][find.name] =
                      JSON.parse(JSON.stringify(find.data)) || null
                  } else {
                    defaultSendData[mainEl.page][find.name] = find.value || null
                  }

                  // Дополнительные изменения для комопонента tree что бы иметь 2 стора в одном
                  if (find.type === 'tree') {
                    const data = {
                      selectedKeys: [],
                      checkedKeys: [],
                    }
                    sendData[mainEl.page][find.name] = data
                    defaultSendData[mainEl.page][find.name] = data
                  }
                  // Поля которые не нужно отправлять
                  if (find.excludeSend) excludeSend[mainEl.page].push(find.name)
                  // Поля которые не нужно ресетить
                  if (find.excludeReset)
                    excludeReset[mainEl.page][find.name] = true
                  // Валидация
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
        defaultSendData,
        validationConfig,
        excludeSend,
        excludeReset,
        otherConfig,
      })
    },
    async callHandler(handlers = [], value = null, otherParams = null) {
      if (!handlers.length) return
      for (let i = 0; i < handlers.length; i++) {
        if (this[handlers[i].name]) {
          if (handlers[i].dynamicParam && value) {
            handlers[i].params[handlers[i].dynamicParam] = value
          }
          try {
            await this[handlers[i].name](handlers[i].params, otherParams)
          } catch (e) {
            this.showNoty({
              component: 'notification',
              type: 'error',
              // TODO вставить сюда сообщение об ошибке из response
              title: 'Error',
              description: e,
            })
            return false
          }
        }
      }
    },

    //SEND DATA FUNCTIONS
    async pushData({
      pageName,
      blockName,
      endpoint = '',
      method = 'post',
      validate = true,
    }) {
      const sendData = async () => {
        const data = await this.getBlockData(pageName, blockName)
        const res = await axios[method](endpoint, data)
        console.log('-> Успешно отправлено', data)
        this.showNoty({
          component: 'notification',
          type: 'success',
          title: res.data.message,
        })
      }
      if (validate) {
        await this.validateData(pageName, blockName).then(async () => {
          await sendData()
        })
      } else {
        await sendData()
      }
    },
    async getBlockData(pageName, blockName) {
      this.excludeSend[pageName]?.forEach((el) => {
        delete this.sendData[pageName][el]
      })
      let data = {}
      const findBlock = findField(
        this.$state.formattingData[pageName],
        blockName
      )
      const sendData = this.sendData
      function getBlocksData(block) {
        if (!block.fieldsData) {
          // если у блока нет fields (таблица), берем данные самого блока
          data = sendData[pageName][block.name]
        } else {
          block.fieldsData.forEach((el) => {
            if (['div', 'tabs'].includes(el.type)) {
              getBlocksData(el)
            } else {
              if (sendData[pageName][el.name] !== undefined)
                data[el.name] = sendData[pageName][el.name]
            }
          })
        }
      }
      getBlocksData(findBlock)

      return data
    },

    async setSendDataPageName(page, data) {
      setTimeout(() => {
        this.$patch((state) => {
          state.sendData[page] = Object.assign(state.sendData[page], data)
        })
      }, 300)
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
      const findBlock = findField(
        this.$state.formattingData[pageName],
        blockName
      )
      let blocks = []
      async function getBlocks(block) {
        block.fieldsData.forEach((el) => {
          if (['div', 'tabs', 'code'].includes(el.type)) {
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
      const groups = this.formattingData[pageName]
      if (typeof blockName === 'string') {
        blockName = [blockName]
      }
      blockName.forEach((block) => {
        const findBlock = findField(groups, block)
        if (findBlock) {
          if (fieldName in findBlock) {
            if (Array.isArray(findBlock[fieldName])) {
              if (value.add)
                findBlock[fieldName] = findBlock[fieldName].concat(value.add)
              if (value.remove)
                findBlock[fieldName] = findBlock[fieldName].filter(
                  (el) => !value.remove.includes(el)
                )
            } else if (typeof findBlock[fieldName] === 'object') {
              Object.assign(findBlock[fieldName], value)
            } else {
              findBlock[fieldName] = value
            }
          } else console.warn(`Поле: ${fieldName} не найдено!`)
        } else console.warn(`Блок: ${findBlock} не найден!`)
      })
    },
    setFieldValue({ pageName, fieldName, value }) {
      this.sendData[pageName][fieldName] = value
    },
    async addDataToTableField({ pageName, tableName, data, request }) {
      const API = useApiStore()
      const resData = getValueFromNode(data, this.sendData, pageName)
      const requestData = { ...request, value: resData }

      try {
        const response = await API.sendOneField(requestData)
        const keyIndex = this.sendData[pageName][tableName].push(response) - 1
        this.sendData[pageName][tableName][keyIndex].key = keyIndex
      } catch (e) {
        console.error(e)
      }
    },
    async addColumnToTable({ pageName, tableName, data, request }) {
      const API = useApiStore()
      const stack = [this.formattingData[pageName]]
      const resData = getValueFromNode(data, this.sendData, pageName)

      let foundTable = null

      // Find target table
      while (stack.length > 0) {
        const node = stack.pop()
        for (const table of node) {
          if (table.name === tableName) {
            foundTable = table
          }
          if (table.fieldsData?.length) {
            stack.push(table.fieldsData)
          }
        }
      }

      const requestData = { ...request, value: resData }
      try {
        const response = await API.sendOneField(requestData)
        foundTable.columns.push(response)
      } catch (e) {
        console.error(e)
      }
    },
    async validateHandler({ pageName, blockName }) {
      await this.validateData(pageName, blockName)
    },
    async resetBlockData({ pageName, blockName }) {
      const data = await this.getBlockData(pageName, blockName)
      Object.keys(data).forEach((el) => {
        if (!this.excludeReset[pageName][el])
          this.sendData[pageName][el] = this.defaultSendData[pageName][el]
      })
      this.resetValidationErrors()
    },
    resetTableData({ pageName, tableName, rowId, columnId }) {
      let sendData = this.sendData[pageName][tableName]
      const defaultData = this.defaultSendData[pageName][tableName]
      if ((rowId || rowId === 0) && columnId) {
        // reset cell
        sendData[rowId][columnId] = defaultData[rowId][columnId]
      } else if ((rowId || rowId === 0) && !columnId) {
        // reset row
        sendData[rowId] = defaultData[rowId]
      } else {
        // reset table
        sendData = defaultData
      }
    },
    async createNewPageFromId({ endpoint, jsonPage }) {
      const API = useApiStore()
      const { data } = await API.createNewPageFromId(endpoint)
      await new Promise((resolve, reject) => setTimeout(resolve, 2000))
      this.router.push({
        path: `/main/${jsonPage}`,
        query: { id: data.id },
      })
    },
    deleteFromId({ endpoint, redirect }) {
      const id = this.router.currentRoute._value.query.id
      if (!id) {
        this.showNoty({
          component: 'notification',
          type: 'error',
          title: 'Id не найден!',
        })
      } else {
        const API = useApiStore()
        API.deleteFromId(endpoint, id)
        this.router.push(redirect)
      }
    },

    goRoute({ name, query }) {
      this.router.push({ path: `/main/${name}`, query })
    },

    //OTHER
    goBack(params) {
      this.router.go(`-${params?.step ? params.step : 1}`)
    },
    getJsonCode({ pageName, blockName }) {
      const groups = this.formattingData[pageName]
      const findBlock = findField(groups, blockName)
      const jsonCode = findBlock.fields.map((block) => findField(groups, block))
      return jsonCode
    },

    //TABLE HANDLERS
    async sendOneFieldFromTable(params, { key, rowItem }) {
      const {
        endpoint,
        pageName = '',
        tableName = '',
        method = 'post',
        queryParams = null,
        fullRow = false,
      } = params
      const API = useApiStore()

      const cellData = {
        rowId: rowItem.key,
        columnId: key,
        value: rowItem[key],
      }

      let value = {}

      if (!fullRow) value = cellData
      else value = rowItem
      try {
        const response = await API.sendOneField({
          endpoint,
          value,
          queryParams,
          method,
        })
        console.log('-> Успешно отправлено', value.value)
        this.showNoty({
          component: 'notification',
          type: 'success',
          title: response.data.message,
        })
      } catch (error) {
        this.showNoty({
          component: 'notification',
          type: 'error',
          title: error,
        })
        this.resetTableData({
          pageName: pageName,
          tableName: tableName,
          rowId: fullRow ? rowItem.key : null,
          columnId: key || null,
        })
      }
    },
    async getTableData(pageName, item, query) {
      const API = useApiStore()
      this.sendData[pageName][item.name] =
        typeof item.data === 'string'
          ? await API.getDataForTable(item.data, query)
          : item.data
    },
    showNoty(params) {
      if (params.component === 'message') {
        const type = params.type || 'info'
        this.message[type]({
          content: () => params.title,
          class: params.class,
          style: params.style,
          duration: params.duration || 2,
        })
      } else {
        const type = params.type || 'open'
        this.notification[type]({
          message: params.title,
          description: params.description,
          duration: params.duration || 4,
          class: params.class,
          style: params.style,
          placement: params.placement,
        })
      }
    },
  },
})
