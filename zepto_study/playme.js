(function(global,factory){
    if(typeof define == 'function' && define.amd){
        defined(function(){
            return factory(global);
        })
    }else{
        factory(global);
    }
}(this,function(window){
    var playme = (function(){
        var $ = {
            add:function(a,b){
                return a+b;
            }
        }
        return $;
    }())
    window.playme = playme;
    window.$ == undefined && (window.$ = playme);
}))