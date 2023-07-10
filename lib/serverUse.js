exports.on = function(app) {
  const swaggerUi = require('swagger-ui-express')
  const swaggerFile = require('../swagger_output.json') // 剛剛輸出的 JSON
  const cors = require('cors')
  const cookieParser = require("cookie-parser");
  app.use(cookieParser());
  app.use(cors())
  app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}
