import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/HomePage';
import Test from '../pages/TestPage';

const {Navigator, Screen}  = createStackNavigator();

export const HomeStack = () => (
    <Navigator
      headerMode='screen'
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name='Home'
        component={Home}
        options={{ title: 'Home' }}
      />
      <Screen
        name='TestPage'
        component={Test}
        options={{ title: 'Test Page' }}
      />
    </Navigator>
  );
  
  export default HomeStack;