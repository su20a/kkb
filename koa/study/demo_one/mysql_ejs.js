const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const static = require('koa-static')
const Router = require('koa-router')
const myMysql = require('./mysql')
require("./public.js")
const app = new Koa()
// 静态资源路径
const staticPath = './static'
let router = new Router();
app.keys = ['im a newer secret', 'i like turtle'];
app.use(static(
  path.join(__dirname, staticPath)
))
// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
app.use(router.routes());
// app.use(router.allowedMethods());
router.get('/index/:id', async (ctx) => {
  let title = 'hello koa2'
  ctx.cookies.set('name', 'tobi', { signed: true });
  let data = await myMysql.query();
  console.log(ctx.params);
  await ctx.render('index', {
    title,
    data,
    html: '<b>is b flag</b>'
  })
})
router.get('/form', async (ctx) => {
  console.log(ctx.request)
  await ctx.render('form', { data: [] })
})
router.post('/form', async (ctx) => {
  console.log(ctx.request)
  let data = await parsePostData(ctx);
  await ctx.render('form', { data })
})
// let staticRouter = new Router();
// staticRouter.all(/(\.jpg|\.png|\.gif)$/i, static('./static', {
//   maxage: 60 * 86400 * 1000
// }))
// app.use(staticRouter.routes())



app.listen(3000, () => {
  console.log('[demo] server is starting at port 3000');
})


// 解析上下文里node原生请求的POST参数
function parsePostData (ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener('data', (data) => {
        postdata += data
      })
      ctx.req.addListener("end", function () {
        let parseData = parseQueryStr(postdata)
        resolve(parseData)
      })
    } catch (err) {
      reject(err)
    }
  })
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr (queryStr) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log(queryStrList)
  for (let [index, queryStr] of queryStrList.entries()) {
    let itemList = queryStr.split('=')
    queryData[itemList[0]] = decodeURIComponent(itemList[1])
  }
  return queryData
}