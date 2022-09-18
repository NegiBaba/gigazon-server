import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
  name: String,
  price: Number,
  discount: Number,
  image: String,
  isProductNew: Boolean
});

export { productSchema };
export default mongoose.model('Product', productSchema);