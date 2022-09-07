import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// todos los productos
router.get('/products', (req, res) => {
  Product.find((err, products) => {
    res.render('cart', { products: products })
  });
});
// un producto por id
router.get('/products/:id', (req, res) => {
  console.log(req.params.id);
  res.end();
});
// crea un producto
router.post('/products', (req, res) => {
  const { title, price, stock } = req.body;
  console.log(req.body);
  const product = new Product({ title, price, stock });
  product.save((err, product) => {
    // res.status(201).json(product);
    res.redirect('/');
  });
});
// borra un producto
router.delete('/products/:id', (req, res) => {
  console.log(req.params.id);
  res.end();
});

export default router;
