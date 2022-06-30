import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Test2 from '../pages/Test2';

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = () => (
  <Navigator
    headerMode='screen'
    screenOptions={{
        headerShown: false
    }}
  >
    <Screen
      name='Test 2'
      component={Test2}
      options={{ title: 'About GameZone' }}
    />
  </Navigator>
);

export default AboutStack;