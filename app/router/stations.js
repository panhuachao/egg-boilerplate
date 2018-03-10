'use strict'

module.exports = (app) => {
  const { router, controller } = app
  router.get('/stations/:alias', controller.stations.fetch)
  router.post('/stations', controller.stations.create)
}
