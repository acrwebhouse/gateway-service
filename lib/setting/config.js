require('dotenv').config()
exports.config = {
    'serverIp':process.env.SERVER_IP || '127.0.0.1',
    'serverPort': process.env.SERVER_PORT || 2000,
    'authService':{
        location: process.env.AUTH_LOCATION ||'http://127.0.0.1:3000',
        preRestApi: '/auth-service',
        restApi:{
            'verifyAccessToken':'auth/verifyAccessToken'
        },
        checkTokenRestApi : [
            {
                url : '/auth/verifyAccessToken',
                action : 'GET'
            },
            {
                url : '/auth/logout',
                action : 'DELETE'
            }
        ]
    },
    'userService':{
        location: process.env.USER_LOCATION ||'http://127.0.0.1:4000',
        preRestApi: '/user-service',
        restApi:{},
        checkTokenRestApi :[
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
    },
    'houseService':{
        location: process.env.HOUSE_LOCATION ||'http://127.0.0.1:5000',
        preRestApi: '/house-service',
        restApi:{},
        checkTokenRestApi :[
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
    },
    'collectService':{
        location: process.env.COLLECT_LOCATION ||'http://127.0.0.1:6000',
        preRestApi: '/collect-service',
        restApi:{},
        checkTokenRestApi :[
            {
                url : '/collect/accessTime',
                action : 'GET'
            },
            {
                url : '/collect/getData',
                action : 'GET'
            },
        ]
    },
    'companyService':{
        location: process.env.COMPANY_LOCATION ||'http://127.0.0.1:7000',
        preRestApi: '/company-service',
        restApi:{},
        checkTokenRestApi :[
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
    },
    'swaggerIp':process.env.SWAGGER_IP || '127.0.0.1'
}