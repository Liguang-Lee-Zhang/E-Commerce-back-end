// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: ProductTag,
  foreignKey: 'product_id',
  
  // Define an alias for when data is retrieved
  // as: 'location_travellers'
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through:  ProductTag,
  foreignKey: 'tag_id',

});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
