(function(){
    const PENDING = 'pending';
    const RESOLVED = 'resolved';
    const REJECTED = 'rejected';
    function myPromise(excutor){
        const self = this;
        self.status = PENDING;// 保存状态
        self.data = undefined;//保存值
        self.callbacks = [];//保存一组组的回调
        // 调用执行器函数，注入resolve，reject，供promise的使用者去调用
        excutor(reslove,reject);
    }
    function reslove(value){
        // 将pending状态改为resolved
        self.status = RESOLVED;
        self.data = value;
    }
    function reject(reason){
        self.status = REJECTED;
        self.data = reason;
    }
    myPromise.prototype.then = function(onResoved,onRejected){
        console.log('then被调用了')
        this.callbacks.push({onResoved,onRejected})
    }
    myPromise.prototype.catch = function(onRejected){

    }
    myPromise.reslove = function(){

    }
    myPromise.reject = function(){

    }
    myPromise.all = function(){

    }
    myPromise.race = function(){

    }

    window.myPromise = myPromise;
})()