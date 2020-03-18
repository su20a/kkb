// 对象进行转换的时候 都是先调用valueOf 当valueOf返回的还是对象时,接着调用toString方法(否则不调用)
Array.prototype.toString = function () {
  console.log('调用了toString方法')
  return 3
}
Array.prototype.valueOf = function () {
  console.log('调用了valueOf方法')
  return this
}

var arr = [];
console.log([] + {})