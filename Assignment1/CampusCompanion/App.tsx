import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

export default function App() {
  return (
    // NavigationContainer is the root wrapper for all navigation
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}