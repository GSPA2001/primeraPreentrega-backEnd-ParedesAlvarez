# Primera Pre Entrega

- Curso de programación BackEnd - CoderHouse

## Author

- Gisel Sthefania Paredes Alvarez

## Métodos node utilizados 

Instalación:
* npm init -y (e instalación de nodemon)
* npm install express
* Para visualización, en terminal: nodemon src/app.js

## Funcionamiento de los endpoints:
* Al acceder a http://localhost:8080/api/products, se obtienen todos los productos.
* Al visitar http://localhost:8080/api/products?limit=5, se muestran solo los primeros 5 productos.
* Al ingresar a http://localhost:8080/api/products/2, se muestra solo el producto con ID 2.
* Al probar con un ID inexistente, por ejemplo, http://localhost:8080/api/products/999, se devuelve un mensaje indicando que el producto no se encontró.

Para probar el código puede usar Postman
### Enviar Solicitudes a las Rutas Específicas
Una vez que el servidor esté en ejecución, abre Postman:

#### Para Productos:
- **Obtener todos los productos:** Utiliza el método GET a la URL http://localhost:8080/api/products.
- **Obtener un producto por ID:** Utiliza el método GET a la URL http://localhost:8080/api/products/{id}, donde {id} es el ID del producto.
- **Eliminar un producto por ID:** Utiliza el método DELETE a la URL http://localhost:8080/api/products/{id}, donde {id} es el ID del producto que deseas eliminar.

#### Para Carritos:
- **Crear un nuevo carrito:** Utiliza el método POST a la URL http://localhost:8080/api/carts.
- **Obtener un carrito por ID:** Utiliza el método GET a la URL http://localhost:8080/api/carts/{id}, donde {id} es el ID del carrito.


## Used by

Este proyecto es solamente de uso para ejemplo de clase, su estructura no puede ser o debiera ser tomada necesariamente como propuesta para un proyecto real.
Este proyecto es para cumplir con el Primera Pre Entrega, del curso de programación backend de coderhouse.