const jwt = require("jsonwebtoken");
const models = require("../models");

//valida que el token sea valido y si ya expiro, genera uno nuevo, de lo contrario no genera nada.
async function checkToken(token) {
  let __id = null;
  try {
    const { id } = await jwt.decode(token);
    __id = id;
  } catch (e) {
    return false;
  }

  const user = await models.User.findOne({ where: { id: __id, status: true } });

  if (user) {
    const token = jwt.sign({ id: __id }, "clavesecretatoken", {
      expiresIn: "1d",
    });
    return { token, rol: user.rol };
  } else {
    return false;
  }
}

module.exports = {
  //genera el token
  encode: async (id, rol, email) => {
    const token = jwt.sign(
      { id: id, rol: rol, email: email },
      "clavesecretatoken",
      { expiresIn: "1d" }
    );
    return token;
  },
  //decodifica el token
  decode: async (token) => {
    try {
      const { id } = await jwt.verify(token, "clavesecretatoken");
      const user = await models.User.findOne({
        where: { id: id, status: true },
      });
      if (user) {
        return user;
      } else {
        return false;
      }
    } catch (e) {
      const newToken = await checkToken(token);
      return newToken;
    }
  },
};
