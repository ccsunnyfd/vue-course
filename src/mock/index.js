import Mock from 'mockjs'
import { getUserInfo } from './response/user'
import { getTableData, getFolderList, getFileList } from './response/data'
const Random = Mock.Random

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
Mock.mock(/\/getTableData/, 'get', getTableData)
Mock.mock(/\/getFolderList/, 'get', getFolderList)
Mock.mock(/\/getFileList/, 'get', getFileList)

Mock.setup({
  timeout: 0
})

Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  }
})

export default Mock
