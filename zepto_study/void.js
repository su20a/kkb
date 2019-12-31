(function(global,factory){
    if(typeof define == 'function' && difine.amd){
        difine(function(){
            return factory(global);
        })
    }else{
        factory(global);
    }
}(this,function(window){
    var me = (function(){
        return {
            add:function(a,b){
                return a+b;
            }
        }
    }())
    window.me = me;
    window.$ === undefined && (window.$ = me);
}))