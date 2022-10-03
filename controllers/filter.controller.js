import Product from '../models/product.model';

const filterProducts = async (req, res) => {
  try {
    const { filter } = req.query;
    let products = [];
    if (filter === 'All Categories') {
      products = await Product.find({});
    } else {
      products = await Product.find({ category: filter });
    }
    return res.json(products);
  } catch (error) {
    res.sendStatus(400).json({
      error: error,
    });
  }
};

export default { filterProducts };
