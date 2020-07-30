import Home from '../screens/Home/index';
import Login from '../screens/Login/index';

export default {
  initialRouteName: 'Login',
  routes: [
    {
      name: 'Login',
      component: Login,
      isAuthenticated: false,
    },
    {
      name: 'Home',
      component: Home,
      isAuthenticated: false,
    },
  ],
};
