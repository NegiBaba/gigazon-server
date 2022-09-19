import mongoose, { Schema } from 'mongoose';
import { productSchema } from './product.model';

const cartSchema = new Schema({
  product: productSchema,
  quantity: Number
})

export default mongoose.model('cart', cartSchema);