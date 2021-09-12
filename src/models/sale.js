const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const DetailSale = require("./detail_sale");

const Sale = sequelize.define(
  "sales",
  {
    //identificacion
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    //cliente
    client: {
      type: Sequelize.INTEGER,
      references: {
        model: "clients",
        key: "id",
      },
    },
    //usuario
    user: {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    //tipo comprobante
    voucherType: {
      type: Sequelize.STRING,
    },
    //serie comprobante
    voucherSeries: {
      type: Sequelize.STRING,
    },
    //num comprobante
    voucherNum: {
      type: Sequelize.STRING,
    },
    //impuesto
    tax: {
      type: Sequelize.DECIMAL(4,2),
    },
    //total
    total: {
      type: Sequelize.DECIMAL(11,2),
    },
    //pago
    payment: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    //estado
    status: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    //fecha creado
    createdAt: {
      type: Sequelize.DATE,
    },
    //fecha actualizado
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Sale.hasMany(DetailSale, {as: 'detailSale', foreignKey: 'sale'}); // Will add userId to Post model

module.exports = Sale;
