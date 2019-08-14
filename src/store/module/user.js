import { login } from '@/api/user'
import { setToken } from '@/lib/util'

const state = {
  userName: 'Lison'
}
const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}
const mutations = {
  SET_USER_NAME(state, params) {
    state.userName = params
  }
}
const actions = {
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password }).then(res => {
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve()
        } else {
          reject(new Error('错误'))
        }
      }).catch(error => {
        reject(error)
      })
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
