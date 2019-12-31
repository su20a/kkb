(function(global,factory){
    if(typeof define == 'function' && define.amd){
        define(function(){
            return factory(global);
        })
    }else{
        factory(global);
    }
}(this,function(window){
    var playme = (function(){
        var defaultConfig = {
            data:['今天','明天','后天']
        };
        return {
            init:function(select,config){
                var c = {};
                Object.assign(c,defaultConfig,config);
                var dom = this.extends.getDom(select);
                for(var i=0,len=dom.length;i<len;i++){
                    dom[i].innerHTML = this.extends.joinStr(c.data);
                }
                var closeBtns = this.extends.getDom('.closeBtn');
                for(var i=0,len=closeBtns.length;i<len;i++){
                    closeBtns[i].addEventListener('click',function(e){
                        e.target.parentNode.remove();
                    })
                }
            }
        }
    }()); 
    window.playme = playme;
    window.$6 == undefined && (window.$6 = playme);
}));
(function(playme){
    var ex = playme.extends = {};
    ex.getDom = function(sel){
        return document.querySelectorAll(sel);
    };
    ex.joinStr = function(data){
        var str = "<ul>";
        for(var i=0,len=data.length;i<len;i++){
            str+="<li style='display:inline-block;height:30px; \
            line-height:30px;background:pink;margin-right:8px;padding:0px 10px;border-radius:6px;'>"+data[i]+"<b class='closeBtn'>X</b></li>"   
        }
        str += "</ul>"
        return str;
    }
})(playme)