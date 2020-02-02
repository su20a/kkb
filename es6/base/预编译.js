
var x = 1;
if(function f(){}){
    x+= typeof(f);
}
console.log(x);// 1function

var w = {};
(w.y=8  || (w.x=3));
console.log(w)
