const jwt = require('jsonwebtoken');
const secret = require('../configs/secret');

const authController = {
    autenticacao (req, res) {
        const token = jwt.sign(
            {
                user: "frontEndDevs",
            },
            secret.key
        )
    }

}