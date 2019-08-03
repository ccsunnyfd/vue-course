import { getAppName } from '@/api/app.js'

const actions = {
  updateAppName({ commit }) {
    getAppName().then(res => {
      // console.log(res)
      commit('SET_APP_NAME', res.info.appName)
    }).catch(err => {
      console.log(err)
    })
  }
}
export default actions
