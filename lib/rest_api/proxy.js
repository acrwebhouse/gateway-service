exports.on = function(app) {
    // const config = require('../setting/config').config;
    const httpProxy = require('http-proxy');
    const {authService,userService,houseService,collectService,companyService} = require('../setting/config').config;
    // 创建代理服务器实例
    const proxy = httpProxy.createProxyServer({});


    app.all('/auth-service/*', function(req, res) {
        console.log('=========111=====authService==',authService)
        proxy.web(req, res, { target: authService });
    })

    app.all('/house-service/*', function(req, res) {
        console.log('=========2222=====houseService==',houseService)
        // proxy.web(req, res, { target: houseService });
        proxy.web(req, res, { target: 'http://35.234.42.100:5000' });
    })

    proxy.on('error', (err, req, res) => {
        console.error('代理过程中发生错误:', err);
        res.status(500).send('代理服务器发生错误');
      });
}