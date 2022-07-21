module.exports = {
  pages:{
    index:{
      entry:"src/main.js"
    }
  },
  lintOnSave:false,
  //开启代理服务 方式1 代理服务器
  // devServer: {
  //   proxy: 'http://localhost:8080'
  // },
  /**
   *  参考地址: https://cli.vuejs.org/zh/config/#devserver-proxy
   *  1.优点：配置简单，请求资源时直接发给前端(8080)即可
   *  2.缺点：不能配置多个代理，不能灵活的控制请求是否走代理。
   *  3.工作方式：若按照上述配置，当请求了前端不存在的资源时，那么该 请求会转发给服务器(优先匹配前端资源)
   */
  //开启代理服务 方式2
  // devServer:{
  //   proxy:{
  //     "/api":{
  //       target:"http://localhost:8080",
  //       pathRewrite:{'^/api':'/'},
  //       ws:true, //支持websocket
  //       changeOrigin:true, //是否请求跨域 changOrigin 设置为true 请求直接时target请求 false是本地服务请求
  //     }
  //   }
  // },
  /**
   * 1.优点：可以配置多个代理，且可以灵活的控制请求是否走代理
   * 2.缺点：配置略微繁琐，请求资源时必须加前缀
   */
}
