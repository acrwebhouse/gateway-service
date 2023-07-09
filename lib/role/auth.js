const config = require('../setting/config').config;
const utilsValue = require('../utils/value');
const httpRequest = require('../utils/httpRequest');
const errorMessage = require('../utils/error').message;


function verifyAccessToken(accessToken,callback){
    let url = config['authService'].location+'/'+config['authService'].restApi.verifyAccessToken
    const method = 'GET';
    const headers = {
        'x-token' : accessToken
    };
    httpRequest.sendGetRequest(url, headers, method, (error, body) => {
        if (error) {
            console.log('===verifyAccessToken==url=')
            console.log(url)
            console.log('===verifyAccessToken==error=')
            console.log(error)
            console.log('===verifyAccessToken==body=')
            console.log(body)
            callback(false,body);
        } else {
            try{
                const res = JSON.parse(body)
                const status = res.status
                callback(status,res);
            }catch(e){
                console.log(e)
                callback(false,"data format error: "+e);
            }
        }
    });
}


exports.verifyAccessToken = verifyAccessToken