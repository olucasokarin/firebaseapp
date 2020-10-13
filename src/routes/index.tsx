import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../hooks/auth';
import AppRoutes from './app.routes';

import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {

  const { user, initializing } = useAuth();

  if (initializing) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#ff9000" />
      </View>
    );
  }

  return user ? <AppRoutes/> : <AuthRoutes />

  // return <AuthRoutes/>
}

export default Routes;
