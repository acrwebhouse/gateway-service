const utilsValue = require('../utils/value');
const auth = require('../role/auth');
const check = require('../role/check');
const restApiResponse = require('../utils/restApiResponse');
const middleware = {
    tokenAuth: function(req, res, next) {
        const url = req.url
        const action = req.method
        if(check.isCheckTokenRestApiAll(url,action)){
            const token = req.headers['x-token']
            if(utilsValue.isValid(token)){
                auth.verifyAccessToken(token,(result,data)=>{
                    // console.log('===verifyAccessToken====result===',result)
                    // console.log('===verifyAccessToken====data===',data)
                    if(result === true && data.errorCodeValue === restApiResponse.errorCodeValue.isOk){
                        next()
                    }else{
                        res.send(result);
                    }
                })
            }else{
                const response = restApiResponse.create(false,restApiResponse.errorCodeValue.accessTokenInvalid,'x-token undefined')
                res.send(response);
            }
        }else{
            next()
        }
        
    }
}

exports.middleware = middleware