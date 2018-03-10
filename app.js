module.exports = app => {
  app.once('server', server => {
    // websocket
    console.log('server started!')
  })
  app.on('error', (err, ctx) => {
    // report error
    if (err) {
      console.error(err)
    }
  })
  app.on('request', ctx => {
    // log receive request
    // ctx.starttime = Date.now()
  })
  app.on('response', ctx => {
    // ctx.starttime is set by framework
    // const used = Date.now() - ctx.starttime
    // console.log(`http response used time: ${used} ms`)
    // log total cost
  })
}
