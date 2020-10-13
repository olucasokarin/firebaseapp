import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const {Navigator, Screen} = createStackNavigator();

function Route() {
  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen name="SigIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  )

}

export default Route;
