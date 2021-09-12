const models = require("../models");

module.exports = {
  check: async (req, res, next) => {
    const { email } = req.params;
    try {
      let reg = await models.Client.findOne({
        where: {
          email: email,
        },
      });
      if (reg) {
        res.json({
          message: "El cliente existe",
          result: true,
        });
      } else {
        res.json({
          message: "El cliente no existe",
          result: false,
        });
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  get: async (req, res, next) => {
    try {
      let reg = await models.Client.findAll();
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
      let reg = await models.Client.create(req.body);
      if (reg) {
        res.json({
          message: "Cliente creado con éxito",
          result: reg,
        });
      } else
        res.status(404).send({
          message: "Algo fallo con el cliente",
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
      await models.Client.findOne({ where: { id: id } }).then((cat) => {
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
      await models.Client.findOne({ where: { id: id } }).then((cat) => {
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
      await models.Client.findOne({ where: { id: id } }).then((cat) => {
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
};
