exports.on = function(app) {
    const httpProxy = require('http-proxy');
    const config = require('../setting/config').config;
    const middleware = require('./middleware').middleware;
    const proxy = httpProxy.createProxyServer({});
    const {authService,userService,houseService,collectService,companyService} = config

    app.all(authService.preRestApi + '/*',[middleware.tokenAuth], function(req, res) {
        req.url = req.url.substring(authService.preRestApi.length)
        proxy.web(req, res, { target: authService.location });
    })

    app.all(userService.preRestApi + '/*',[middleware.tokenAuth], function(req, res) {
        req.url = req.url.substring(userService.preRestApi.length)
        proxy.web(req, res, { target: userService.location });
    })

    app.all(houseService.preRestApi+'/*',[middleware.tokenAuth], function(req, res) {
        req.url = req.url.substring(houseService.preRestApi.length)
        proxy.web(req, res, { target: houseService.location });
    })

    app.all(collectService.preRestApi + '/*',[middleware.tokenAuth], function(req, res) {
        req.url = req.url.substring(collectService.preRestApi.length)
        proxy.web(req, res, { target: collectService.location });
    })

    app.all(companyService.preRestApi + '/*',[middleware.tokenAuth], function(req, res) {
        req.url = req.url.substring(companyService.preRestApi.length)
        proxy.web(req, res, { target: companyService.location });
    })

    app.all(systemService.preRestApi + '/*',[middleware.tokenAuth], function(req, res) {
        req.url = req.url.substring(systemService.preRestApi.length)
        proxy.web(req, res, { target: systemService.location });
    })
    
    proxy.on('error', (err, req, res) => {
        // console.error('代理过程中发生错误:', err);
        res.status(500).send(err);
      });
}