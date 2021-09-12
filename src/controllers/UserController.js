const models = require("../models");
const bcrypt = require("bcryptjs");
const token = require("../services/token");

module.exports = {
  get: async (req, res, next) => {
    try {
      let reg = await models.User.findAll();
      if (reg) {
        res.status(200).json(reg);
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  add: async (req, res, next) => {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      console.log(req.body)
      let reg = await models.User.create(req.body);
      if (reg) {
        res.json({
          message: "Usuario creado con éxito",
          result: reg,
        });
      } else
        res.status(404).send({
          message: "Algo fallo con el Usuario",
        });
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      let id = req.body.id;
      let nuevosDatos = req.body;
      await models.User.findOne({ where: { id: id } }).then((cat) => {
        cat.update(nuevosDatos).then((reg) => {
          res.status(200).json(reg);
        });
      });
    } catch (e) {
      res.status(404).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  activate: async (req, res, next) => {
    try {
      let id = req.body.id;
      await models.User.findOne({ where: { id: id } }).then((cat) => {
        cat.update({status: true}).then((reg) => {
          res.status(200).json(reg);
        });
      });
    } catch (e) {
      res.status(404).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  deactivate: async (req, res, next) => {
    try {
      let id = req.body.id;
      await models.User.findOne({ where: { id: id } }).then((cat) => {
        cat.update({status: false}).then((reg) => {
          res.status(200).json(reg);
        });
      });
    } catch (e) {
      res.status(404).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  login: async (req, res, next) => {
    try {
      const user = await models.User.findOne({
        where: { email: req.body.email, status: true },
      });
      //Existe un usuario con ese email
      if (user) {
        let match = await bcrypt.compare(req.body.password, user.password);
        //Existe un usuario con esa contraseña
        if (match) {
          let tokenReturn = await token.encode(user.id, user.rol, user.email);
          res.status(200).json({ user, tokenReturn });
        } else {
          res.status(403).send({
            message: "Password Incorrecto",
          });
        }
      } else {
        res.status(404).send({
          message: "No existe el usuario",
        });
      }
    } catch (e) {
      console.log("Ocurrió un error", e);
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
