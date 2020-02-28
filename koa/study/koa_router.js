const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();

router.get('/',function(ctx,next){
    ctx.body = "hello koa";
});
app.use(router.routes())
.use(router.allowedMethods());
app.listen(3000,()=>{
    console.log('start');
})