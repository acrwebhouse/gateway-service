exports.on = function(app) {
    const httpProxy = require('http-proxy');
    const config = require('../setting/config').config;
    const middleware = require('./middleware').middleware;
    // const {authService,userService,houseService,collectService,companyService,webService} = require('../setting/config').config;
    const authService = config['auth-server'].location
    const userService = config['user-server'].location
    const houseService = config['house-server'].location
    const collectService = config['collect-server'].location
    const companyService = config['company-server'].location
    const webService = config['web-server'].location
    const proxy = httpProxy.createProxyServer({});
    const authServiceUrl = '/auth-service'
    const userServiceUrl = '/user-service'
    const houseServiceUrl = '/house-service'
    const collectServiceUrl = '/collect-service'
    const companyServiceUrl = '/company-service'

    app.all(authServiceUrl + '/*',[middleware.tokenAuth], function(req, res) {
        req.url = req.url.substring(authServiceUrl.length)
        proxy.web(req, res, { target: authService });
    })

    app.all(userServiceUrl + '/*',[middleware.tokenAuth], function(req, res) {
        req.url = req.url.substring(userServiceUrl.length)
        proxy.web(req, res, { target: userService });
    })

    app.all(houseServiceUrl+'/*',[middleware.tokenAuth], function(req, res) {
        req.url = req.url.substring(houseServiceUrl.length)
        proxy.web(req, res, { target: houseService });
    })

    app.all(collectServiceUrl + '/*',[middleware.tokenAuth], function(req, res) {
        req.url = req.url.substring(collectServiceUrl.length)
        proxy.web(req, res, { target: collectService });
    })

    app.all(companyServiceUrl + '/*',[middleware.tokenAuth], function(req, res) {
        req.url = req.url.substring(companyServiceUrl.length)
        proxy.web(req, res, { target: companyService });
    })

    app.all('/*', function(req, res) {
        proxy.web(req, res, { target: webService });
    })

    proxy.on('error', (err, req, res) => {
        console.error('代理过程中发生错误:', err);
        res.status(500).send(err);
      });
}