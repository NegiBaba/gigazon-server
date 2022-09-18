import mongoose from 'mongoose';
import app from './express';

app.listen(5000, () => {
  console.log('server started on port ', 5000);
});

mongoose.connect('mongodb://localhost:27017/gigazon')
  .then(() => {
    console.log('connected to mongodb server')
  })
  .catch(error => {
    console.log('error while connecting to mongodb server ', error);
  })
