const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

function render(pages){


        return  new Promise((resolve,reject)=>{
            let pageUrl = `./pages/${pages}`;
            fs.readFile(pageUrl,'utf-8',(err,data)=>{
                console.log(444);
                if(err){
                    reject(err)
                }else{
                    console.log(data);
                    resolve(data);
                }
            })
        })

}

async function route(url){
    console.log(url);
    let pages = '404.html';
    switch(url){
        case '/':

            pages ='index.html';
            break;
        case '/index':
            pages ='index.html';
            break;
        case '/todo':
            pages = 'todo.html';
            break;
        case '/404':
            pages = '404.html';
            break;
        default:
            break; 
    }
    let html = await render(pages);

    return html;
}

app.use(async(ctx)=>{
    let url = ctx.request.url;
    let html = await route(url);

    ctx.body=html;
})
app.listen(3000);
console.log('starting at 3000');