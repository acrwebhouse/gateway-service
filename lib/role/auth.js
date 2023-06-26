const config = require('../setting/config').config;
const utilsValue = require('../utils/value');
const httpRequest = require('../utils/httpRequest');
const errorMessage = require('../utils/error').message;


function verifyAccessToken(accessToken,callback){
    let url = config['auth-server'].location+'/'+config['auth-server'].restApi.verifyAccessToken
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
            console.log('===verifyAccessToken==body=')
            console.log(body)
            try{
                const res = JSON.parse(body)
                const data = res.data
                callback(true,data);
            }catch(e){
                console.log(e)
                callback(false,"data format error: "+e);
            }
        }
    });
}


exports.verifyAccessToken = verifyAccessToken