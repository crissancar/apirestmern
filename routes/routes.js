const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const orderController = require("../controllers/orderController");

module.exports = function () {
  // ###########
  // Users
  // ###########

  //nuevo usuario
  router.post("/users", userController.newUser);

  //obtener todos los usuarios
  router.get("/users", userController.getUsers);

  //obtener un usuario
  router.get("/users/:id", userController.getUser);

  //actualizar usuario
  router.post("/users/:id", userController.updateUser);

  //eliminar usuario
  router.delete("/users/:id", userController.deleteUser);

  // ###########
  // Products
  // ###########

  //nuevo producto
  router.post("/products", productController.newProduct);

  //listar productos
  router.get("/products", productController.getProducts);

  //listar un producto
  router.get("/products/:id", productController.getProduct);

  //actualizar producto
  router.put("/products/:id", productController.updateProduct);

  //eliminar producto
  router.delete("/products/:id", productController.deleteProduct);

  // ###########
  // Orders
  // ###########

  router.post("/orders", orderController.newOrder);

  router.get("/orders", orderController.getOrders);

  router.get("/orders/:id", orderController.getOrder);

  router.put("/orders/:id", orderController.updateOrder);

  router.delete("/orders/:id", orderController.deleteOrder);


  return router;
};
