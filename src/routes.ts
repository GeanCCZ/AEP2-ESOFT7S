import {Router} from 'express';	
import productController from './product/productController';
import userController from './user/userController';
import StockController from './stock/stock.controller';
const routes = Router();

routes.post("/createProduct", productController.addProduct);
routes.get("/getStock", productController.getStock);
routes.get("/getProduct/:id", productController.getProductByID);
routes.delete("/deleteProduct/:id", productController.remProduct);
routes.put("/updateProduct/:id", productController.updProduct);
routes.get("/randomProduct", productController.randomProduct)

routes.post("/createUser", userController.addUser);
routes.get("/getUser/:id", userController.getUserById);
routes.get("/getUsers", userController.getUsers);
routes.delete("/deleteUser/:id", userController.deleteUser);
routes.put("/updateUser/:id", userController.updateUser);

routes.get("/getStockValue", StockController.getStockValue);
routes.get("/getTotalStockValue", StockController.getTotalStockValue);

routes.get("/writeStock", productController.writeStock);
routes.get("/readStock", productController.readStock);
export default routes;