exports.keys='1706b'

exports.security = {
    csrf: {
      enable: false,
    },
  };
  exports.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'root',
      // 数据库名
      database: 'list',
    }
  }
