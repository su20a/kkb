function observe(data){
    if(!data || typeof data !== 'object'){
        return;
    }
    Object.keys(data).forEach(function(key){
        defineReactive(data,key,data[key]);
    })
}
function defineReactive(data,key,val){
    observe(val);
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:false,
        get:function(){
            return val;
        },
        set:function(newVal){
            val = newVal;
            console.log("值改变了");
            return val;
        }
    })
}

function Dep(){
    this.sub = [];
}
Dep.prototype = {
    addSub:function(sub){
        this.subs.push(sub);
    },
    notify:function(){
        this.subs.forEach(function(sub){
            sub.update();
        })
    }
}