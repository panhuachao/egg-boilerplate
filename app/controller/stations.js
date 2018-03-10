'use strict'

const Controller = require('egg').Controller

class StationsController extends Controller {
  async index () {
    this.ctx.body = 'hi, stations!'
  }
  async fetch () {
    const ctx = this.ctx
    ctx.body = await ctx.service.stations.findByAlias(ctx.params.alias)
  }

  async create () {
    const ctx = this.ctx
    const created = await ctx.service.stations.create(ctx.request.body)
    ctx.status = 201
    ctx.body = created
  }
}

module.exports = StationsController
