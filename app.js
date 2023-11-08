import express from 'express';
import productsRouter from './src/routes/products.routes.js';
import cartsRouter from './src/routes/carts.routes.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Puerto 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});