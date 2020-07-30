import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import routeConstants from '../routes/routeConstants';

const Stack = createStackNavigator();

// Need to work
// const PrivateRoute = (route, index) => {
//   return localStorage.getItem('token')?  <Stack.Screen key={index} {...route} /> : ;
// };

// const PublicRoute = (route, index) => {
//   return <Stack.Screen key={index} {...route} />;
// };

// const RouteTypes = {
//   Private: PrivateRoute,
//   Public: PublicRoute,
// };

// const RouteElement = route.isAuthenticated
// ? RouteTypes['Private']
// : RouteTypes['Public'];

export default function Route() {
  const initialRouteName =
    routeConstants.initialRouteName || routeConstants.routes.length > 0
      ? routeConstants.routes[0].name
      : false;

  return (
    <Stack.Navigator headerMode={'none'} initialRouteName={initialRouteName}>
      {routeConstants.routes.map((route, index) => {
        return <Stack.Screen key={`route${index}`} index={index} {...route} />;
      })}
    </Stack.Navigator>
  );
}
