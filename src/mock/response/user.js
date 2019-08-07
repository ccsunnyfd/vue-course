import Mock from 'mockjs'

const Random = Mock.Random

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
    'reg': /[1-9][a-z]/, // 反向生成一个可以匹配它的字符串
    email: Random.email(),
    email2: Mock.mock('@email'),
    range: Random.range(3, 6, 1), // [3, 4, 5]
    date: Random.date('yyyy-MM-dd'),
    time: Random.time('hh:mm'),
    datetime: Random.datetime('yyyy-MM-dd hh:mm'),
    now: Random.now('hour', 'yyyy-MM-dd a hh:mm'),
    // img: Random.image()
    img: Random.image('100x200', '#00ff00', '#ffffff', 'png', 'Lison'),
    img_base64: Random.dataImage(),
    color: Random.color(),
    cword: Random.cword('婉儿螺丝刀', 2, 5),
    cname: Random.cname(),
    email3: Random.email('lison.com'),
    region: Random.region(),
    province: Random.province(),
    city: Random.city(true),
    county: Random.county(true),
    zip: Random.zip(),
    upperFirstLetter: Random.capitalize('lison'),
    pick: Random.pick([1, 2, 3, 4]),
    shuffle: Random.shuffle([1, 2, 3, 4]),
    guid: Random.guid()
  }
  // let i = 3
  // let arr = []
  // while (i--) {
  //   arr.push(template)
  // }
  // return Mock.mock(arr)
  return Mock.mock(template)
}
