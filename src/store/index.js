import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    cart,
    category
  },
  plugins: [createPersistedState({ key: 'xtx-vuex-store', paths: ['user', 'carts'] })]
})
