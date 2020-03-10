const Koa = require('koa');
const loggerAsync = require('./middle/log');
const app = new Koa();
app.use(loggerAsync());
app.use(ctx=>{
    ctx.body = 'hahaha0';
})
app.listen(3000);