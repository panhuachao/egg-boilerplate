'use strict'
/**
* egg-sequelize
* npm run migrate:up 同步到db
* npm run migrate:down 删除db表
*/
const co = require('co')

module.exports = {
  up: co.wrap(function * (db, Sequelize) {
    // DECIMAL, BLOB, STRING, CHAR, TEXT, SMALLINT, INTEGER, BIGINT, BOOLEAN, DATE, DATEONLY, REAL, 'DOUBLE PRECISION', FLOAT, GEOMETRY, GEOGRAPHY, HSTORE, RANGE, ENUM,
    const { BIGINT, JSON, DATE, STRING } = Sequelize

    yield db.createTable('stations', {
      id: {
        type: BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      station_alias: {
        type: STRING(50),
        allowNull: false
      },
      station_name: STRING(100),
      station_setting: {
        type: JSON
      },
      created_at: DATE,
      updated_at: DATE
    })
  }),

  down: co.wrap(function * (db) {
    yield db.dropTable('stations')
  })
}
