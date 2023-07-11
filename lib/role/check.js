const config = require('../setting/config').config;
const {authService,userService,houseService,collectService,companyService} = config

function isCheckTokenRestApi(url,action,serviceUrl,checkRestApi){
    url = url.substring(serviceUrl.length)
    for(let i = 0 ;i<checkRestApi.length;i++){
        if(url.indexOf(checkRestApi[i].url) === 0 && action === checkRestApi[i].action){
            return true;
        }
    }
    return false;
}

function isCheckTokenRestApiAll(url,action){
    if(url.indexOf(authService.preRestApi)===0){
        return isCheckTokenRestApi(url,action,authService.preRestApi,authService.checkTokenRestApi)
    }else if(url.indexOf(userService.preRestApi)===0){
        return isCheckTokenRestApi(url,action,userService.preRestApi,userService.checkTokenRestApi)
    }else if(url.indexOf(houseService.preRestApi)===0){
        return isCheckTokenRestApi(url,action,houseService.preRestApi,houseService.checkTokenRestApi)
    }else if(url.indexOf(collectService.preRestApi)===0){
        return isCheckTokenRestApi(url,action,collectService.preRestApi,collectService.checkTokenRestApi)
    }else if(url.indexOf(companyService.preRestApi)===0){
        return isCheckTokenRestApi(url,action,companyService.preRestApi,companyService.checkTokenRestApi)
    }
    return false;
}

exports.isCheckTokenRestApiAll = isCheckTokenRestApiAll