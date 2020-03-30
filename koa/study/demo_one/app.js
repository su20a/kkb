const Koa = require('koa')
const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const path = require('path')
const urls = fs.readdirSync(path.resolve('routes'))
const app = new Koa()
const mysql = require('./mysql')
const views = require('koa-views')
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))
app.context.mysql = mysql
urls.forEach((element) => {
  // routes里的js接口文件
  const module = require(path.resolve('routes') + '\\' + element)
  // routes里的文件名作为 路由名
  router.use('/' + element.replace('.js', ''), module.routes())
})

// 使用路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
