import Mock from 'mockjs'
import { getUserInfo } from './response/user'

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)

Mock.setup({
  timeout: 0
})

export default Mock
