import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  stock: Number
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
