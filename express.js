import bodyParser from 'body-parser';
import express from 'express';
import cors from "cors"
import productRoutes from "./routes/product.route"
import cartRoutes from "./routes/cart.route"

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('You sent get request to gigazon server')
})

app.use('/', productRoutes);
app.use('/', cartRoutes);

export default app;
