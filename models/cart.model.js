import mongoose, { Schema } from 'mongoose';
import { productSchema } from './product.model';

const cartSchema = new Schema({
  count: Number,
  products: [productSchema]
})

export default mongoose.model('cart', cartSchema);