import { login } from '@/api/user'

const state = {
  userName: 'Lison'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  login ({ commit }, { userName, password }) {
    login({ userName, password }).then(res => {
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }
}

export default {
  // namespaced: true,
  getters,
  state,
  mutations,
  actions
}
