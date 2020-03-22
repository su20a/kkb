function w(x){
    console.log(x);
}
// 正则匹配一个数字
var reg = /^[+-]?(\d|[1-9]+)(\.\d+)?$/;
w(reg.test('-8.p'))