import HomePage from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
