require('dotenv').config()
exports.config = {
    'serverIp':process.env.SERVER_IP || '127.0.0.1',
    'serverPort': process.env.SERVER_PORT || 2000,
    'authService': process.env.AUTH_LOCATION ||'http://127.0.0.1:3000',
    'userService': process.env.USER_LOCATION ||'http://127.0.0.1:4000',
    'houseService': process.env.HOUSE_LOCATION ||'http://127.0.0.1:5000',
    'collectService': process.env.COLLECT_LOCATION ||'http://127.0.0.1:6000',
    'companyService': process.env.COMPANY_LOCATION ||'http://127.0.0.1:7000',
    'webService': process.env.WEB_LOCATION ||'http://127.0.0.1:8080',
    'swaggerIp':process.env.SWAGGER_IP || '127.0.0.1'
}