// 对象进行转换的时候 都是先调用valueOf 当valueOf返回的还是对象时,接着调用toString方法(否则不调用)
// Array.prototype.toString = function () {
//   console.log('调用了toString方法')
//   return 3
// }
// Array.prototype.valueOf = function () {
//   console.log('调用了valueOf方法')
//   return this
// }
// var arr = [];
// console.log([] + {})

/*
var n = 10;
function fn () {
  var n = 20;
  function f () {
    n++;
    console.log(n)
  }
  f();
  return f;
}
var x = fn(); // 21
x(); //22
x();  //23
console.log(n)
*/

// 同名情况下 不管先后 变量提升的结构都是函数保留
/* console.log(fn)
var fn = 3
function fn () {
  console.log(1);
} */


// 同样的函数多次声明 后面的声明的函数会覆盖前面的
/* test()
function test () {
  console.log(1)
}
function test () {
  console.log(2)
}
 */

/* let a = 10,
  b = 10;
let fn = function () {
  // 注意  因为下面 let a = 20 在这个作用域重新声明了变量a 在声明之前使用a 导致报错(即暂时性死区)
  console.log(a, b);//=>Uncaught ReferenceError: a is not defined
  let a = b = 20;  // a是声明  b是赋值
   // let a=20;
  //  b=20; //=>把全局中的 b=20 
  console.log(a, b);
};
fn();
console.log(a, b); */

// 关于基础值的传参
/* var a = 12,
  b = 13,
  c = 14;
function fn (a) {
  console.log(a, b, c);//=>12 undefined 14(C是全局的)
  var b = c = a = 20;
  console.log(a, b, c);//=>20*3
}
// 注意 全局变量a 当参数传给fn函数,无论函数中怎么处理a  全局的a的值都不会变(按值传递)
fn(a);//=>把FN执行(小括号中是实参:值) =>执行FN把全局变量A的值12当做实参传递给函数的形参 =>fn(12)
console.log(a, b, c);//=>12 13 20 */


// 按引用传递
/* var ary = [12, 23];
function fn (ary) {
  console.log(ary); // [12,23]
  ary[0] = 100;  // 全局arr [100,23]
  ary = [100];
  ary[0] = 0;
  console.log(ary); // [0]
}
fn(ary);
console.log(ary); //[100,23] */

// 函数的作用域取决于该函数定义时的作用域
/* var number = 4
function a () {
  console.log(arguments.callee.caller) // 返回是谁调用的这个函数  如果是全局调用返回null
  console.log(number)
}
function b () {
  var number = 5
  a()
}
b()  // 输出4 */


// 关于闭包
/* var i = 2;
function fn () {
  i += 2;
  return function (n) {
    console.log(n + (--i));
  }
}
var f = fn();
f(2);  // i 4   2+3  5
f(3);  // i 3   3+2  5
fn()(2); // i 4  2+3  5
fn()(3); // i 5 3+4   7
f(4);   // i 4  4+3   7 */


// 对象属性是一个立即执行函数  注意的点是 立即执行函数有多种写法 不如下面的写法 return字符串3 但还是经过+的处理  +'3'  最后b的值是数字类型的3
// 比如把加号改为~  也可以是立即执行函数, 但是返回的值要经过取反处理
/* var obj = {
  a: 'xixi',
  b: ~function () {
    return '7';
  }()
}
console.log(JSON.stringify(obj)) */

// 判断体中函数的变量提升
/* function test () {
  console.log(num) // 判断体中的函数只会声明 此处num值未undefined
  if (1 == 1) {
    function num () {
      console.log(34)
    }
  }
}
test() */

// 在if语句中不管条件是否成立 var声明的变量都要进行变量提升

// use strict  开启js的严格模式
// 1.在严格模式下不支持使用 “arguments.callee / arguments.callee.caller” （Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them）
// 2.在严格模式下ARGUMENTS和形参没有映射机制
// 3.在严格模式下不允许给一个对象设置重复属性名的：“obj={n:10,n:20}”
// 4.在严格模式下，函数执行，如果没有明确指定执行的主体（函数前面没有点），不再像非严格模式下一样，统一都交给window，而是让this指向undefined，代表没有执行主体：“严格模式下，有执行主体this就指向谁，没有执行主体，this就是undefined”
// 5.高程三，最后有严格模式和非严格模式汇总


// A&&B  如果A为真则 用B  如果A为假 则就用A
/* var b = 1 && 0
console.log(b) */


// 数组去重
var arr = [1, 2, 3, 2, 3, 421, 1]
function unique (arr) {
  var obj = {}
  for (var i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      arr[i] = arr[arr.length - 1]
      arr.pop()
      i--
    } else {
      obj[arr[i]] = 1
    }
  }
}
unique(arr)
console.log(arr)