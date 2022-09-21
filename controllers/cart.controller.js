import Cart from '../models/cart.model'

const upsert = async (req, res) => {
  const { product, quantity } = req.body;
  const foundProduct = await Cart.findOne({
    'product._id': product.product._id
  })
  if (foundProduct === null) {
    const productToBeAdded = new Cart({
      product,
      quantity
    });
    try {
      await productToBeAdded.save();
      return res.status(200).json({
        message: 'Successfully added product to the cart!'
      })
    } catch (error) {
      return res.status(400).json({
        error: error
      })
    }
  } else {
    foundProduct.quantity = quantity;
    await foundProduct.save();
    return res.status(200).json({
      message: "Succesfully updated product's quantity",
      product: foundProduct
    })
  }
}

const list = async (req, res) => {
  try {
    const products = await Cart.find({});
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