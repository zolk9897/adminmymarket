import { defineStore } from 'pinia'

export const useEditDataStore = defineStore({
  id: 'edit-data',
  state: () => {
    return {
      sendData: [],
    }
  },
  actions: {
    addField({ name, value }) {
      const find = this.sendData.find((el) => el.name === name)
      if (!find) this.sendData.push({ name, value })
      // console.log("sendData", this.sendData)
    },
    setValue(name, value) {
      const find = this.sendData.findIndex((el) => el.name === name)

      // console.log("sendDataStore", this.sendData[find])
      if (find !== -1) this.sendData[find].value = value
    },

    save() {},
  },
  getters: {},
})
