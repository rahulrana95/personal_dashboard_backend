//config/routes.js
import UserController from './controllers/UserController';

export default (server) => {

  // POST ROUTES
  server.post(`/api/v1/signup`, UserController.signup);
  server.post(`/api/v1/login`, UserController.login);
  server.get('api/v1/weight-loss/:id',WeightLoss.getUser)
}