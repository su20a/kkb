let arr = [
  { id: 1, name: 'lisi' },
  { id: 2, name: 'wangwu' },
  { id: 3, name: 'zhaosi' },
  { id: 4, name: 'laowang' }
]
let filterArr = arr.filter(item => {
  return item.id % 2 === 0
})
console.log(filterArr)

let id = arr.reduce((init, item) => {
  init.push(item.id)
  return init
}, [])
console.log(id)

// map 返回的数据长度和原数组长度是一致的,如果没有返回 就是undefined
let names = arr.map(item => {
  if (item.id % 2 === 0) {
    return item.name
  }
})
console.log(names)

var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];
// 获取 isForceUser为true的 pilotingScore和shootingScore的总和
let total = personnel
  .filter(item => item.isForceUser)
  .map(item => item.pilotingScore + item.shootingScore)
  .reduce((init, item) => init + item)
console.log(total)

var ob = { id: 1, name: 'lisi', school: 'yuncheng' }
var { id: myId, name: myName } = ob
console.log('%s,我叫%s', myId, myName)


// set 数据
var setOne = new Set
setOne.add('a', 'su')
setOne.add('tian')
var keys = setOne.entries()
console.log(keys)

// map 数据
var mapOne = new Map
mapOne.set("name", "lisi")
mapOne.set("age", 12)
console.log(mapOne.get('name'))

// 访问器属性
var dataO = {
  _name: 'lis',
  get name () {
    return this._name + '嘻嘻'
  },
  set name (val) {
    _name = val
  }
};
console.log(dataO.name)