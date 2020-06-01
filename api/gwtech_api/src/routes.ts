import { Router } from 'express';
import companyController from './controllers/companyController';

const routes = Router();

routes.get('/', (req, res) => res.send('Welcome to the growth challenge api!'));
routes.get('/companies/:company_name?', companyController.index);
routes.get('/companies/:company_name/users/:id?', companyController.getUsers);

export default routes;
