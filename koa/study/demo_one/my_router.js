const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
function getFile(page){
    return new Promise((resolve,reject)=>{
        fs.readFile(`./view/${page}`,'utf8',function(err,data){
            if(err){
                reject(err)
            }else{
                resolve(data);
            }
        })
    })
}
async function router(url){
    let page = '404.html';
    switch(url){
        case '/':
            page = 'index.html'
            break;
        case '/todo':
            page = 'todo.html';
            break;
    }
    let html = await getFile(page);
    return html;
}

app.use(async ctx=>{
    let url = ctx.request.url;
    console.log(url);
    ctx.body = await router(url);
})
app.listen(3000);
console.log('start');