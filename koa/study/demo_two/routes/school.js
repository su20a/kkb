const Router = require('koa-router')
const route = new Router()
route.get('/querySchool', async ctx => {
  const data = await ctx.mysql.query()
  await ctx.render('school/school', data)
})
module.exports = route
