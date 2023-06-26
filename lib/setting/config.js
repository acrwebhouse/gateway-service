require('dotenv').config()
exports.config = {
    'serverIp':process.env.SERVER_IP || '127.0.0.1',
    'serverPort': process.env.SERVER_PORT || 2000,
    'auth-server':{
        location: process.env.AUTH_LOCATION ||'http://127.0.0.1:3000',
        restApi:{
            'verifyAccessToken':'auth/verifyAccessToken'
        }
    },
    'user-server':{
        location: process.env.USER_LOCATION ||'http://127.0.0.1:4000',
        restApi:{}
    },
    'house-server':{
        location: process.env.HOUSE_LOCATION ||'http://127.0.0.1:5000',
        restApi:{}
    },
    'collect-server':{
        location: process.env.COLLECT_LOCATION ||'http://127.0.0.1:6000',
        restApi:{}
    },
    'company-server':{
        location: process.env.COMPANY_LOCATION ||'http://127.0.0.1:7000',
        restApi:{}
    },
    'web-server':{
        location: process.env.WEB_LOCATION ||'http://127.0.0.1:8080',
        restApi:{}
    },
    'swaggerIp':process.env.SWAGGER_IP || '127.0.0.1'
}