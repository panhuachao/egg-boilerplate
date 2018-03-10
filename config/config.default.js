'use strict'

module.exports = appInfo => {
  const config = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1520669311119_8059'
  // postgreSQL 数据库
  config.sequelize = {
    dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
    database: 'donor_rights',
    host: 'localhost',
    port: '5432',
    username: 'donor',
    password: 'donor'
  }
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = [ 'gzip', 'errorHandler', 'logsHandler' ]
  // 对请求体做json parse处理
  config.bodyParser = {
    enable: true,
    jsonLimit: '10mb'
  }
  // 配置 gzip 中间件的配置
  config.gzip = {
    threshold: 1024 // 小于 1k 的响应体不压缩
  }
  // 只对 / 前缀的 url 路径生效
  config.errorHandler = {
    match: '/'
  }
  // 关闭csrf https://github.com/eggjs/egg/issues/562
  config.security = {
    csrf: {
      enable: false
    }
  }
  // 端口号
  config.cluster = {
    listen: {
      port: 3001,
      hostname: '127.0.0.1'
      // path: '/var/run/egg.sock',
    }
  }
  return config
}
