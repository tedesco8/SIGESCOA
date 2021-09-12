const Sequelize = require("sequelize");
const sequelize = require("../config/database");
const Sale = require("./sale");

const DetailSale = sequelize.define(
  "detail_sales",
  {
    //identificacion
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    //venta
    sale: {
      type: Sequelize.INTEGER,
      allowNull: true,
      onDelete: 'CASCADE',
      references: {
        model: "sales",
        key: "id",
      },
    },
    //articulo
    article: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "articles",
        key: "id",
      },
    },
    //cantidad
    amount: {
      type: Sequelize.INTEGER,
    },
    //precio
    price: {
      type: Sequelize.DECIMAL(11,2),
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

module.exports = DetailSale;
