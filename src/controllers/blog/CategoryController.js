const models = require("../../models");

module.exports = {
  get: async (req, res, next) => {
    try {
      let reg = await models.Category.findAll();
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
      let reg = await models.Category.create(req.body);
      res.status(200).json({
        result: reg,
      });
    } catch (e) {
      res.status(404).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      let id = req.body.id;
      let nuevosDatos = req.body;
      await models.Category.findOne({ where: { id: id } }).then(
        (cat) => {
          cat.update(nuevosDatos).then((reg) => {
            res.status(200).json(reg);
          });
        }
      );
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
      await models.Category.findOne({ where: { id: id } }).then((cat) => {
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
      await models.Category.findOne({ where: { id: id } }).then((cat) => {
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
