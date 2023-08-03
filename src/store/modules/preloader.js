export default {
  state: {
    showPreloader: false,
  },

  getters: {
    showPreloader(state) {
      return state.showPreloader
    },
  },

  mutations: {
    updateShowPreloader(state, status) {
      state.showPreloader = status
    },
  },

  actions: {
    changePreloader(ctx, status) {
      ctx.commit('updateShowPreloader', status)
    },
  }
}