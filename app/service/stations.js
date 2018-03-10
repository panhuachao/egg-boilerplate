'use strict'

const Service = require('egg').Service

class Stations extends Service {
  async list ({ offset = 0, limit = 10, order = 'ASC' }) {
    return this.ctx.model.Stations.findAndCountAll({
      offset,
      limit,
      order: [[ order.toUpperCase() ]]
    })
  }

  async find (id) {
    const user = await this.ctx.model.Stations.findById(id)
    if (!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user
  }

  async findByAlias (alias) {
    const user = await this.ctx.model.Stations.findOne({where: {station_alias: alias}})
    if (!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user
  }

  async create (station) {
    return this.ctx.model.Stations.create(station)
  }

  async update ({ id, updates }) {
    const user = await this.ctx.model.Stations.findById(id)
    if (!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user.update(updates)
  }

  async del (id) {
    const user = await this.ctx.model.Stations.findById(id)
    if (!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user.destroy()
  }
}

module.exports = Stations
