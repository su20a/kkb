const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static')
const Router = require('koa-router')
const app = new Koa()
// 静态资源路径
const staticPath = './static'
let router = new Router();
app.use(static(
  path.join( __dirname,  staticPath)
))
// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

router.get('/index',async ( ctx ) => {
  let title = 'hello koa2'
  await ctx.render('index', {
    title
  })
})
app.use(router.routes());

// let staticRouter = new Router();
// staticRouter.all(/(\.jpg|\.png|\.gif)$/i, static('./static', {
//   maxage: 60 * 86400 * 1000
// }))
// app.use(staticRouter.routes())



app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
})