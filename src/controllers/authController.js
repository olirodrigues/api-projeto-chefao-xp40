const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

const AuthController = {
  autenticacao(req, res) {
    const token = jwt.sign(
      {
        user: "frontEndDevs",
      },
      secret.key
    );
    return res.json(token)
  },
};

module.exports = AuthController
