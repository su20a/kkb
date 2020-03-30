const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const statics = require('koa-static')
const Router = require('koa-router')
const app = new Koa()
const staticPath = './static'
const router = new Router()
app.use(statics(
  path.join(__dirname, staticPath)
))
app.use(
  views(path.join(__dirname, './view'), {
    extension: 'ejs'
  })
)
app.use(router.routes())
const multer = require('koa-multer')
// 配置
var storage = multer.diskStorage({
  // 文件保存路径
  destination: function (req, file, cb) {
    cb(null, 'static/imgs/') // 注意路径必须存在
  },
  // 修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = file.originalname.split('.')
    console.log(fileFormat)
    cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})
// 加载配置
var upload = multer({
  storage: storage
})

router.post('/uploadImg', upload.single('file'), async (ctx, next) => {
  console.log(ctx.req.file)
  ctx.body = {
    filename: ctx.req.file.filename, // 返回文件名
    body: ctx.req.body
  }
})

router.get('/uploadImg', async (ctx) => {
  console.log('访问了')
  await ctx.render('uploadImg')
})

app.listen(3000, () => {
  console.log(123)
})
