import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './bus'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
// if (process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false
Vue.prototype.$bus = Bus
Vue.use(iview)

// const handleClick = event => {
//   console.log(event)
//   event.stopPropagation()
// }

// let list = [{ name: 'lison' }, { name: 'lili' }]
// const getLiEleArr = (h) => {
//   return list.map((item, index) => h('li', {
//     on: {
//       'click': handleClick
//     },
//     key: `list_item_${index}`
//   }, item.name))
// }


new Vue({
  router,
  store,
  render: h => h(App)
  // render: h => h('div', [
  //   h('ul', {
  //     on: {
  //       'click': handleClick
  //     }
  //   }, getLiEleArr(h))
  // ])
  // render: h => h('div', [
  //   h('span', '111'),
  //   h('span', '222')
  // ])
}).$mount('#app')
