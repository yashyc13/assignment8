import express from 'express';
import { userController } from './controller.js';
import { customer } from './customerController.js';
import { roleController } from './rolesController.js';
const route = express.Router();
route.get('/users', userController.getAll);
route.get('/users/:id', userController.getUserById);
route.get('/customers', customer.getCustomers);
route.get('/customers/:name', customer.getCustomerIdByName);
route.get('/roles', roleController.getRoles);
route.get('/roles/:name', roleController.getRoleKeyByName);
route.post('/add', userController.createUser);
route.put('/update/:id', userController.updateUser);
route.delete('/delete/:id', userController.deleteUser);
export default route;
//# sourceMappingURL=route.js.map