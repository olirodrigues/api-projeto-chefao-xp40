const expressJWT = require('express-jwt');
const secret = require('../config/secret.js');

module.exports = expressJWT({
    secret: secret.key,
    algorithms: ["HS256"],
})