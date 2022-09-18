import Product from '../models/product.model'

/**
 * Adds a new product to the database, to be used only by developer that is why doesn't contains req, res params
 * @param {Object} product a JS object containing details of a product, refer to product model for more info
 */
const addProduct = async (productDetails) => {
  const product = new Product(productDetails);
  try {
    await product.save(productDetails)
    console.log('Added a new product ');
  } catch (error) {
    console.log('error adding a new product ', error);
  }
}