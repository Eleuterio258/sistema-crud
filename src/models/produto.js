const { Model, DataTypes } = require("sequelize");

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        preco: DataTypes.STRING,
        precoExtenso: DataTypes.STRING,
      },
      {
        sequelize,
        timestamps: true,
      }
    );
  }
}

module.exports = Produto;
