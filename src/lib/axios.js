import axios from 'axios'
import { baseURL } from '@/config'
import { getToken } from '@/lib/util'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    }
    return config
  }
  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      // Spin.show()
      if (!Object.keys(this.queue).length) {
        /* Spin.show() */
      }
      this.queue[url] = true
      config.headers['Authorization'] = getToken()
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      // console.log(res)
      delete this.queue[url]
      const { data } = res
      return data
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options) // 合并选项值
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
