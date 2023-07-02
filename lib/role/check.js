const config = require('../setting/config').config;

const checkTokenAuthServiceRestApi = [
    {
        url : '/auth/verifyAccessToken',
        action : 'GET'
    },
    {
        url : '/auth/refreshAccessToken',
        action : 'PUT'
    },
    {
        url : '/auth/logout',
        action : 'DELETE'
    }
]

const checkTokenUserServiceRestApi = [
    {
        url : '/user/getPersonalInfo',
        action : 'GET'
    },
    {
        url : '/user/getUserList',
        action : 'GET'
    },
    {
        url : '/user/editUser',
        action : 'PUT'
    },
    {
        url : '/user/removeUser',
        action : 'DELETE'
    },
    {
        url : '/notification/addNotification',
        action : 'POST'
    },
    {
        url : '/notification/editNotification',
        action : 'PUT'
    },
]

const checkTokenHouseServiceRestApi = [
    {
        url : '/house/addHouse',
        action : 'POST'
    },
    {
        url : '/house/uploadHousePhoto',
        action : 'POST'
    },
    {
        url : '/house/uploadHouseAnnex',
        action : 'POST'
    },
    {
        url : '/house/removeHouse',
        action : 'DELETE'
    },
    {
        url : '/house/editHouse',
        action : 'PUT'
    },
    {
        url : '/reserveHouse/addReserveHouse',
        action : 'POST'
    },
    {
        url : '/reserveHouse/getReserveHousesOnlyHost',
        action : 'GET'
    },
    {
        url : '/reserveHouse/getReserveHousesOnlyClient',
        action : 'GET'
    },
    {
        url : '/reserveHouse/removeReserveHouse',
        action : 'DELETE'
    },
    {
        url : '/reserveHouse/editReserveHouse',
        action : 'PUT'
    },
    {
        url : '/reserveHouse/getReserveHouseOnlyHost',
        action : 'GET'
    },
    {
        url : '/reserveHouse/getReserveHouseOnlyClient',
        action : 'GET'
    },
]

const checkTokenCollectServiceRestApi = [
    {
        url : '/collect/accessTime',
        action : 'GET'
    },
    {
        url : '/collect/getData',
        action : 'GET'
    },
]

const checkTokenCompanyServiceRestApi = [
    {
        url : '/employees/applyEmployees',
        action : 'POST'
    },
    {
        url : '/employees/editEmployees',
        action : 'PUT'
    },
    {
        url : '/employees/getEmployeesListByCompanyId',
        action : 'GET'
    },
    {
        url : '/employees/getPersonalEmployeesInfo',
        action : 'GET'
    },
    {
        url : '/employees/getCurrentPersonalEmployeeInfo',
        action : 'GET'
    },
    {
        url : '/employees/cancelApplyEmployees',
        action : 'PUT'
    },
    {
        url : '/employees/getTeamMembers',
        action : 'GET'
    },
    {
        url : '/house/getTeamUploadHouseCounts',
        action : 'GET'
    },
    {
        url : '/house/getTeamHouses',
        action : 'GET'
    },
    {
        url : '/transaction/applyTransaction',
        action : 'POST'
    },
    {
        url : '/transaction/getTransactionList',
        action : 'GET'
    },
    {
        url : '/transaction/editTransactionNoIncludeCompany',
        action : 'PUT'
    },
    {
        url : '/transaction/removeTransaction',
        action : 'DELETE'
    },
]

const authServiceUrl = '/auth-service'
const userServiceUrl = '/user-service'
const houseServiceUrl = '/house-service'
const collectServiceUrl = '/collect-service'
const companyServiceUrl = '/company-service'

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
    if(url.indexOf(authServiceUrl)===0){
        return isCheckTokenRestApi(url,action,authServiceUrl,checkTokenAuthServiceRestApi)
    }else if(url.indexOf(userServiceUrl)===0){
        return isCheckTokenRestApi(url,action,userServiceUrl,checkTokenUserServiceRestApi)
    }else if(url.indexOf(houseServiceUrl)===0){
        return isCheckTokenRestApi(url,action,houseServiceUrl,checkTokenHouseServiceRestApi)
    }else if(url.indexOf(collectServiceUrl)===0){
        return isCheckTokenRestApi(url,action,collectServiceUrl,checkTokenCollectServiceRestApi)
    }else if(url.indexOf(companyServiceUrl)===0){
        return isCheckTokenRestApi(url,action,companyServiceUrl,checkTokenCompanyServiceRestApi)
    }
    return false;
}

exports.isCheckTokenRestApiAll = isCheckTokenRestApiAll