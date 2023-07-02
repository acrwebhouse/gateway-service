const utilsValue = require('../utils/value');
const auth = require('../role/auth');
const check = require('../role/check');
const middleware = {
    tokenAuth: function(req, res, next) {
        const url = req.url
        const action = req.method
        console.log('===middleware====req.action===',req.method)
        if(check.isCheckTokenRestApiAll(url,action)){
            const token = req.headers['x-token']
            if(utilsValue.isValid(token)){
                auth.verifyAccessToken(token,(result,data)=>{
                    console.log('===verifyAccessToken====result===',result)
                    console.log('===verifyAccessToken====data===',data)
                    next()
                })
            }else{
                const response = {
                    status : false,
                    data :"x-token undefined"
                }
                res.send(response);
            }
        }else{
            console.log('====2222==')
            next()
        }
        
    }
}

exports.middleware = middleware