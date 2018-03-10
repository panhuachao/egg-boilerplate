'use strict'
// 生产环境配置
exports.sequelize = {
  dialect: 'postgres',
  database: 'example-prod',
  host: 'localhost',
  port: '5432',
  username: 'postgres',
  password: 'password'
}
