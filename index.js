import express from 'express';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;
const DB   = process.env.DB  || 'mongodb://127.0.0.1/ecommerce';

mongoose.connect(DB)
  .then(() => console.log('todo bien con la DB'))
  .catch(err => console.error(err));

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import apiRouter from './routes/api.js';
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log('Server escuchando en puerto ' + PORT);
})
