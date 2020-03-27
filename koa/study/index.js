const Koa = require('koa')
const app = new Koa()
app.use(async (ctx) => {
  const query = ctx.query
  ctx.body = {
    query: query
  }
})
app.listen(3000)
console.log('start_haha')
