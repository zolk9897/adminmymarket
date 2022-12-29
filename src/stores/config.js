import { defineStore } from 'pinia'

export const useConfigStore = defineStore({
  id: 'config',
  state: () => {
    return {
      collapsedMenu: false,
    }
  },
  actions: {},
  getters: {},
})
