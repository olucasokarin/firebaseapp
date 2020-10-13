import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppProvider from './hooks';

import Routes from './routes';



const App: React.FC = () => (
  <NavigationContainer>
    <AppProvider>
      <Routes />
    </AppProvider>
  </NavigationContainer>
);

export default App;
