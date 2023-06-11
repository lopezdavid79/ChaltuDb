module.exports = (sequelize, dataTypes) =>{
  let alias = "Product";
  let cols = {
    id: {
    type: dataTypes.BIGINT(10).UNSIGNED,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  }, 
  articulo:{
  type: dataTypes.STRING(10),
  allowNull: true,
  },
  modelo: {
    type: dataTypes.STRING(500),
    allowNull: false
  },

  precio:{
    type: dataTypes.DECIMAL(3, 1).UNSIGNED,
    allowNull: false
  },
  
  descripcion: {
    type: dataTypes.DATEONLY,
    allowNull: false
  },

  imagen: dataTypes.STRING(255)
  
  };
  
  let config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false
  }

  const Product = sequelize.define(alias, cols, config);

  // Product.associate = function(models){
  //   Product.belongsTo(models.Articulo, {
  //       as: "articulo",
  //       foreignKey: "id_articulo"
  //   })
  //  }
   return Product 
};