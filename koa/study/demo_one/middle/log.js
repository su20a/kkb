function log(ctx,next){
    console.log(ctx.method,ctx.header.host+ctx.url)
    next();
}
function sleep(next){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           console.log('定时器');
           resolve();
        }, 5000);
    })
    
}
module.exports = function(){
    return async function(ctx,next){
        await sleep();
        await log(ctx,next);
    }
}