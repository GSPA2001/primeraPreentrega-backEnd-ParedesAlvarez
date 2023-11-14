import express from 'express';
//import http from 'http';
//import { Server } from 'socket.io';
import productsRouter from './src/routes/products.routes.js';
import cartsRouter from './src/routes/carts.routes.js';

const app = express();
//const server = http.createServer(app);
//const io = new Server(server); // Aquí se crea una instancia de Socket.IO asociada a tu servidor HTTP

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*app.use((req, res, next) => {
  req.io = io;
  next();
});*/

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

// Puerto 8080
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});