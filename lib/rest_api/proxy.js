exports.on = function(app) {
    const httpProxy = require('http-proxy');
    const {authService,userService,houseService,collectService,companyService} = require('../setting/config').config;
    const proxy = httpProxy.createProxyServer({});
    const authServiceUrl = '/auth-service'
    const userServiceUrl = '/user-service'
    const houseServiceUrl = '/house-service'
    const collectServiceUrl = '/collect-service'
    const companyServiceUrl = '/company-service'

    app.all(authServiceUrl + '/*', function(req, res) {
        req.url = req.url.substring(authServiceUrl.length)
        proxy.web(req, res, { target: authService });
    })

    app.all(userServiceUrl + '/*', function(req, res) {
        req.url = req.url.substring(userServiceUrl.length)
        proxy.web(req, res, { target: userService });
    })

    app.all(houseServiceUrl+'/*', function(req, res) {
        req.url = req.url.substring(houseServiceUrl.length)
        proxy.web(req, res, { target: houseService });
    })

    app.all(collectServiceUrl + '/*', function(req, res) {
        req.url = req.url.substring(collectServiceUrl.length)
        proxy.web(req, res, { target: collectService });
    })

    app.all(companyServiceUrl + '/*', function(req, res) {
        req.url = req.url.substring(companyServiceUrl.length)
        proxy.web(req, res, { target: companyService });
    })

    proxy.on('error', (err, req, res) => {
        console.error('代理过程中发生错误:', err);
        res.status(500).send(err);
      });
}