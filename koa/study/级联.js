const Koa = require('koa');
const app = new Koa();

// x-response-time
app.keys = ['im a newer secret', 'i like turtle'];
app.use(async (ctx, next) => {
  const start = Date.now();
  ctx.state.user = 'wawa';
  await next();
  const ms = Date.now() - start;
  ctx.cookies.set('name', 'tobi', { signed: true });
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(ctx.state.user);
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);