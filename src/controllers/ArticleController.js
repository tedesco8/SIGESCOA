const models = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const fs = require("fs");
const path = require("path");
const normalize = require("normalize-path");
const cloudinary = require("../config/cloudinary");

module.exports = {
  get: async (req, res, next) => {
    try {
      //order: [["id", "DESC"]],
      let reg = await models.Article.findAll();
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
      const reg = await models.Article.findOne({
        where: { id: req.query.id },
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
  imageAll: async (req, res, next) => {
    try {
      await cloudinary.v2.search
        .expression("folder:ropa")
        .sort_by("public_id", "desc")
        .max_results(30)
        .execute()
        .then((result) => {
          res.status(200).json(result);
          console.log(result);
        });
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  search: async (req, res, next) => {
    try {
      let value = req.query.value;
      console.log(req.query.value);
      await models.Article.findAll({
        where: {
          name: {
            [Op.like]: "%" + value + "%",
          },
        },
      }).then((reg) => {
        res.status(200).json(reg);
      });
    } catch (e) {
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
  add: async (req, res, next) => {
    try {
      let reg = await models.Article.create({
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        priceUnity: req.body.priceUnity,
        priceWholesale: req.body.priceWholesale,
        stock: req.body.stock,
      });
      if (reg) {
        res.json({
          message: "Articulo creado con éxito",
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
      let ud = {
        name: req.body.name,
        type: req.body.type,
        description: req.body.description,
        priceUnity: req.body.priceUnity,
        priceWholesale: req.body.priceWholesale,
        stock: req.body.stock,
      }
      req.body.image != null && req.body.image != "" && req.body.image != "unidefined" ? ud.image = req.body.image : next
      await models.Article.findOne({ where: { id: req.body.id } }).then((cat) => {
        cat
          .update(ud)
          .then((reg) => {
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
      await models.Article.findOne({ where: { id: id } }).then((cat) => {
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
      await models.Article.findOne({ where: { id: id } }).then((cat) => {
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
  upload: async (req, res, next) => {
    try {
      console.log(req.files.file0.path);
      if (!req.files) {
        return res.status(404).send({
          status: "error",
          message: "file_name",
        });
      }
      let file_path = normalize(req.files.file0.path);
      let file_split = file_path.split("/");
      let file_name = file_split[2];
      let ext_split = file_name.split(".");
      let file_ext = ext_split[1];

      //comprueba la extension
      if (
        file_ext != "png" &&
        file_ext != "jpg" &&
        file_ext != "jpeg" &&
        file_ext != "gif"
      ) {
        //borra el archivo subido
        fs.unlink(file_path, (err) => {
          return res.status(404).send({
            status: "error",
            message: "La extension de la imagen no es valida",
          });
        });
      } else {
        await models.Article.findOne({ where: { id: req.params.id } }).then(
          async (article) => {
            const result = await cloudinary.v2.uploader.upload(file_path, { folder: "ropa"});
            if (result.url) {
              article
                .update({ image: result.url })
                .then((reg) => {
                  res.status(201).json(reg);
                })
                .catch(function (err) {
                  res.status(404).send({
                    status: "error",
                    message: "Error al guardar la imagen",
                  });
                });
            } else {
              console.log("ERROR: upload image: ", result);
              res.status(404).send({
                status: "error",
                message: "Error al guardar la imagen",
              });
            }
          }
        );
      }
    } catch (e) {
      console.log("error imagen", e);
      res.status(500).send({
        message: "Ocurrió un error",
      });
      next(e);
    }
  },
};
