import Mock from 'mockjs'

export const getUserInfo = (options) => {
  const template = {
    'str|2-4': 'lison',
    'name|5': 'lison',
    'age|+2': 18,
    'num|4-10': 0,
    'float|3-10.2-5': 0,
    'bool|1': true, // 1/2的概率
    'bool2|1-9': true, // min/(min+max)的概率
    'obj|2': { // 随机抽取2个
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'obj2|1-2': { // 随机抽取1-2个
      a: 'aa',
      b: 'bb',
      c: 'cc'
    },
    'ar|2-4': [1, 2, 3], // 重复2-4遍
    'arr2|2': ['a', 'b'],
    'func': () => {
      return 'this is created by function'
    },
    'reg': /[1-9][a-z]/ // 反向生成一个可以匹配它的字符串
  }
  // let i = 3
  // let arr = []
  // while (i--) {
  //   arr.push(template)
  // }
  // return Mock.mock(arr)
  return Mock.mock(template)
}
