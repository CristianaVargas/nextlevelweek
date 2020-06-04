import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

//index, show, create, update, delete

const routes = express.Router();
const pointsController = new PointsController();
const itemController = new ItemsController();

routes.post('/points', pointsController.create);
routes.get('/items', itemController.index);
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index)

export default routes;
