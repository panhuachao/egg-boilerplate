/**
* 创建baseController，可以在子类中使用this.success来执行父类方法
*/
const { Controller } = require('egg')
class BaseController extends Controller {
  get user () {
    return this.ctx.session.user
  }

  success (data) {
    this.ctx.body = {
      success: true,
      data
    }
  }

  notFound (msg) {
    msg = msg || 'not found'
    this.ctx.throw(404, msg)
  }
}
module.exports = BaseController
