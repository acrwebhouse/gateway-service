require('dotenv').config()
exports.config = {
    'serverIp':process.env.SERVER_IP || '127.0.0.1',
    'serverPort': process.env.SERVER_PORT || 5001,
    'auth-service': process.env.HOUSE_BASIC_LOCATION ||'http://127.0.0.1:3000',
    'user-service': process.env.HOUSE_BASIC_LOCATION ||'http://127.0.0.1:4000',
    'house-service': process.env.HOUSE_BASIC_LOCATION ||'http://127.0.0.1:5000',
    'collect-service': process.env.HOUSE_BASIC_LOCATION ||'http://127.0.0.1:6000',
    'company-service': process.env.HOUSE_BASIC_LOCATION ||'http://127.0.0.1:7000',
    'swaggerIp':process.env.SWAGGER_IP || '127.0.0.1',
    'nasDir': process.env.NAS_DIR || '/Users/chris/Documents/work/ACR/nas_dir'
}