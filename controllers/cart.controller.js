import Cart from '../models/cart.model'

const upsert = async (req, res) => {
  const { product, quantity } = req.body;
  const foundProduct = await Cart.findOne().where('product._id').equals(product._id);
  if (foundProduct === null) {
    const productToBeAdded = new Cart({
      product,
      quantity
    });
    try {
      const prod = await productToBeAdded.save();
      return res.status(200).json({
        message: 'Successfully added product to the cart!'
      })
    } catch (error) {
      return res.status(400).json({
        error: error
      })
    }
  } else {
    return res.status(200).json({
      message: "Product already in cart!"
    })
  }
}

const list = async (req, res) => {
  try {
    const products = await Cart.find({}, { product: 1 });
    return res.json(products);
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      error
    })
  }
}

export default {
  upsert,
  list
}