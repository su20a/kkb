const Koa = require('koa')
const Router = require('koa-router')
const mysql = require('./mysql3.30.js')
const views = require('koa-views')
const path = require('path')
const app = new Koa
const router = new Router
app.use(router.routes())
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

router.get('/index', async (ctx) => {
  let data = await mysql.query('select * from emp')
  ctx.body = data
})

app.listen(3000, () => {
  console.log('3000')
})
