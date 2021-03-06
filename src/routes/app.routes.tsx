import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import NewPost from '../pages/NewPost';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator screenOptions={{ headerShown: false }}>
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="NewPost" component={NewPost} />
  </App.Navigator>
);

export default AppRoutes;
