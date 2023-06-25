exports.on = function(app) {

    app.get('/auth-service', function(req, res) {

        /* #swagger.security = [{
               "apiKeyAuth": []
        }],
        #swagger.parameters['isDelete'] = {
            in: 'query',
            type: 'boolean',
        }
        */

        const id = req.query.id
        const isDelete = req.query.isDelete
        
        const response = {
            'status':result,
            'data':data
        }
        res.send(response)
    })
}