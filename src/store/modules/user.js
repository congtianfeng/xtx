//  用户模块
export default {
  namespaced: true,
  state: {
    profile: {
      id: '',
      avatar: '',
      nickname: '123',
      account: '',
      mobile: '',
      token: ''
    }
  },
  mutations: {
    setUser (state, payload) {
      state.profile = payload
    }
  }
}
