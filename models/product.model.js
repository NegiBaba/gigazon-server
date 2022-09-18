import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
  name: String,
  price: Number,
  discount: Number,
  image: String,
  isNew: Boolean
});

export default mongoose.model('Product', productSchema);