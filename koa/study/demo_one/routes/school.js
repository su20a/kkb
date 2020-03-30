const Router = require('koa-router')
const route = new Router()
route.get('/querySchool', async ctx => {
  const id = ctx.query.id
  const data = await ctx.mysql.query()
  ctx.body = {
    id,
    code: data
  }
})
module.exports = route
