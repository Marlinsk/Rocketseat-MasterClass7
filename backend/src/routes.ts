import { Router } from 'express';
import AnimalController from './controllers/AnimalController';

const routes = Router();

routes.get('/animals', AnimalController.index);
routes.post('/animals/create', AnimalController.create);

export default routes;