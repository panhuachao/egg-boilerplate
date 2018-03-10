/*
* 日志中间件
*/
module.exports = options => {
  return async function logsHandler (ctx, next) {
    const starttime = Date.now()
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    await next()
    const usedTime = Date.now() - starttime
    console.log(`request used time: ${usedTime}ms`)
  }
}
