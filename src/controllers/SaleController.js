const models = require("../models");

async function aumentarStock(idarticulo, cantidad) {
  await models.Article.findOne({ where: { id: idarticulo } }).then((cat) => {
    let stock = cat.stock;
    let nStock = parseInt(stock) + parseInt(cantidad);
    cat
      .update({ stock: nStock })
      .then((reg) => {
        res.status(200).json(reg);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

async function disminuirStock(idarticulo, cantidad) {
  await models.Article.findOne({ where: { id: idarticulo } }).then((cat) => {
    let stock = cat.stock;
    let nStock = parseInt(stock) - parseInt(cantidad);
    cat
      .update({ stock: nStock })
      .then((reg) => {
        res.status(200).json(reg);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

module.exports = {
  get: async (req, res, next) => {
    try {
      let reg = await models.Sale.findAll();
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
  query: async (req, res, next) => {
    try {
      console.log(req.query.id);
      const reg = await models.Sale.findOne({
        where: { id: req.query.id },
        include: [
          {
            model: models.DetailSale,
            as: "detailSale",
          },
        ],
      });
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
      let reg = await models.Sale.create({
        client: req.body.client,
        user: req.body.user,
        voucherType: req.body.voucherType,
        voucherSeries: req.body.voucherSeries,
        voucherNum: req.body.voucherNum,
        tax: req.body.tax,
        total: req.body.total,
        payment: req.body.payment,
      });
      if (!reg) {
        res.status(404).send({
          message: "Error al crear la venta",
        });
      } else {
        let details = req.body.details;
        for (var i = 0; i < details.length; i++) {
          details[i].sale = reg.id;
        }
        await models.DetailSale.bulkCreate(details);
        res.status(200).json({
          message: "Venta creada con éxito",
          result: reg,
        });
      }
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error en el servidor",
      });
      next(e);
    }
  },
  update: async (req, res, next) => {
    try {
      let id = req.body.id;
      let nuevosDatos = {
        client: req.body.client,
        user: req.body.user,
        voucherType: req.body.voucherType,
        voucherSeries: req.body.voucherSeries,
        voucherNum: req.body.voucherNum,
        tax: req.body.tax,
        total: req.body.total,
        payment: req.body.payment,
      };
      await models.Sale.findOne({ where: { id: id } }).then((cat) => {
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
      await models.Sale.findOne({ where: { id: id } }).then((cat) => {
        cat.update({ status: true }).then((reg) => {
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
      await models.Sale.findOne({ where: { id: id } }).then((cat) => {
        cat.update({ status: false }).then((reg) => {
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
