import Product from '../models/product.model';

const search = async (req, res) => {
  const { q } = req.query;
  try {
    const products = await Product.find({
      name: { $regex: q, $options: 'i' },
    });
    res.status(200).json({
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error,
    });
  }
};

export default {
  search,
};
