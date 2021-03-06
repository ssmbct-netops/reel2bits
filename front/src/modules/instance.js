import Vue from 'vue'

const defaultState = {
  registrationOpen: true,
  name: 'reel2bits',
  description: 'A reel2bits instance',
  backendVersion: '',
  frontendVersion: '',
  tos: '',
  sourceUrl: '',
  redirectRootNoLogin: '/main/all',
  redirectRootLogin: '/main/friends',
  restrictedNicknames: [],
  trackSizeLimit: 13107200, // bytes, default: 100mb
  sentryDsn: null,
  announcement: null
}

const instance = {
  state: defaultState,
  mutations: {
    setInstanceOption (state, { name, value }) {
      if (typeof value !== 'undefined') {
        Vue.set(state, name, value)
      }
    }
  },
  actions: {
    setInstanceOption ({ commit, dispatch }, { name, value }) {
      commit('setInstanceOption', { name, value })
      switch (name) {
        case 'name':
          dispatch('setPageTitle')
          break
      }
    }
  }
}

export default instance
