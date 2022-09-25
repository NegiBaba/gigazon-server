import Product from '../models/product.model'

/**
 * Adds a new product to the database, to be used only by developer that is why doesn't contains req, res params
 * @param {Object} product a JS object containing details of a product, refer to product model for more info
 */
const addProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save()
    return res.status(200).json({
      message: 'Succesfully added new product',
      ...req.body
    });
  } catch (error) {
    console.log('error adding a new product ', error);
  }
}

/**
 * Async method to fetch list of products
 * @param {*} req 
 * @param {*} res 
 * @returns list of product
 */
const list = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json(products);
  }
  catch (error) {
    console.log('error fetching list of products ', error);
    res.status(400).json({
      error: error
    })
  }
}

const update = async (req, res) => {
  console.log(req.body)
  const { _id, field, value } = req.body;
  try {
    const product = await Product.findOne({ _id: _id });
    if (product) {
      product[field] = value;
      try {
        await product.save();
        res.status(200).json({
          message: 'Successfully updated the product!'
        })
      } catch (error) {
        res.status(400).json({
          error: error
        })
      }
    }
  }
  catch (error) {
    console.log(error);
  }
}

export default {
  addProduct,
  list,
  update
}