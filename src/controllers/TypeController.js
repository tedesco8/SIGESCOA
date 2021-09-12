const models = require("../models");

module.exports = {
  get: async (req, res, next) => {
    try {
      let reg = await models.Type.findAll();
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
      let reg = await models.Type.create(req.body);
      if (reg) {
        res.json({
          message: "Tipo creado con éxito",
          result: reg,
        });
      } else
        res.status(404).send({
          message: "Algo fallo con el Typee",
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
      await models.Type.findOne({ where: { id: id } }).then((cat) => {
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
      await models.Type.findOne({ where: { id: id } }).then((cat) => {
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
      await models.Type.findOne({ where: { id: id } }).then((cat) => {
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
