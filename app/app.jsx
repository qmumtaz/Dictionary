import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './index'
import Dictionary from './dictionary';
import RandomScreen from './random';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
  );
};

export default App;