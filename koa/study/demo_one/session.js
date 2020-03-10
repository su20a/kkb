const Koa = require('koa')
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')

const app = new Koa()

// 配置存储session信息的mysql
let store = new MysqlSession({
  user: 'su20a',
  password: 'SJf203502',
  database: 'su20a',
  host: '49.234.67.31',
})

// 存放sessionId的cookie配置
let cookie = {
    domain:'127.0.0.1', // 写cookie所在的域名
    path:'/',       // 写cookie所在的路径
    maxAge:1000*60*60*24,   // cookie有效时长
    expires:new Date('2021-12-31'), // cookie失效时间
    httpOnly:false,  // 是否只用于http请求中获取
    overwrite:false  // 是否允许重写

}

// 使用session中间件
app.use(session({
  key: 'SESSION_ID',
  store: store,
  cookie: cookie
}))

app.use( async ( ctx ) => {

  // 设置session
  if ( ctx.url === '/set' ) {
    ctx.session = {
      user_id: Math.random().toString(36).substr(2),
      count: 0
    }
    ctx.body = ctx.session
  } else if ( ctx.url === '/' ) {

    // 读取session信息
    ctx.session.count = ctx.session.count + 1
    ctx.body = ctx.session
  } 

})

app.listen(3000)
console.log('[demo] session is starting at port 3000')